import { describe, expect, it } from 'vitest'
import {
  type Camera,
  type Viewport,
  blendCameras,
  cameraFromDevice,
  cameraFromHorizontal,
  compassPoint,
  compassTurn,
  deviceRotation,
  horizonOnScreen,
  pickNearest,
  project,
  turnCamera,
  unproject,
} from './camera'
import { horizontalFromVector, vectorFromHorizontal } from './frames'
import { DEG, type Vec3, cross, dot } from './vec'

const PHONE: Viewport = { width: 414, height: 896, fovRad: 90 * DEG } // iPhone XR, portrait

const rounded = (v: Vec3): number[] => v.map((n) => Number(n.toFixed(9)) + 0)

function expectOrthonormal(camera: Camera): void {
  expect(dot(camera.right, camera.up)).toBeCloseTo(0, 9)
  expect(dot(camera.right, camera.forward)).toBeCloseTo(0, 9)
  expect(rounded(cross(camera.forward, camera.up))).toEqual(rounded(camera.right))
}

describe('cameraFromHorizontal', () => {
  it('looking north along the horizon has east to the right and the zenith up', () => {
    const camera = cameraFromHorizontal(0, 0)
    expect(rounded(camera.forward)).toEqual([0, 1, 0])
    expect(rounded(camera.right)).toEqual([1, 0, 0])
    expect(rounded(camera.up)).toEqual([0, 0, 1])
  })

  it('stays orthonormal for any direction', () => {
    expectOrthonormal(cameraFromHorizontal(2.1, 0.9))
    expectOrthonormal(cameraFromHorizontal(5.5, -1.2))
  })
})

describe('cameraFromDevice', () => {
  it('a phone lying flat, screen up, looks straight down', () => {
    const camera = cameraFromDevice(deviceRotation(0, 0, 0))
    expect(rounded(camera.forward)).toEqual([0, 0, -1])
    expect(rounded(camera.up)).toEqual([0, 1, 0]) // top edge to the north
  })

  it('a phone held upright, back toward north, looks north along the horizon', () => {
    const camera = cameraFromDevice(deviceRotation(0, 90, 0))
    expect(rounded(camera.forward)).toEqual([0, 1, 0])
    expect(rounded(camera.right)).toEqual([1, 0, 0])
    expect(rounded(camera.up)).toEqual([0, 0, 1])
  })

  it('tipping the phone back past upright looks above the horizon', () => {
    const camera = cameraFromDevice(deviceRotation(0, 135, 0))
    const { altRad, azRad } = horizontalFromVector(camera.forward)
    expect(altRad / DEG).toBeCloseTo(45, 9)
    expect(azRad).toBeCloseTo(0, 9)
  })

  it('held overhead, screen down, looks at the zenith', () => {
    expect(rounded(cameraFromDevice(deviceRotation(0, 180, 0)).forward)).toEqual([0, 0, 1])
  })

  it('alpha turns the phone counter-clockwise seen from above', () => {
    const { azRad } = horizontalFromVector(cameraFromDevice(deviceRotation(90, 90, 0)).forward)
    expect(azRad / DEG).toBeCloseTo(270, 9) // west
  })

  it('in landscape the screen axes follow the page, and the view direction does not change', () => {
    const rotation = deviceRotation(0, 90, 0)
    const portrait = cameraFromDevice(rotation, 0)
    const landscape = cameraFromDevice(rotation, 90)
    expect(rounded(landscape.forward)).toEqual(rounded(portrait.forward))
    expect(rounded(landscape.up)).toEqual(rounded(portrait.right))
    expectOrthonormal(landscape)
  })
})

describe('compassTurn', () => {
  it('is zero when the relative frame already agrees with the compass', () => {
    // alpha 30° turns the top edge 30° west of north: a compass heading of 330°
    expect(compassTurn(deviceRotation(30, 20, 5), 330)?.turn).toBeCloseTo(0, 9)
  })

  it('gives the turn that lines the top edge up with the heading', () => {
    const rotation = deviceRotation(0, 20, 0) // relative frame says: top edge north
    const turn = compassTurn(rotation, 90)?.turn // compass says: top edge east
    expect(turn).toBeCloseTo(90 * DEG, 9)
    const camera = turnCamera(cameraFromDevice(rotation), turn ?? 0)
    expect(horizontalFromVector(camera.up).azRad / DEG).toBeCloseTo(90, 9)
  })

  it('accounts for the top edge pointing backward once the phone is tipped past upright', () => {
    // Back of the phone toward north, tipped back to look 45° up: the top edge points south
    expect(compassTurn(deviceRotation(0, 135, 0), 180)?.turn).toBeCloseTo(0, 9)
  })

  it('declines when the top edge is close to vertical, and trusts it more the flatter it lies', () => {
    expect(compassTurn(deviceRotation(0, 88, 0), 123)).toBeNull()
    const upright = compassTurn(deviceRotation(0, 105, 0), 180)
    expect(upright?.turn).toBeCloseTo(0, 9)
    expect(upright?.confidence).toBeGreaterThan(0.2)
    expect(upright?.confidence).toBeLessThan(0.6)
    expect(compassTurn(deviceRotation(0, 30, 0), 0)?.confidence).toBe(1)
  })
})

