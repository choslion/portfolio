<template>
  <div class="nav-wrap">
    <nav>
      <div id="mySidenav" class="sideNav" v-show="open">
        <a href="#" @click.prevent="goSection('about')" class="toSection">About</a>
        <a href="#" @click.prevent="goSection('project')" class="toSection">Project</a>
        <a href="#" @click.prevent="goSection('cloning')" class="toSection">Practice</a>
        <a href="#" @click.prevent="goSection('contact')" class="toSection">Contact</a>
      </div>
      <ul class="nav-menu">
        <li @click="goSection('about')" class="toSection">About</li>
        <li @click="goSection('project')" class="toSection">Project</li>
        <li @click="goSection('cloning')" class="toSection">Practice</li>
        <li @click="goSection('contact')" class="toSection">Contact</li>
      </ul>
      <div class="mo-nav">
        <font-awesome-icon @click="open = !open" icon="fa-solid fa-bars" size="2x" />
      </div>
      <div class="time">
        <span>{{ getFullTime }}</span>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const getFullTime = ref('')

function getTime() {
  const d = new Date()
  getFullTime.value = [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map(n => String(n).padStart(2, '0'))
    .join(':')
}

const timer = setInterval(getTime, 1000)

function goSection(target) {
  const el = document.getElementById(target)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  open.value = false
}

onMounted(getTime)
onUnmounted(() => clearInterval(timer))
</script>

<style scoped></style>
