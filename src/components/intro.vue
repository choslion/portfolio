<template>
  <div>
    <section class="section-intro">
      <div class="intro-deco intro-deco--1"></div>
      <div class="intro-deco intro-deco--2"></div>

      <div class="intro-inner">
        <div class="logo">
          <img src="@/assets/img/logo-white.png" alt="조승혁 포트폴리오 로고" />
        </div>

        <h1 class="intro-text">
          안녕하세요.<br>
          <span class="point">서비스 운영</span>과 <span class="point">화면 품질 개선</span>을 고민하는<br>
          웹 퍼블리셔 조승혁입니다.
        </h1>

        <button type="button" class="button" @click="moreView">
          View my work
          <font-awesome-icon icon="fa-solid fa-right-long" aria-hidden="true" />
        </button>

        <div class="typewriter-wrap" data-aos="fade-up" data-aos-duration="700">
          <span class="typewriter-text">{{ displayed }}</span><span
            class="typewriter-cursor"
            :class="{ visible: cursorVisible }"
          >|</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
  typeTimer = setTimeout(tick, 1000)
  cursorTimer = setInterval(() => { cursorVisible.value = !cursorVisible.value }, 530)
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
