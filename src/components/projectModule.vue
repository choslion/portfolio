<template>
  <div>
    <div
      ref="wrapRef"
      class="project-wrap"
      :class="{ 'project-wrap--dimmed': dimmed, 'project-wrap--highlighted': highlighted }"
      data-aos="fade-up"
      data-aos-duration="700"
      :data-aos-delay="delay"
      @mousemove="onMove"
      @mouseleave="onLeave"
    >
      <div class="project-title">{{ title }}</div>
      <div class="project-date">{{ date }}</div>
      <div class="project-info">
        <div v-if="img" class="project-info__imgs">
          <img :src="img" alt="프로젝트 메인" />
        </div>
        <div class="project-info__contents" :class="{ 'project-info__contents--full': !img }">
          <div>{{ introduce }}</div>
          <p v-if="note" class="project-note">{{ note }}</p>
          <hr />
          <ul class="project-contents__ul">
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" aria-hidden="true" /></span>
                <div class="project__main-func">기여도</div>
              </div>
              <div>{{ contribution }}</div>
            </li>
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" aria-hidden="true" /></span>
                <div class="project__main-func">주요기능</div>
              </div>
              <div>{{ mainFunc }}</div>
            </li>
            <li v-if="url" class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" aria-hidden="true" /></span>
                <div class="project__main-func">URL</div>
              </div>
              <div><a :href="url" target="_blank" rel="noopener noreferrer">{{ url }}</a></div>
            </li>
            <li v-if="github" class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" aria-hidden="true" /></span>
                <div class="project__main-func">Github</div>
              </div>
              <div><a :href="github" target="_blank" rel="noopener noreferrer">{{ github }}</a></div>
            </li>
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" aria-hidden="true" /></span>
                <div class="project__main-func">사용기술</div>
              </div>
              <div>{{ useSkills }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  date: String,
  img: String,
  color: String,
  introduce: String,
  contribution: String,
  mainFunc: String,
  url: String,
  github: String,
  useSkills: String,
  note: String,
  delay: { type: Number, default: 0 },
  dimmed: { type: Boolean, default: false },
  highlighted: { type: Boolean, default: false },
})

const wrapRef = ref(null)
const MAX_TILT = 4

let raf = null
let canTilt = null

function tiltAllowed() {
  if (canTilt !== null) return canTilt
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  canTilt = !reduced && finePointer
  return canTilt
}

function onMove(e) {
  if (!tiltAllowed() || !wrapRef.value) return
  const rect = wrapRef.value.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  const ry = (px - 0.5) * MAX_TILT * 2
  const rx = (0.5 - py) * MAX_TILT * 2
  if (raf) cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    wrapRef.value.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`
  })
}

function onLeave() {
  if (!wrapRef.value) return
  if (raf) cancelAnimationFrame(raf)
  wrapRef.value.style.transform = ''
}
</script>

<style scoped></style>
