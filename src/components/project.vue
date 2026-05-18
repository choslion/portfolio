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
          :color="item.color"
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
import ssokCapture from '@/assets/img/ssok-capture.jpg'
import theLisnCapture from '@/assets/img/thelisn-capture.jpg'

const projects = [
  {
    title: 'Stock Pro',
    date: '2025.07 ~ 업그레이드 중',
    img: '',
    color: '#22c55e',
    introduce:
      'React와 주식을 동시에 공부하기 위해 만든 개인 대시보드입니다. FastAPI 백엔드를 직접 구축하고, Claude Haiku API를 활용한 AI 마켓 브리핑 기능을 구현해 시장 상황을 AI가 분석·요약해줍니다. VIX·FGI·S&P 500 등 주요 지표를 시각화하며, 현재도 기능을 추가하며 개선 중입니다.',
    contribution: '100% (프론트엔드 · FastAPI 백엔드)',
    mainFunc: 'AI 마켓 브리핑 (Claude Haiku), VIX 변동성 차트, 공포탐욕지수(FGI), S&P 500 대시보드, 한국 주식 검색·순위, ETF 카테고리, 상품·환율 추적, 섹터별 현황, 자체 설계 종합 심리 점수',
    url: 'https://stock-pro-seven.vercel.app/',
    github: 'https://github.com/choslion/stock-pro',
    useSkills: 'React 19, Vite, Tailwind CSS, Recharts, Lightweight-charts, Framer Motion, Zustand, Axios / FastAPI, Python, yfinance, Claude Haiku (Anthropic API), Render',
  },
  {
    title: 'SSOK (쏙)',
    date: '2026.03 ~ 2026.04 (개인 프로젝트)',
    img: ssokCapture,
    color: '#818cf8',
    introduce:
      '영수증, 설명서, 보증서 등 실물 문서를 디지털로 변환해 브라우저에 로컬 저장하는 프라이버시 중심 문서 보관 앱입니다. 클라우드 로그인 없이 IndexedDB에 데이터를 저장하며 PWA로 홈 화면 설치가 가능합니다.',
    contribution: '100%',
    mainFunc: '문서 촬영/업로드, 위치 기반 폴더 분류, 보증 기간 만료일 추적, ZIP 백업, OCR 문자 인식, PWA 설치',
    url: 'https://d34preqwbcth2m.cloudfront.net/',
    github: 'https://github.com/choslion/ssok-app',
    useSkills: 'Nuxt4, Vue.js, TypeScript, SCSS, IndexedDB, Tesseract.js, GSAP, AWS S3, CloudFront',
  },
  {
    title: '리즌디자인 홈페이지',
    date: '2024.05 ~ 현재 (운영 중)',
    img: theLisnCapture,
    color: '#f59e0b',
    introduce:
      '리즌디자인 자사 홈페이지를 2년 이상 운영 및 유지보수했습니다. SCSS 가이드를 수립하고 프로젝트 소개 페이지 약 30개를 구축하였으며, 반응형 제작, BX 개선, 기존 페이지 리뉴얼, FTP 기반 NAS 자동 배포 시스템 구축까지 담당했습니다.',
    contribution: '100%',
    mainFunc: 'SCSS 가이드 수립, 프로젝트 소개 페이지 30개 구축, 반응형 제작, BX 개선, 자동 배포 시스템 구축 (FTP → 사내 NAS)',
    url: 'https://www.thelisn.com',
    github: '',
    useSkills: 'Vue, SCSS, JavaScript',
  },
]
</script>

<style scoped></style>
