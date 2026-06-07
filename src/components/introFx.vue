<template>
  <div ref="containerRef" class="intro-fx" aria-hidden="true">
    <div class="intro-fx__blob intro-fx__blob--a"></div>
    <div class="intro-fx__blob intro-fx__blob--b"></div>
    <div class="intro-fx__blob intro-fx__blob--c"></div>
    <div class="intro-fx__spotlight" :style="spotlightStyle"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const spotX = ref('50%')
const spotY = ref('50%')
const spotOpacity = ref(0)

const spotlightStyle = computed(() => ({
  '--fx-x': spotX.value,
  '--fx-y': spotY.value,
  opacity: spotOpacity.value,
}))

let sectionEl = null
let allowed = false

function check() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  allowed = !reduced && fine
  return allowed
}

function onMove(e) {
  if (!allowed || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  spotX.value = `${e.clientX - rect.left}px`
  spotY.value = `${e.clientY - rect.top}px`
  spotOpacity.value = 1
}

function onLeave() {
  spotOpacity.value = 0
}

onMounted(() => {
  if (!check()) return
  sectionEl = containerRef.value?.parentElement
  if (sectionEl) {
    sectionEl.addEventListener('mousemove', onMove, { passive: true })
    sectionEl.addEventListener('mouseleave', onLeave)
  }
})

onUnmounted(() => {
  if (sectionEl) {
    sectionEl.removeEventListener('mousemove', onMove)
    sectionEl.removeEventListener('mouseleave', onLeave)
  }
})
</script>

<style scoped></style>
