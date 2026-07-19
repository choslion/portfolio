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
    date: '2026.06 ~ 고도화 중',
    video: ssDemo,
    color: '#38bdf8',
    introduce:
      '대화 세션이 바뀌어도 지난 맥락을 이어받고, 목표·할 일·결정을 함께 관리하도록 구성한 Claude Code 기반 개인 AI 비서입니다.',
    note: '사용자가 직접 읽고 수정할 수 있는 Markdown 파일에 상태와 세션 기록을 남겨, 별도 데이터베이스 없이 다음 세션의 우선순위를 이어받도록 구성했습니다.',
    contribution: '100% (에이전트 설계 · 커맨드·도구 연동)',
    mainFunc: [
      'Markdown 기반 세션 기억으로 이전 작업 이어가기',
      '목표·할 일·결정과 이유를 파일별로 관리',
      '/start·/status·/update·/end 커맨드로 세션 흐름 표준화',
      'Stock Pro 관심종목 시황 브리핑 선택 연동',
      '세션 로그 기반 총 사용일·현재·최장 연속 사용일 집계',
    ],
    url: '',
    github: 'https://github.com/choslion/agent-ss-showcase',
    useSkills: 'Claude Code, Markdown, Python, Git, GitHub / Stock Pro 선택 연동',
  },
  {
    title: '생활계산소',
    date: '2026.06 ~ (개인 프로젝트)',
    img: calcThumbnail,
    color: '#fb923c',
    introduce:
      '예산·퇴사 정산·식비 비교·가구 배치처럼 일상에서 반복되는 계산과 판단을 한곳에서 해결하도록 만든 React·TypeScript 생활 도구 모음입니다.',
    note: '퇴사 정산·치수 문자열 파싱·방 배치·점수 로직을 UI와 분리하고, 4개 테스트 파일의 168개 테스트 케이스로 검증했습니다.',
    contribution: '100% (기획 · UI 설계 · 프론트엔드)',
    mainFunc: [
      '예산·구독·퇴사 정산 등 돈 관리 도구',
      '배달 vs 요리 비교와 냉장고 재료 요리 추천',
      '실제 치수 기반 2D 가구 배치와 동선·충돌 검사',
      '지연 로딩하는 Three.js 3D 미리보기와 배치안 비교',
      '얼룩 제거·분리수거·날짜 계산 등 생활 가이드',
    ],
    url: 'https://choslion.github.io/living-calculator/#/',
    github: 'https://github.com/choslion/living-calculator',
    useSkills: 'React 19, TypeScript, Vite 8, React Router 7, Tailwind CSS 4, Three.js, React Three Fiber, Vitest',
  },
  {
    title: 'SSOK (쏙)',
    date: '2026.03 ~ 2026.04 (개인 프로젝트)',
    img: ssokThumbnail,
    color: '#818cf8',
    introduce:
      '영수증·보증서·설명서를 촬영하거나 업로드해 기기 안에 보관하고, 관련 문서와 보증 기간을 한 항목에서 관리하도록 만든 Nuxt 기반 로컬 우선 디지털 서랍입니다.',
    note: '업로드 이미지를 최대 1200px WebP로 압축하고 항목 정보와 첨부 Blob을 분리해, 목록에서는 필요한 정보만 조회하도록 구성했습니다.',
    contribution: '100% (기획 · UI 설계 · 프론트엔드 · 정적 배포)',
    mainFunc: [
      '이미지·PDF 촬영·업로드와 문서 종류·페이지 통합 보관',
      '한·영 OCR 구매처·날짜·금액 후보 추출과 제목 자동 제안',
      '문서 검색·종류 필터·정렬과 보증 만료 D-30 알림',
      '다중 페이지 뷰어와 이미지 확대·회전·자르기',
      'IndexedDB 로컬 저장, PWA 설치와 ZIP 백업·복원',
    ],
    url: 'https://d34preqwbcth2m.cloudfront.net/',
    github: 'https://github.com/choslion/ssok-app',
    useSkills: 'Nuxt 4, Vue 3, TypeScript, SCSS, IndexedDB, Tesseract.js, JSZip, PWA / AWS S3, CloudFront',
  },
  {
    title: '리즌디자인 홈페이지',
    date: '2024.10 ~ 현재 (운영 중)',
    img: lisnThumbnail,
    color: '#f59e0b',
    introduce:
      '리즌디자인 자사 홈페이지의 BX 개편과 운영을 맡아 프로젝트 소개 화면 30개 이상과 반응형 UI를 구축하고, GitHub Actions 기반 배포 자동화를 구성했습니다.',
    note: '건당 10~15분 걸리던 수동 FTP 배포를 GitHub Actions로 전환해 약 1분으로 단축하고 파일 누락을 없앴습니다.',
    contribution: '담당 업무 100%',
    mainFunc: [
      '프로젝트 소개 화면 30개 이상 구축과 BX 개편',
      '2440·1560·900px 시안 기반 반응형 레이아웃',
      '타이포그래피·포인트 컬러와 SCSS 작성 기준 정리',
      'develop·main 브랜치별 테스트·운영 서버 자동 배포',
      '제안서 전용 배포 경로 분리와 검색 크롤러 수집 제한',
    ],
    url: 'https://www.thelisn.com',
    github: '',
    useSkills: 'Vue.js, JavaScript, SCSS, GitHub Actions, Git, FTP',
  },
]
</script>

<style scoped></style>
