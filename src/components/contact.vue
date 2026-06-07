<template>
  <div class="section-contact">
    <div class="section-wrap">
      <div class="section-title">
        <h1 id="contact" class="title">Contact</h1>
        <div class="underLine"></div>
      </div>
      <div class="contact-box flex-set font24">
        <span class="logo"><img src="@/assets/img/logo-white.png" alt="로고" /></span>
        <h4>
          Email :
          <button
            type="button"
            class="email-copy"
            @click="copyEmail"
            :aria-label="`이메일 ${email} 복사`"
          >
            <span>{{ email }}</span>
            <font-awesome-icon
              :icon="copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'"
              aria-hidden="true"
              class="email-copy__icon"
            />
          </button>
        </h4>
        <div class="sns-box">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/choslion?tab=repositories" aria-label="GitHub 저장소 방문 (새 탭)">
            <font-awesome-icon class="icons" icon="fa-brands fa-github" size="3x" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>

    <Transition name="toast">
      <div v-if="toastVisible" class="toast" role="status" aria-live="polite">
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = 'cshyeok24@gmail.com'
const copied = ref(false)
const toastVisible = ref(false)
const toastMessage = ref('')

let copiedTimer = null
let toastTimer = null

async function copyEmail() {
  let ok = false
  try {
    await navigator.clipboard.writeText(email)
    ok = true
  } catch {
    const ta = document.createElement('textarea')
    ta.value = email
    ta.setAttribute('readonly', '')
    ta.style.position = 'absolute'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    document.body.removeChild(ta)
  }

  toastMessage.value = ok ? '이메일이 복사되었습니다' : '복사에 실패했습니다'
  toastVisible.value = true
  copied.value = ok

  clearTimeout(toastTimer)
  clearTimeout(copiedTimer)
  toastTimer = setTimeout(() => { toastVisible.value = false }, 2200)
  if (ok) copiedTimer = setTimeout(() => { copied.value = false }, 2200)
}
</script>

<style scoped></style>
