<template>
  <div ref="hostRef" class="intro-object" aria-hidden="true"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const hostRef = ref(null)

let renderer = null
let scene = null
let camera = null
let raf = null
let resizeObserver = null
let intersectionObserver = null
let inView = true

let allowInteract = false
let sectionEl = null

let boxes = []
let visW = 8
let visH = 4.14
let prevMouse = { x: 9999, y: 9999, valid: false }

const GRAVITY = 0.0011
const RESTITUTION = 0.45        // 벽·바닥 튕김
const AIR_FRICTION = 0.995
const FLOOR_FRICTION = 0.9
const ANG_FRICTION = 0.96
const REST_THRESHOLD = 0.006
const MAX_SPEED = 0.16
const STRIKE_FACTOR = 0.24     // 마우스 타격 전달력
const STRIKE_PAD = 0.28         // 박스 주변 타격 여유

const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1

function check() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  allowInteract = !reduced && fine
  return reduced
}

function computeView() {
  const vFOV = THREE.MathUtils.degToRad(camera.fov)
  visH = 2 * Math.tan(vFOV / 2) * camera.position.z
  visW = visH * camera.aspect
}

// 디바이스별 박스 구성 (개수·크기·간격)
function getConfig() {
  if (window.matchMedia('(max-width: 899px)').matches) {
    // 모바일: 5개, 작게
    return {
      halves: [0.2, 0.16, 0.18, 0.15, 0.19],
      spread: 0.45,
    }
  }
  if (window.matchMedia('(max-width: 1559px)').matches) {
    // 태블릿: 9개, 중간
    return {
      halves: [0.3, 0.24, 0.28, 0.22, 0.26, 0.2, 0.27, 0.23, 0.29],
      spread: 0.6,
    }
  }
  // PC (1560px~): 12개
  return {
    halves: [0.37, 0.28, 0.33, 0.24, 0.3, 0.26, 0.35, 0.22, 0.31, 0.27, 0.34, 0.23],
    spread: 0.62,
  }
}

function makeBox(half) {
  const geo = new THREE.BoxGeometry(half * 2, half * 2, half * 2)

  const faceMat = new THREE.MeshBasicMaterial({
    color: 0x04c2c9,
    transparent: true,
    opacity: 0.06,
    side: THREE.DoubleSide,
  })
  const faces = new THREE.Mesh(geo, faceMat)

  const edgeGeo = new THREE.EdgesGeometry(geo)
  const edgeMat = new THREE.LineBasicMaterial({
    color: 0x2fe3ea,
    transparent: true,
    opacity: 0.75,
  })
  const edges = new THREE.LineSegments(edgeGeo, edgeMat)

  const group = new THREE.Group()
  group.add(faces)
  group.add(edges)
  return group
}

function init() {
  const host = hostRef.value
  if (!host) return
  const w = host.clientWidth
  const h = host.clientHeight
  if (w === 0 || h === 0) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(dpr)
  renderer.setSize(w, h)
  host.appendChild(renderer.domElement)

  computeView()

  // 디바이스별 박스 개수·크기·간격
  const cfg = getConfig()
  const halves = cfg.halves
  const spread = cfg.spread
  const baseIndex = (halves.length - 1) / 2

  boxes = halves.map((half, i) => {
    const obj = makeBox(half)
    // 제각각 다른 초기 자세
    obj.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
    scene.add(obj)
    return {
      obj,
      half,
      r: half * 1.18,            // 충돌 근사 반경
      mass: half * half,
      x: (i - baseIndex) * spread + (Math.random() - 0.5) * 0.4,
      y: visH / 2 + half + i * 1.2, // 위에서 시차를 두고 떨어짐
      vx: (Math.random() - 0.5) * 0.02,
      vy: 0,
      // 3D 각속도 (떨어질 때 살짝 텀블, 멈추면 0으로 수렴)
      va: {
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.004,
        z: (Math.random() - 0.5) * 0.004,
      },
    }
  })
}

