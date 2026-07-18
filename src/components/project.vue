<template>
  <div>
    <section class="section-project" id="project">
      <div class="section-wrap">
        <div class="section-title">
          <h2 class="title">Project</h2>
          <div class="underLine"></div>
        </div>

        <project-module
          v-for="(item, i) in projects"
          :key="item.title"
          :title="item.title"
          :date="item.date"
          :img="item.img"
          :video="item.video"
          :color="item.color"
          :introduce="item.introduce"
          :contribution="item.contribution"
          :mainFunc="item.mainFunc"
          :url="item.url"
          :github="item.github"
          :useSkills="item.useSkills"
          :note="item.note"
          :delay="i * 120"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import projectModule from './projectModule.vue'
import ssokThumbnail from '@/assets/img/ssok-thumbnail.jpg'
import stockThumbnail from '@/assets/img/stock-thumbnail.jpg'
import lisnThumbnail from '@/assets/img/lisn-thumbnail.jpg'
import calcThumbnail from '@/assets/img/calc-thumbnail.jpg'
import ssDemo from '@/assets/video/ss-demo.mp4'

const projects = [
  {
    title: 'Stock Pro',
    date: '2025.07 ~ 고도화 중',
    img: stockThumbnail,
    color: '#22c55e',
    introduce:
      '국내·미국 시장 데이터를 한곳에서 살펴보고, AI 브리핑과 질문 기능으로 초보자도 시장 흐름을 쉽게 이해할 수 있도록 만든 React·TypeScript 투자 대시보드입니다.',
    note: '종목 시세 요청을 일괄화하고 SWR 캐시와 사전 워밍을 적용해 개발 환경의 캐시 미스 기준 응답 시간을 5~8배 단축했습니다.',
    contribution: '100% (프론트엔드 · FastAPI 백엔드)',
    mainFunc: [
      '국내·미국·테마별 시장 지표와 섹터 동향',
      '종목 검색·가격 차트, 거래 순위와 ETF·원자재·환율 조회',
      'Claude 기반 AI 시황 브리핑·종목 질문·차트 코멘트',
      '브라우저에 저장하는 개인 관심종목과 증시 뉴스',
    ],
    url: 'https://stock-pro-seven.vercel.app/',
    github: 'https://github.com/choslion/stock-pro',
    useSkills: 'React 19, TypeScript, TanStack Query, Zustand, Tailwind CSS, Framer Motion, Vitest / FastAPI, Python, Claude API',
  },
  {
    title: 'SS - 개인 AI 비서',
    date: '2026.06 ~ (개인 프로젝트)',
    video: ssDemo,
    color: '#38bdf8',
    introduce:
      'Claude Code(Claude Agent SDK) 위에 만든 개인 "Chief of Staff" 에이전트입니다. 매번 맥락을 잃는 챗봇과 달리, 파일 기반 기억(state·sessions)으로 세션을 넘어 이어지고, 목표·할 일을 추적하며, 직접 만든 주식 대시보드(Stock Pro)·구글 캘린더에 통합해 매일 브리핑합니다.',
    contribution: '100% (에이전트 설계 · 도구 통합)',
    mainFunc: '파일 기반 세션 연속성, 관심종목 시황 브리핑(Stock Pro 백엔드 연동), 평일 정기 리마인드(클라우드 스케줄 루틴), 사용 통계로 연속 사용일 추적, Google Calendar·Notion 연동(MCP)',
    url: '',
    github: 'https://github.com/choslion/agent-ss-showcase',
    useSkills: 'Claude Agent SDK, Python, MCP (Google Calendar · Notion), GitHub Actions / Routines, Markdown 기반 메모리',
  },
  {
    title: '생활계산소',
    date: '2026.06 ~ (개인 프로젝트)',
    img: calcThumbnail,
    color: '#fb923c',
    introduce:
      '돈, 식비, 집, 공간 등 일상 속 판단이 필요한 순간을 위한 유틸리티 도구 모음입니다. 기획부터 UI 설계, 구현까지 단독으로 진행했습니다.',
    contribution: '100%',
    mainFunc: '예산 관리, 구독료 계산기, 배달vs요리 비교, 냉장고 재료 레시피, 방 가구 시뮬레이터 (Three.js 3D), 쓰레기 분류 안내',
    url: 'https://choslion.github.io/living-calculator/#/',
    github: 'https://github.com/choslion/living-calculator',
    useSkills: 'React 19, TypeScript, Vite, React Router, Tailwind CSS 4, Three.js, React Three Fiber',
  },
  {
    title: 'SSOK (쏙)',
    date: '2026.03 ~ 2026.04 (개인 프로젝트)',
    img: ssokThumbnail,
    color: '#818cf8',
    introduce:
      '기획부터 UI 설계, 프론트엔드 구현까지 단독으로 진행한 개인 프로젝트입니다. 영수증·보증서·설명서 등 실물 문서를 브라우저 로컬 저장소에 보관하고, OCR을 통해 문서 정보를 관리할 수 있도록 설계했습니다.',
    contribution: '100%',
    mainFunc: '문서 촬영/업로드, 위치 기반 폴더 분류, 보증 기간 만료일 추적, ZIP 백업, OCR 문자 인식, PWA 설치',
    url: 'https://d34preqwbcth2m.cloudfront.net/',
    github: 'https://github.com/choslion/ssok-app',
    useSkills: 'Nuxt4, Vue.js, TypeScript, SCSS, IndexedDB, Tesseract.js, GSAP, AWS S3, CloudFront',
  },
  {
    title: '리즌디자인 홈페이지',
    date: '2024.05 ~ 현재 (운영 중)',
    img: lisnThumbnail,
    color: '#f59e0b',
    introduce:
      '약 2년간 운영 중인 리즌디자인 홈페이지 프로젝트입니다. 프로젝트 소개 페이지 구축, 신규 아티클 추가, BX 개선, GitHub Actions 기반 자동배포 흐름 구축을 담당했습니다.',
    contribution: '100%',
    mainFunc: 'SCSS 가이드 수립, 프로젝트 소개 페이지 30개 구축, 반응형 제작, BX 개선, 자동 배포 시스템 구축 (FTP → 사내 NAS)',
    url: 'https://www.thelisn.com',
    github: '',
    useSkills: 'Vue.js, SCSS, JavaScript',
  },
]
</script>

<style scoped></style>
