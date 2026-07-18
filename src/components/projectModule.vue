<template>
  <div>
    <div
      class="project-wrap"
      data-aos="fade-up"
      data-aos-duration="700"
      :data-aos-delay="delay"
    >
      <div class="project-title">{{ title }}</div>
      <div class="project-date">{{ date }}</div>
      <div class="project-info">
        <div v-if="img || video" class="project-info__imgs">
          <video
            v-if="video"
            :src="video"
            autoplay
            loop
            muted
            playsinline
            aria-label="프로젝트 데모 영상"
          ></video>
          <img v-else :src="img" alt="프로젝트 메인" />
        </div>
        <div class="project-info__contents">
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
defineProps({
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
</script>

<style scoped></style>
