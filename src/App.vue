<template>
  <div>
    <scrollUI />
    <intro id="intro" />
    <navMenu />
    <about id="about" />
    <career id="career" />
    <project id="project" />
    <contact id="contact" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import intro from './components/intro.vue'
import navMenu from './components/nav.vue'
import about from './components/about.vue'
import career from './components/career.vue'
import project from './components/project.vue'
import contact from './components/contact.vue'
import scrollUI from './components/scrollUI.vue'
import '@/assets/css/index.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

AOS.init({ once: true, disable: reducedMotion })

// 섹션 타이틀: 마스크 리빌 + 언더라인 확장 (모션 감소 설정 시 생략)
onMounted(() => {
  if (reducedMotion) return

  document.querySelectorAll('.section-title').forEach((st) => {
    const title = st.querySelector('.title')
    const line = st.querySelector('.underLine')
    if (!title) return

    gsap.set(title, { clipPath: 'inset(0 0 100% 0)', yPercent: 35 })
    if (line) gsap.set(line, { scaleX: 0 })

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: st, start: 'top 85%', once: true },
    })
    tl.to(title, { clipPath: 'inset(0 0 0% 0)', yPercent: 0, duration: 0.7 })
    if (line) tl.to(line, { scaleX: 1, duration: 0.5 }, '-=0.35')
  })
})
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #616161;
}
</style>
