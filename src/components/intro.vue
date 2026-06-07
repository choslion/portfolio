<template>
  <div>
    <section class="section-intro">
      <intro-fx />

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

        <button type="button" class="button" ref="ctaRef" @click="moreView">
          View my work
          <font-awesome-icon icon="fa-solid fa-right-long" aria-hidden="true" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import introFx from './introFx.vue'

const introTextRef = ref(null)
const subtitleRef = ref(null)
const ctaRef = ref(null)

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

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
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
