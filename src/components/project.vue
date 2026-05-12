<template>
  <div>
    <section class="section-project" id="project">
      <div class="section-wrap">
        <div class="section-title">
          <h1 class="title">Project</h1>
          <div class="underLine"></div>
        </div>
        <project-module
          v-for="item in projects"
          :key="item.title"
          :title="item.title"
          :date="item.date"
          :img="item.img"
          :introduce="item.introduce"
          :contribution="item.contribution"
          :mainFunc="item.mainFunc"
          :url="item.url"
          :github="item.github"
          :useSkills="item.useSkills"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import projectModule from './projectModuel.vue'

const projects = [
  {
    title: 'SSOK (쏙)',
    date: '2026.03 ~ 2026.04 (개인 프로젝트)',
    img: '',
    introduce:
      '영수증, 설명서, 보증서 등 실물 문서를 디지털로 변환해 브라우저에 로컬 저장하는 프라이버시 중심 문서 보관 앱입니다. 클라우드 로그인 없이 IndexedDB에 데이터를 저장하며 PWA로 홈 화면 설치가 가능합니다.',
    contribution: '100%',
    mainFunc: '문서 촬영/업로드, 위치 기반 폴더 분류, 보증 기간 만료일 추적, ZIP 백업, OCR 문자 인식, PWA 설치',
    url: '',
    github: 'https://github.com/choslion/ssok-app',
    useSkills: 'Nuxt4, Vue.js, TypeScript, SCSS, IndexedDB, Tesseract.js, GSAP, AWS S3, CloudFront',
  },
  {
    title: '리즌디자인 홈페이지',
    date: '2023.03 ~ 현재 (운영 중)',
    img: '',
    introduce:
      '리즌디자인 자사 홈페이지를 2년 이상 운영 및 유지보수했습니다. SCSS 가이드를 수립하고 프로젝트 소개 페이지 약 30개를 구축하였으며, 반응형 제작, BX 개선, 기존 페이지 리뉴얼, FTP 기반 NAS 자동 배포 시스템 구축까지 담당했습니다.',
    contribution: '100%',
    mainFunc: 'SCSS 가이드 수립, 프로젝트 소개 페이지 30개 구축, 반응형 제작, BX 개선, 자동 배포 시스템 구축 (FTP → 사내 NAS)',
    url: 'https://www.thelisn.com',
    github: '',
    useSkills: 'HTML, SCSS, JavaScript',
  },
]
</script>

<style scoped></style>