describe('turnCamera', () => {
  it('increases azimuth and keeps altitude', () => {
    const turned = turnCamera(cameraFromHorizontal(40 * DEG, 0.5), 25 * DEG)
    const { altRad, azRad } = horizontalFromVector(turned.forward)
    expect(azRad / DEG).toBeCloseTo(65, 9)
    expect(altRad).toBeCloseTo(0.5, 9)
    expectOrthonormal(turned)
  })
})

describe('blendCameras', () => {
  it('returns the ends at 0 and 1 and an orthonormal camera in between', () => {
    const a = cameraFromHorizontal(1, 0.2)
    const b = cameraFromHorizontal(1.3, 0.5)
    expect(rounded(blendCameras(a, b, 0).forward)).toEqual(rounded(a.forward))
    expect(rounded(blendCameras(a, b, 1).forward)).toEqual(rounded(b.forward))
    expectOrthonormal(blendCameras(a, b, 0.4))
  })
})

describe('project / unproject', () => {
  const camera = cameraFromHorizontal(200 * DEG, 35 * DEG)

  it('puts the view direction in the middle of the screen', () => {
    const centre = project(camera.forward, camera, PHONE)
    expect(centre?.x).toBeCloseTo(207, 9)
    expect(centre?.y).toBeCloseTo(448, 9)
  })

  it('spans the field of view across the longer side', () => {
    const top = project(vectorFromHorizontal(80 * DEG, 200 * DEG), camera, PHONE) // 45° above centre
    expect(top?.x).toBeCloseTo(207, 6)
    expect(top?.y).toBeCloseTo(0, 6)
  })

  it('puts east of the view to the right and higher on the sky toward the top', () => {
    const centre = project(camera.forward, camera, PHONE)
    const higher = project(vectorFromHorizontal(45 * DEG, 200 * DEG), camera, PHONE)
    const clockwise = project(vectorFromHorizontal(35 * DEG, 210 * DEG), camera, PHONE)
    expect(higher?.y).toBeLessThan(centre?.y ?? 0)
    expect(clockwise?.x).toBeGreaterThan(centre?.x ?? 0)
  })

  it('round-trips screen points', () => {
    for (const [x, y] of [[207, 448], [0, 0], [414, 896], [50, 700], [400, 10]] as const) {
      const again = project(unproject(x, y, camera, PHONE), camera, PHONE)
      expect(again?.x).toBeCloseTo(x, 6)
      expect(again?.y).toBeCloseTo(y, 6)
    }
  })

  it('does not draw what is straight behind', () => {
    expect(project([-camera.forward[0], -camera.forward[1], -camera.forward[2]], camera, PHONE)).toBeNull()
  })
})

describe('horizonOnScreen', () => {
  const onShape = (camera: Camera, azDeg: number): number => {
    const shape = horizonOnScreen(camera, PHONE)
    const point = project(vectorFromHorizontal(0, azDeg * DEG), camera, PHONE)
    if (!point) throw new Error('horizon point is behind the camera')
    if (shape.kind === 'circle') return Math.hypot(point.x - shape.x, point.y - shape.y) - shape.radius
    return (point.x - shape.x) * shape.nx + (point.y - shape.y) * shape.ny
  }

  it('is a circle that every horizon point lies on, with the sky inside when looking up', () => {
    const camera = cameraFromHorizontal(120 * DEG, 50 * DEG)
    const shape = horizonOnScreen(camera, PHONE)
    expect(shape.kind).toBe('circle')
    if (shape.kind === 'circle') expect(shape.skyInside).toBe(true)
    for (const az of [0, 77, 120, 200, 300]) expect(onShape(camera, az)).toBeCloseTo(0, 6)
  })

  it('has the ground inside when looking down', () => {
    const shape = horizonOnScreen(cameraFromHorizontal(0, -40 * DEG), PHONE)
    expect(shape.kind === 'circle' && !shape.skyInside).toBe(true)
  })

  it('is a level line across the middle when looking straight at the horizon', () => {
    const camera = cameraFromHorizontal(120 * DEG, 0)
    const shape = horizonOnScreen(camera, PHONE)
    expect(shape.kind).toBe('line')
    if (shape.kind === 'line') {
      expect(shape.y).toBeCloseTo(448, 6)
      expect(shape.ny).toBeCloseTo(-1, 9) // the sky is toward the top of the screen
    }
    expect(onShape(camera, 110)).toBeCloseTo(0, 6)
  })
})

describe('pickNearest', () => {
  const stars = [vectorFromHorizontal(0.5, 1), vectorFromHorizontal(0.5, 1.2), vectorFromHorizontal(-0.3, 4)]

  it('finds the nearest direction within reach', () => {
    expect(pickNearest(stars, vectorFromHorizontal(0.5, 1.15), 5 * DEG)).toBe(1)
  })

  it('returns -1 when nothing is close enough', () => {
    expect(pickNearest(stars, vectorFromHorizontal(1.2, 3), 5 * DEG)).toBe(-1)
  })
})

describe('compassPoint', () => {
  it('names the sixteen points', () => {
    expect(compassPoint(0)).toBe('N')
    expect(compassPoint(90 * DEG)).toBe('E')
    expect(compassPoint(202 * DEG)).toBe('SSW')
    expect(compassPoint(355 * DEG)).toBe('N')
  })
})