function clampSpeed(b) {
  const sp = Math.hypot(b.vx, b.vy)
  if (sp > MAX_SPEED) {
    b.vx = (b.vx / sp) * MAX_SPEED
    b.vy = (b.vy / sp) * MAX_SPEED
  }
}

function collideBoxes() {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i]
      const b = boxes[j]
      const dx = b.x - a.x
      const dy = b.y - a.y
      const dist = Math.hypot(dx, dy)
      const minDist = a.r + b.r
      if (dist < minDist && dist > 0.0001) {
        const nx = dx / dist
        const ny = dy / dist
        const overlap = minDist - dist
        const totalMass = a.mass + b.mass
        // 분리
        a.x -= nx * overlap * (b.mass / totalMass)
        a.y -= ny * overlap * (b.mass / totalMass)
        b.x += nx * overlap * (a.mass / totalMass)
        b.y += ny * overlap * (a.mass / totalMass)
        // 충격량
        const rvx = b.vx - a.vx
        const rvy = b.vy - a.vy
        const relN = rvx * nx + rvy * ny
        if (relN < 0) {
          const e = 0.4
          const jImp = (-(1 + e) * relN) / (1 / a.mass + 1 / b.mass)
          const ix = jImp * nx
          const iy = jImp * ny
          a.vx -= ix / a.mass
          a.vy -= iy / a.mass
          b.vx += ix / b.mass
          b.vy += iy / b.mass
          // 충돌 지점 따라 3축 회전 킥
          const kick = relN * 0.014
          a.va.x -= kick * ny; a.va.y += kick * nx; a.va.z -= kick
          b.va.x += kick * ny; b.va.y -= kick * nx; b.va.z += kick
        }
      }
    }
  }
}

function physics() {
  for (const b of boxes) {
    b.vy -= GRAVITY
    clampSpeed(b)
    b.x += b.vx
    b.y += b.vy

    const bx = visW / 2 - b.half
    const by = visH / 2 - b.half

    if (b.x > bx) { b.x = bx; b.vx = -Math.abs(b.vx) * RESTITUTION; b.va.z += b.vy * 0.05 }
    else if (b.x < -bx) { b.x = -bx; b.vx = Math.abs(b.vx) * RESTITUTION; b.va.z -= b.vy * 0.05 }

    if (b.y > by) { b.y = by; b.vy = -Math.abs(b.vy) * RESTITUTION }

    if (b.y < -by) {
      b.y = -by
      if (Math.abs(b.vy) < REST_THRESHOLD) b.vy = 0
      else b.vy = Math.abs(b.vy) * RESTITUTION
      b.vx *= FLOOR_FRICTION
      b.va.z += b.vx * 0.06          // 바닥에서 구르는 느낌
    }

    b.vx *= AIR_FRICTION
    b.va.x *= ANG_FRICTION
    b.va.y *= ANG_FRICTION
    b.va.z *= ANG_FRICTION
  }

  collideBoxes()

  for (const b of boxes) {
    b.obj.position.set(b.x, b.y, 0)
    // 자유 텀블 (모든 축) → 멈추면 그 각도 그대로 유지
    b.obj.rotation.x += b.va.x
    b.obj.rotation.y += b.va.y
    b.obj.rotation.z += b.va.z
  }
}

function render() {
  if (!renderer || !inView) {
    raf = null
    return
  }
  physics()
  renderer.render(scene, camera)
  raf = requestAnimationFrame(render)
}

function startLoop() {
  if (!raf && inView && renderer) raf = requestAnimationFrame(render)
}

function resize() {
  const host = hostRef.value
  if (!host || !renderer || !camera) return
  const w = host.clientWidth
  const h = host.clientHeight
  if (w === 0 || h === 0) return
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
  computeView()
}

