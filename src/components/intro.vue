<template>
  <div>
    <section class="section-intro">
      <intro-fx />
      <intro-object v-if="showObject" />

      <div class="intro-inner">
        <div class="logo">
          <img src="@/assets/img/logo-white.png" alt="조승혁 포트폴리오 로고" />
        </div>

        <h1 class="intro-text" ref="introTextRef">
          <span class="word-line">
            <span class="word">안녕하세요.</span>
          </span>
          <span class="word-line">
            <span class="word"><span class="point">서비스 운영</span>과</span>
            <span class="word"><span class="point">화면 품질 개선</span>을</span>
            <span class="word">고민하는</span>
          </span>
          <span class="word-line">
            <span class="word">웹 퍼블리셔</span>
            <span class="word">조승혁입니다.</span>
          </span>
        </h1>

        <div class="typewriter-wrap" ref="subtitleRef">
          <span class="typewriter-text">{{ displayed }}</span><span
            class="typewriter-cursor"
            :class="{ visible: cursorVisible }"
          >|</span>
        </div>

        <button
          type="button"
          class="button"
          ref="ctaRef"
          @click="moreView"
          @mousemove="onCtaMove"
          @mouseleave="onCtaLeave"
        >
          <span class="button__inner" ref="ctaInnerRef">
            View my work
            <font-awesome-icon icon="fa-solid fa-right-long" aria-hidden="true" />
          </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import gsap from 'gsap'
import introFx from './introFx.vue'

const introObject = defineAsyncComponent(() => import('./introObject.vue'))

const introTextRef = ref(null)
const subtitleRef = ref(null)
const ctaRef = ref(null)
const ctaInnerRef = ref(null)

// Three.js 박스는 첫 페인트 이후 idle에 마운트 (초기 로딩 부담 완화)
const showObject = ref(false)

let magneticAllowed = false

function onCtaMove(e) {
  if (!magneticAllowed || !ctaRef.value || !ctaInnerRef.value) return
  const rect = ctaRef.value.getBoundingClientRect()
  const mx = e.clientX - rect.left - rect.width / 2
  const my = e.clientY - rect.top - rect.height / 2
  gsap.to(ctaRef.value, { x: mx * 0.25, y: my * 0.35, duration: 0.4, ease: 'power3.out' })
  gsap.to(ctaInnerRef.value, { x: mx * 0.12, y: my * 0.18, duration: 0.4, ease: 'power3.out' })
}

function onCtaLeave() {
  if (!ctaRef.value || !ctaInnerRef.value) return
  gsap.to([ctaRef.value, ctaInnerRef.value], { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
}

const phrases = [
  '실제 서비스 운영 환경에서 화면 품질을 개선해왔습니다.',
  '접근성과 협업 효율도 함께 고민합니다.',
  '금융권 디지털채널에서 3년간 실무 경험을 쌓았습니다.',
  '마크업부터 자동 배포까지 직접 경험했습니다.',
]

const displayed = ref('')
const cursorVisible = ref(true)

let phraseIdx = 0
let charIdx = 0
let deleting = false
let typeTimer = null
let cursorTimer = null

function tick() {
  const target = phrases[phraseIdx]
  if (!deleting) {
    displayed.value = target.slice(0, ++charIdx)
    if (charIdx === target.length) {
      deleting = true
      typeTimer = setTimeout(tick, 2200)
      return
    }
    typeTimer = setTimeout(tick, 75)
  } else {
    displayed.value = target.slice(0, --charIdx)
    if (charIdx === 0) {
      deleting = false
      phraseIdx = (phraseIdx + 1) % phrases.length
    }
    typeTimer = setTimeout(tick, 35)
  }
}

onMounted(() => {
  cursorTimer = setInterval(() => { cursorVisible.value = !cursorVisible.value }, 530)

  // 첫 페인트 이후 한가할 때 Three.js 박스 마운트
  const mountObject = () => { showObject.value = true }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(mountObject, { timeout: 2000 })
  } else {
    setTimeout(mountObject, 600)
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  magneticAllowed = !reduced && fine
  const words = introTextRef.value?.querySelectorAll('.word') || []

  if (reduced) {
    gsap.set(words, { opacity: 1, y: 0 })
    if (subtitleRef.value) gsap.set(subtitleRef.value, { opacity: 1, y: 0 })
    if (ctaRef.value) gsap.set(ctaRef.value, { opacity: 1, y: 0 })
    typeTimer = setTimeout(tick, 300)
    return
  }

  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    onComplete: () => { typeTimer = setTimeout(tick, 100) },
  })

  tl.fromTo(
    words,
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 },
    0.2,
  )

  if (subtitleRef.value) {
    tl.fromTo(
      subtitleRef.value,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.15',
    )
  }

  if (ctaRef.value) {
    tl.fromTo(
      ctaRef.value,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4 },
      '-=0.1',
    )
  }
})

onUnmounted(() => {
  clearTimeout(typeTimer)
  clearInterval(cursorTimer)
})

function moreView() {
  document.querySelector('.section-about').scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped></style>
