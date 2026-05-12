<template>
  <!-- Desktop: pill nav centered at top -->
  <div class="nav-desktop">
    <nav class="nav-pill">
      <button
        v-for="item in items"
        :key="item.id"
        @click="goSection(item.id)"
        :class="['nav-item', { 'nav-item--active': active === item.id }]"
      >
        {{ item.label }}
      </button>
    </nav>
  </div>

  <!-- Mobile: floating button + slide-up overlay -->
  <div class="nav-mobile">
    <Transition name="overlay">
      <div class="nav-overlay" v-if="open" @click="open = false">
        <div class="nav-overlay__card" @click.stop>
          <button
            v-for="item in items"
            :key="item.id"
            @click="goSection(item.id)"
            :class="['nav-overlay__item', { 'nav-overlay__item--active': active === item.id }]"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </Transition>
    <button class="nav-trigger" @click="open = !open">
      <font-awesome-icon :icon="open ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'project', label: 'Project' },
  { id: 'contact', label: 'Contact' },
]

const active = ref('')
const open = ref(false)

function goSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  open.value = false
}

function updateActive() {
  const scrollY = window.scrollY + 120
  for (let i = items.length - 1; i >= 0; i--) {
    const el = document.getElementById(items[i].id)
    if (el && el.offsetTop <= scrollY) {
      active.value = items[i].id
      return
    }
  }
  active.value = ''
}

onMounted(() => {
  window.addEventListener('scroll', updateActive)
  updateActive()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive)
})
</script>

<style scoped></style>