// 포인터가 "움직이며" 박스를 지날 때만 타격 (가만히 있으면 영향 없음)
function pointerStrike(clientX, clientY) {
  if (!sectionEl) return
  const rect = sectionEl.getBoundingClientRect()
  const nx = ((clientX - rect.left) / rect.width) * 2 - 1
  const ny = -(((clientY - rect.top) / rect.height) * 2 - 1)
  const mx = nx * (visW / 2)
  const my = ny * (visH / 2)

  if (prevMouse.valid) {
    const dxm = mx - prevMouse.x
    const dym = my - prevMouse.y
    const moveSpeed = Math.hypot(dxm, dym)
    if (moveSpeed > 0.002) {
      for (const b of boxes) {
        const dx = b.x - mx
        const dy = b.y - my
        const dist = Math.hypot(dx, dy)
        if (dist < b.r + STRIKE_PAD) {
          // 진행 방향으로 타격 전달
          b.vx += dxm * STRIKE_FACTOR
          b.vy += dym * STRIKE_FACTOR
          // 3축 회전 킥 (스와이프 방향 따라 텀블)
          b.va.x += dym * 0.14
          b.va.y += dxm * 0.14
          b.va.z += (dxm * dy - dym * dx) * 0.06
          clampSpeed(b)
        }
      }
    }
  }
  prevMouse.x = mx
  prevMouse.y = my
  prevMouse.valid = true
}

function onMove(e) {
  pointerStrike(e.clientX, e.clientY)
}

function onTouchStart(e) {
  const t = e.touches && e.touches[0]
  if (!t) return
  // 손가락 시작점 기준으로 델타 계산하도록 초기화
  prevMouse.valid = false
  pointerStrike(t.clientX, t.clientY)
}

function onTouchMove(e) {
  const t = e.touches && e.touches[0]
  if (t) pointerStrike(t.clientX, t.clientY)
}

function onLeave() {
  prevMouse.valid = false
}

onMounted(() => {
  const reduced = check()
  init()
  if (!renderer) return

  if (reduced) {
    // 모션 감소: 바닥에 정렬해 정적 표시
    const baseIndex = (boxes.length - 1) / 2
    boxes.forEach((b, i) => {
      b.obj.position.set((i - baseIndex) * 1.2, -visH / 2 + b.half, 0)
    })
    renderer.render(scene, camera)
    return
  }

  startLoop()

  sectionEl = hostRef.value?.closest('.section-intro')
  if (sectionEl) {
    // 데스크탑: 마우스 이동으로 타격
    if (allowInteract) {
      sectionEl.addEventListener('mousemove', onMove, { passive: true })
      sectionEl.addEventListener('mouseleave', onLeave)
    }
    // 터치 디바이스: 스와이프로 타격 (스크롤은 그대로)
    const touchCapable = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    if (touchCapable) {
      sectionEl.addEventListener('touchstart', onTouchStart, { passive: true })
      sectionEl.addEventListener('touchmove', onTouchMove, { passive: true })
      sectionEl.addEventListener('touchend', onLeave)
    }
  }

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(hostRef.value)

  intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting
      if (inView) startLoop()
    },
    { threshold: 0 },
  )
  intersectionObserver.observe(hostRef.value)
})

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
  if (sectionEl) {
    sectionEl.removeEventListener('mousemove', onMove)
    sectionEl.removeEventListener('mouseleave', onLeave)
    sectionEl.removeEventListener('touchstart', onTouchStart)
    sectionEl.removeEventListener('touchmove', onTouchMove)
    sectionEl.removeEventListener('touchend', onLeave)
  }
  for (const b of boxes) {
    b.obj.traverse((o) => {
      if (o.geometry) o.geometry.dispose()
      if (o.material) o.material.dispose()
    })
  }
  boxes = []
  renderer?.dispose()
  if (renderer?.domElement && hostRef.value?.contains(renderer.domElement)) {
    hostRef.value.removeChild(renderer.domElement)
  }
})
</script>

<style scoped></style>
