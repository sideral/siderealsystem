#!/usr/bin/env bash
# Called over SSH by the GitHub-hosted runner, as the siderealsystem user.
set -euo pipefail
app_root=${SIDEREAL_ROOT:-/var/www/siderealsystem}
release_id=${1:?Pass the release ID}
[[ $release_id =~ ^[a-f0-9]{40}-[0-9]+-[0-9]+$ ]] || { echo 'Invalid release ID.' >&2; exit 1; }
release="$app_root/releases/$release_id"
archive="$app_root/incoming/$release_id.tar.gz"

# Serialize all deploys, including manual SSH invocations.
exec 9>"$app_root/.deploy.lock"
flock -x 9
umask 0022
mkdir "$release"
tar --extract --gzip --file "$archive" --directory "$release" --no-same-owner
[[ -s "$release/dist/index.html" ]]
# Caddy needs to read the public files.
chmod -R a+rX "$release"

# Atomic switch: the old release keeps serving until the rename.
ln -s "$release" "$app_root/.current-$release_id"
mv -Tf "$app_root/.current-$release_id" "$app_root/current"

rm -f "$archive" "$app_root/incoming/$release_id.sh"

# Keep the five newest releases so a rollback is one symlink away.
current=$(readlink -f "$app_root/current")
ls -1dt "$app_root"/releases/*/ | tail -n +6 | while read -r old; do
  [[ $(readlink -f "$old") == "$current" ]] || rm -rf "$old"
done
echo "Deployed $release_id"
