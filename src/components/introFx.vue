<template>
  <div ref="containerRef" class="intro-fx" aria-hidden="true">
    <div class="intro-fx__spotlight" :style="spotlightStyle"></div>
    <canvas ref="canvasRef" class="intro-fx__dots"></canvas>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const canvasRef = ref(null)

const spotX = ref('50%')
const spotY = ref('50%')
const spotOpacity = ref(0)

const spotlightStyle = computed(() => ({
  '--fx-x': spotX.value,
  '--fx-y': spotY.value,
  opacity: spotOpacity.value,
}))

const SPACING = 56
const DOT_R = 1.4
const PUSH_R = 140
const PUSH_F = 32
const LERP = 0.15

let ctx = null
let dots = []
let mouse = { x: -9999, y: -9999, active: false }
let raf = null
let resizeObserver = null
let intersectionObserver = null
let sectionEl = null
let inView = true
let allowed = false
const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1

function check() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  allowed = !reduced && fine
  return allowed
}

function buildDots(w, h) {
  dots = []
  const offset = SPACING * 0.6
  for (let y = offset; y < h; y += SPACING) {
    for (let x = offset; x < w; x += SPACING) {
      dots.push({ bx: x, by: y, cx: x, cy: y })
    }
  }
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return
  canvas.width = Math.floor(rect.width * dpr)
  canvas.height = Math.floor(rect.height * dpr)
  ctx = canvas.getContext('2d')
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.scale(dpr, dpr)
  buildDots(rect.width, rect.height)
}

function frame() {
  if (!ctx || !canvasRef.value || !inView) {
    raf = null
    return
  }
  const rect = canvasRef.value.getBoundingClientRect()
  ctx.clearRect(0, 0, rect.width, rect.height)

  for (let i = 0; i < dots.length; i++) {
    const d = dots[i]
    let tx = d.bx
    let ty = d.by
    let prox = 0
    if (mouse.active) {
      const dx = d.bx - mouse.x
      const dy = d.by - mouse.y
      const dist = Math.hypot(dx, dy)
      if (dist < PUSH_R && dist > 0.5) {
        prox = 1 - dist / PUSH_R
        const force = prox * PUSH_F
        tx = d.bx + (dx / dist) * force
        ty = d.by + (dy / dist) * force
      }
    }
    d.cx += (tx - d.cx) * LERP
    d.cy += (ty - d.cy) * LERP

    const alpha = 0.18 + prox * 0.5
    const radius = DOT_R + prox * 1.6
    ctx.fillStyle = prox > 0.05
      ? `rgba(4, 194, 201, ${alpha.toFixed(2)})`
      : `rgba(255, 255, 255, ${alpha.toFixed(2)})`
    ctx.beginPath()
    ctx.arc(d.cx, d.cy, radius, 0, Math.PI * 2)
    ctx.fill()
  }
  raf = requestAnimationFrame(frame)
}

function startLoop() {
  if (!raf && allowed && inView) {
    raf = requestAnimationFrame(frame)
  }
}

function onMove(e) {
  if (!allowed || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
  mouse.active = true
  spotX.value = `${mouse.x}px`
  spotY.value = `${mouse.y}px`
  spotOpacity.value = 1
  startLoop()
}

function onLeave() {
  mouse.active = false
  mouse.x = -9999
  mouse.y = -9999
  spotOpacity.value = 0
  startLoop()
}

onMounted(() => {
  if (!check()) return

  sectionEl = containerRef.value?.parentElement
  resize()
  startLoop()

  if (sectionEl) {
    sectionEl.addEventListener('mousemove', onMove, { passive: true })
    sectionEl.addEventListener('mouseleave', onLeave)
  }

  resizeObserver = new ResizeObserver(resize)
  if (canvasRef.value) resizeObserver.observe(canvasRef.value)

  intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting
      if (inView) startLoop()
    },
    { threshold: 0 },
  )
  if (sectionEl) intersectionObserver.observe(sectionEl)
})

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
  if (sectionEl) {
    sectionEl.removeEventListener('mousemove', onMove)
    sectionEl.removeEventListener('mouseleave', onLeave)
  }
})
</script>

<style scoped></style>
