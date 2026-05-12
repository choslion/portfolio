<template>
  <div>
    <div class="project-wrap">
      <div class="project-title">{{ title }}</div>
      <div class="project-date">{{ date }}</div>
      <div class="project-info">
        <div class="project-info__imgs">
          <img :src="img" alt="프로젝트 메인" />
        </div>
        <div class="project-info__contents">
          <div>
            {{ introduce }}
            <p>{{ feeling }}</p>
          </div>
          <hr />
          <ul class="project-contents__ul">
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                <div class="project__main-func">기여도</div>
              </div>
              <div>{{ contribution }}</div>
            </li>
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                <div class="project__main-func">주요기능</div>
              </div>
              <div>{{ mainFunc }}</div>
            </li>
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                <div class="project__main-func">URL</div>
              </div>
              <div><a :href="url" target="_blank">{{ url }}</a></div>
            </li>
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                <div class="project__main-func">Github</div>
              </div>
              <div><a :href="github" target="_blank">{{ github }}</a></div>
            </li>
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                <div class="project__main-func">목업</div>
              </div>
              <div><a :href="figma" target="_blank">{{ figma }}</a></div>
            </li>
            <li class="project-contents__li">
              <div>
                <span><font-awesome-icon icon="fa-solid fa-check" /></span>
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
  feeling: String,
  contribution: String,
  mainFunc: String,
  url: String,
  github: String,
  figma: String,
  useSkills: String,
})
</script>

<style scoped></style>
