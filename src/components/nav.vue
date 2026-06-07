<template>
  <!-- Desktop: side rail dot nav (오른쪽 가장자리) -->
  <nav class="nav-rail" aria-label="페이지 섹션 네비게이션">
    <button
      v-for="item in items"
      :key="item.id"
      @click="goSection(item.id)"
      :class="['nav-rail__item', { 'nav-rail__item--active': active === item.id }]"
      :aria-label="item.label"
      :aria-current="active === item.id ? 'true' : undefined"
    >
      <span class="nav-rail__label">{{ item.label }}</span>
      <span class="nav-rail__dot" aria-hidden="true"></span>
    </button>
  </nav>

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
    <button
      class="nav-trigger"
      @click="open = !open"
      :aria-label="open ? '메뉴 닫기' : '메뉴 열기'"
      :aria-expanded="open"
    >
      <font-awesome-icon :icon="open ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'" aria-hidden="true" />
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
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10
  if (atBottom) {
    active.value = items[items.length - 1].id
    return
  }

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
