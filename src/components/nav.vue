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
      <div
        v-if="open"
        class="nav-overlay"
        @click="closeMenu"
        @keydown="onMenuKeydown"
      >
        <div
          id="mobile-section-menu"
          ref="dialogRef"
          class="nav-overlay__card"
          role="dialog"
          aria-modal="true"
          aria-label="페이지 섹션 메뉴"
          @click.stop
        >
          <button
            v-for="item in items"
            :key="item.id"
            @click="goSection(item.id)"
            :class="['nav-overlay__item', { 'nav-overlay__item--active': active === item.id }]"
            :aria-current="active === item.id ? 'location' : undefined"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </Transition>
    <button
      ref="triggerRef"
      class="nav-trigger"
      @click="toggleMenu"
      :aria-label="open ? '메뉴 닫기' : '메뉴 열기'"
      :aria-expanded="open"
      aria-controls="mobile-section-menu"
    >
      <font-awesome-icon :icon="open ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'" aria-hidden="true" />
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'

const items = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'project', label: 'Project' },
  { id: 'contact', label: 'Contact' },
]

const active = ref('')
const open = ref(false)
const triggerRef = ref(null)
const dialogRef = ref(null)
let mainElement = null

function toggleMenu() {
  open.value = !open.value
}

function closeMenu() {
  open.value = false
}

function getMenuButtons() {
  return dialogRef.value
    ? [...dialogRef.value.querySelectorAll('button:not([disabled])')]
    : []
}

function onMenuKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeMenu()
    return
  }

  if (event.key !== 'Tab') return

  const buttons = getMenuButtons()
  if (!buttons.length) return

  const first = buttons[0]
  const last = buttons[buttons.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

function goSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  closeMenu()
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
  mainElement = document.querySelector('main')
  window.addEventListener('scroll', updateActive)
  updateActive()
})

watch(open, async (isOpen) => {
  if (mainElement) mainElement.inert = isOpen

  await nextTick()
  if (isOpen) {
    getMenuButtons()[0]?.focus()
  } else {
    triggerRef.value?.focus()
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive)
  if (mainElement) mainElement.inert = false
})
</script>

<style scoped></style>
