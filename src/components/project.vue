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
    date: '2025.07 ~ 업그레이드 중',
    img: stockThumbnail,
    color: '#22c55e',
    introduce:
      'React 기반으로 제작한 투자 지표 대시보드입니다. VIX, FGI, S&P 500 등 주요 지표를 시각화하고, Claude API를 활용해 AI 마켓 브리핑과 종목을 질문하면 답해주는 AI 주식 어시스턴트(챗봇)를 구현했습니다.',
    contribution: '100% (프론트엔드 · FastAPI 백엔드)',
    mainFunc: 'AI 주식 어시스턴트(챗봇), AI 마켓 브리핑 (Claude API), VIX 변동성 차트, 공포탐욕지수(FGI), S&P 500 대시보드, 한국 주식 검색·순위, ETF 카테고리, 상품·환율 추적, 섹터별 현황, 자체 설계 종합 심리 점수',
    url: 'https://stock-pro-seven.vercel.app/',
    github: 'https://github.com/choslion/stock-pro',
    useSkills: 'React 19, Vite, Tailwind CSS, Recharts, Lightweight-charts, Framer Motion, Zustand, Axios / FastAPI, Python, yfinance, Claude API, Render',
    note: '※ 최초 접속 시 Render 서버가 활성화되면서 약 45~60초 정도 로딩될 수 있습니다. 화면이 멈춰 보일 경우 새로고침 후 다시 확인해 주세요',
  },
  {
    title: 'SS — 개인 AI 비서 (Chief of Staff)',
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
    url: 'https://choslion.github.io/check-income-calc/#/',
    github: 'https://github.com/choslion/check-income-calc',
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
      '약 2년간 운영 중인 자사 홈페이지 프로젝트입니다. 프로젝트 소개 페이지 구축, 신규 아티클 추가, BX 개선, GitHub Actions 기반 자동배포 흐름 구축을 담당했습니다.',
    contribution: '100%',
    mainFunc: 'SCSS 가이드 수립, 프로젝트 소개 페이지 30개 구축, 반응형 제작, BX 개선, 자동 배포 시스템 구축 (FTP → 사내 NAS)',
    url: 'https://www.thelisn.com',
    github: '',
    useSkills: 'Vue.js, SCSS, JavaScript',
  },
]
</script>

<style scoped></style>
