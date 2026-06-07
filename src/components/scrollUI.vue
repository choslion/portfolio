<template>
  <div>
    <div class="scroll-progress">
      <div class="scroll-progress__bar" :style="{ transform: `scaleX(${progress})` }"></div>
    </div>
    <Transition name="fade-up">
      <button
        v-if="showTop"
        class="scroll-top"
        type="button"
        @click="scrollToTop"
        aria-label="맨 위로 이동"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-up" aria-hidden="true" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const showTop = ref(false)

function onScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(scrollTop / max, 1) : 0
  showTop.value = scrollTop > window.innerHeight * 0.8
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped></style>
