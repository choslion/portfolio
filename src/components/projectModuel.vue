<template>
  <div>
    <div class="project-wrap">
      <div class="project-title">{{ title }}</div>
      <div class="project-date">{{ date }}</div>
      <div class="project-info">
        <div v-if="img" class="project-info__imgs">
          <img :src="img" alt="프로젝트 메인" />
        </div>
        <div class="project-info__contents" :class="{ 'project-info__contents--full': !img }">
          <div>{{ introduce }}</div>
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
defineProps({
  title: String,
  date: String,
  img: String,
  introduce: String,
  contribution: String,
  mainFunc: String,
  url: String,
  github: String,
  useSkills: String,
})
</script>

<style scoped></style>
