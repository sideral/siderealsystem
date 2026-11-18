#!/usr/bin/env bash
# Run once with sudo on the server that already runs Budgety, Wordcord, SumIt, etc.:
#   sudo bash setup-server.sh 'ssh-ed25519 AAAA... siderealsystem-github-actions'
# Safe to re-run: every step checks before it changes anything.
set -euo pipefail
[[ $EUID -eq 0 ]] || { echo 'Run with sudo.' >&2; exit 1; }
deploy_key=${1:?Pass the deploy public key (one line, quoted)}
[[ $deploy_key =~ ^ssh-ed25519\ [A-Za-z0-9+/=]+(\ [A-Za-z0-9._@-]+)?$ ]] || { echo 'Expected a single ssh-ed25519 public key.' >&2; exit 1; }
user=siderealsystem
app_root=/var/www/siderealsystem
site=siderealsystem.com
caddyfile=/etc/caddy/Caddyfile

command -v caddy >/dev/null || { echo 'Expected the existing Caddy installation.' >&2; exit 1; }

# Dedicated user with no password; it only ever logs in with the deploy key.
if ! id "$user" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "$user"
fi
install -d -o "$user" -g "$user" -m 755 "$app_root" "$app_root/releases" "$app_root/incoming"
install -d -o "$user" -g "$user" -m 700 "/home/$user/.ssh"
keys=/home/$user/.ssh/authorized_keys
touch "$keys"
grep -qxF "restrict $deploy_key" "$keys" || printf 'restrict %s\n' "$deploy_key" >> "$keys"
chown "$user:$user" "$keys"
chmod 600 "$keys"

# Append the site beside the existing ones; never touch their blocks.
if grep -qE "^$site[[:space:]]*\{" "$caddyfile"; then
  echo "$site is already in $caddyfile; leaving it alone."
else
  backup="$caddyfile.backup-$(date +%Y%m%d%H%M%S)"
  cp -a "$caddyfile" "$backup"
  cat >> "$caddyfile" <<EOF

$site {
	encode zstd gzip
	header X-Content-Type-Options nosniff
	root * $app_root/current/dist

	# Vite fingerprints everything under /assets, so it can be cached forever.
	@hashed path /assets/*
	header @hashed Cache-Control "public, max-age=31536000, immutable"
	@html not path /assets/*
	header @html Cache-Control "public, max-age=0, must-revalidate"

	file_server
}
EOF
  if ! caddy validate --config "$caddyfile" --adapter caddyfile >/dev/null 2>&1; then
    cp -a "$backup" "$caddyfile"
    echo "Caddy rejected the new block; restored $backup." >&2
    exit 1
  fi
  systemctl reload caddy
fi
systemctl is-active caddy
echo "Server prepared for $site. Add the GitHub secrets, then push to main."
