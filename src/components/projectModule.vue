<template>
  <div>
    <div
      class="project-wrap"
      data-aos="fade-up"
      data-aos-duration="700"
      :data-aos-delay="delay"
    >
      <h3 class="project-title">{{ title }}</h3>
      <div class="project-date">{{ date }}</div>
      <div class="project-info">
        <div v-if="img || video" class="project-info__imgs">
          <div v-if="video" class="project-video">
            <video
              ref="videoRef"
              :src="video"
              preload="none"
              loop
              muted
              playsinline
              :aria-label="`${title} 프로젝트 데모 영상`"
              @play="isVideoPlaying = true"
              @pause="isVideoPlaying = false"
            ></video>
            <button
              type="button"
              class="project-video__toggle"
              :aria-label="`${title} 영상 ${isVideoPlaying ? '일시정지' : '재생'}`"
              @click="toggleVideo"
            >
              <font-awesome-icon
                :icon="isVideoPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'"
                aria-hidden="true"
              />
            </button>
          </div>
          <img
            v-else
            :src="img"
            :alt="`${title} 대표 화면`"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="project-info__contents">
          <div>{{ introduce }}</div>
          <p v-if="note" class="project-note">{{ note }}</p>
          <hr />
          <ul class="project-contents__ul">
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" aria-hidden="true" /></span>
                <div class="project__main-func">담당 범위</div>
              </div>
              <div>{{ contribution }}</div>
            </li>
            <li class="project-contents__li project-contents__li--features">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" aria-hidden="true" /></span>
                <div class="project__main-func">주요기능</div>
              </div>
              <ul v-if="Array.isArray(mainFunc)" class="project-feature-list">
                <li v-for="feature in mainFunc" :key="feature">{{ feature }}</li>
              </ul>
              <div v-else>{{ mainFunc }}</div>
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
                <div class="project__main-func">GitHub</div>
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
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  title: String,
  date: String,
  img: String,
  video: String,
  color: String,
  introduce: String,
  contribution: String,
  mainFunc: {
    type: [String, Array],
    default: '',
  },
  url: String,
  github: String,
  useSkills: String,
  note: String,
  delay: { type: Number, default: 0 },
})

const videoRef = ref(null)
const isVideoPlaying = ref(false)
let videoObserver = null

async function playVideo() {
  if (!videoRef.value) return
  try {
    await videoRef.value.play()
  } catch {
    isVideoPlaying.value = false
  }
}

function toggleVideo() {
  if (!videoRef.value) return
  if (videoRef.value.paused) playVideo()
  else videoRef.value.pause()
}

onMounted(() => {
  if (!props.video || !videoRef.value) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  videoObserver = new IntersectionObserver(
    ([entry]) => {
      if (!videoRef.value) return
      if (entry.isIntersecting && !reducedMotion) playVideo()
      else videoRef.value.pause()
    },
    { rootMargin: '200px 0px', threshold: 0.2 },
  )
  videoObserver.observe(videoRef.value)
})

onUnmounted(() => {
  videoObserver?.disconnect()
  videoRef.value?.pause()
})
</script>

<style scoped></style>
