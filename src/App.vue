<template>
  <div>
    <intro id="intro" />
    <navMenu />
    <about id="about" />
    <career id="career" />
    <project id="project" />
    <contact id="contact" />
  </div>
</template>

<script setup>
import intro from './components/intro.vue'
import navMenu from './components/nav.vue'
import about from './components/about.vue'
import career from './components/career.vue'
import project from './components/project.vue'
import contact from './components/contact.vue'
import '@/assets/css/index.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ once: true })
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #616161;
}
</style>
