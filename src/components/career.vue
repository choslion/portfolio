<template>
  <div>
    <section class="section-career">
      <div class="section-wrap">
        <div class="section-title">
          <h2 id="career" class="title">Career</h2>
          <div class="underLine"></div>
        </div>

        <div ref="containerRef" class="career-container">
          <!-- 왼쪽 고정 패널 -->
          <div ref="stickyRef" class="career-sticky">
            <div class="career-progress">
              <div ref="progressBarRef" class="career-progress__bar"></div>
            </div>
            <div class="career-header">
              <span class="career-company__name">리즌디자인</span>
              <span class="career-company__role">웹 퍼블리셔</span>
              <span class="career-period">2023.03 ~ 현재 <em>재직 중</em></span>
            </div>
            <div ref="statsRef" class="career-stats">
              <div v-for="(stat, i) in stats" :key="i" class="career-stat">
                <span class="career-stat__num">{{ displayNums[i] }}<em>{{ stat.suffix }}</em></span>
                <span class="career-stat__label">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <!-- 오른쪽 스크롤 카드들 -->
          <div class="career-cards">
            <div class="career-card">
              <h3 class="career-card__title">결제 서비스 화면 마이그레이션</h3>
              <p class="career-card__desc">앱카드결제·온라인결제 화면 약 60개(팝업 포함)를 <strong>모니모 앱 디자인 가이드 기준으로 마이그레이션</strong>하고, 일부 화면을 신규 구축했습니다. 결제 단계별 화면 구조·노출 조건과 개발계·운영계 반영 후 스타일 상태를 검증하고, 기획·개발·QA와 검수 의견을 조율했습니다.</p>
              <div class="career-tags">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">SVN</span>
              </div>
            </div>

            <div class="career-card">
              <h3 class="career-card__title">삼성카드 디지털채널 운영</h3>
              <p class="career-card__desc">삼성카드 디지털채널의 운영·개선 이슈를 JIRA 기반으로 관리하며 500건 이상 처리. 기획자·디자이너와 협업하며 기획 반영, 긴급 수정, JavaScript·jQuery 기반 동적 UI 구현, SCSS 트랜지션 적용 등 디지털채널 전반의 퍼블리싱 업무를 담당했습니다.</p>
              <div class="career-tags">
                <span class="tag">Vue</span>
                <span class="tag">HTML</span>
                <span class="tag">SCSS</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">jQuery</span>
                <span class="tag">WCMS</span>
                <span class="tag">JIRA</span>
                <span class="tag">Confluence</span>
                <span class="tag">Bitbucket</span>
              </div>
            </div>

            <div class="career-card">
              <h3 class="career-card__title">신규 화면 구축</h3>
              <p class="career-card__desc">대출이동 시스템 50+ 화면, THE TWENTY 라운지 50+ 화면 등 주요 프로젝트만 100+ 화면. 모든 주요 구축에서 <strong>WCMS 데이터 연동을 고려한 Vue 컴포넌트 구조</strong>로 제작했으며, 공통 컴포넌트 반영 시 CSS 인터랙션도 적용했습니다.</p>
              <div class="career-tags">
                <span class="tag">Vue</span>
                <span class="tag">HTML</span>
                <span class="tag">SCSS</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">WCMS</span>
              </div>
            </div>

            <div class="career-card">
              <h3 class="career-card__title">웹 접근성 개선</h3>
              <p class="career-card__desc">10개 메뉴, 약 600페이지 규모의 접근성 검토를 수행했습니다. WCAG 기준을 참고해 키보드 포커스, 스크린리더 인식, 대체 텍스트, 색상 대비 등을 검토하고 개선 사항을 반영했습니다.</p>
              <div class="career-tags">
                <span class="tag">웹 접근성</span>
                <span class="tag">WCAG</span>
                <span class="tag">스크린리더</span>
              </div>
            </div>

            <div class="career-card career-card--highlight">
              <h3 class="career-card__title">팀 업무 효율화를 위한 내부 도구 제작</h3>
              <p class="career-card__desc">기획·디자인·퍼블리싱 간 반복 확인 업무를 줄이기 위해 배너 생성기, Lottie 확인 도구, 오프라인 메모앱을 제작했습니다. 배너 확인·전달 시간은 건당 <strong>30분~1시간 → 5분 이내</strong>로 단축했습니다.</p>
              <div class="career-tags">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Lottie</span>
              </div>
            </div>

            <div class="career-card">
              <h3 class="career-card__title">리즌디자인 홈페이지 BX 개편 및 반응형 화면 구축</h3>
              <p class="career-card__desc">기존 프로젝트 소개 페이지의 BX 개편 시안을 반영하고 <strong>신규 소개 페이지 30개 이상</strong>을 구축했습니다. 2440·1560·900px 시안을 기준으로 데스크톱·태블릿·모바일 대응 반응형 레이아웃을 구현하고, 텍스트 컴포넌트·타이포그래피 체계·프로젝트별 포인트 컬러 등 디자인 가이드 규격을 적용했습니다. SCSS 구조와 스타일 작성 기준을 정리해 페이지별 스타일 관리의 일관성을 개선했으며, 해상도별 배경 이미지 결함과 시안 불일치 리소스를 발견해 디자이너와 수정하고 버전별 QA 리소스에 맞춰 변경 사항을 재반영했습니다.</p>
              <div class="career-tags">
                <span class="tag">Vue</span>
                <span class="tag">SCSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">반응형</span>
                <span class="tag">Figma</span>
              </div>
            </div>

            <div class="career-card">
              <h3 class="career-card__title">수동 FTP 배포를 GitHub Actions 자동 배포로 전환</h3>
              <p class="career-card__desc">건당 <strong>10~15분 걸리던 수동 FTP 배포를 약 1분으로 단축</strong>하고, 수작업에 따른 파일 누락 가능성을 줄였습니다. develop 브랜치 반영 시 테스트 서버로, main 브랜치에 PR 병합 시 운영 서버로 배포되는 워크플로를 구성했습니다. FTP 접속 정보와 배포 설정은 GitHub Secrets로 관리해 소스 코드와 배포 정보의 관리 영역을 분리했고, 외부 검증 환경에서 사전 테스트한 후 내부 배포 환경에 적용했습니다.</p>
              <div class="career-tags">
                <span class="tag">GitHub Actions</span>
                <span class="tag">Git</span>
                <span class="tag">FTP</span>
                <span class="tag">NAS</span>
                <span class="tag">GitHub Secrets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { num: 500, suffix: '+', label: '운영·개선 이슈' },
  { num: 100, suffix: '+', label: '신규·개편 화면' },
  { num: 600, suffix: 'p', label: '접근성 검토' },
  { num: 60,  suffix: '+', label: '결제 화면 마이그레이션' },
]

const displayNums = ref(stats.map(() => 0))
const containerRef = ref(null)
const stickyRef = ref(null)
const statsRef = ref(null)
const progressBarRef = ref(null)
let observer = null
let started = false
let ctx = null

function countUp(index, target, delay = 0) {
  setTimeout(() => {
    const duration = 1500
    const start = performance.now()
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      displayNums.value[index] = Math.round(eased * target)
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, delay)
}

onMounted(() => {
  // 모션 감소 설정: 숫자 즉시 표시 + 핀/카드 애니메이션 생략
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    displayNums.value = stats.map((s) => s.num)
    gsap.set('.career-card', { opacity: 1 })
    return
  }

  // 카운트업
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true
        stats.forEach((stat, i) => countUp(i, stat.num, i * 120))
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (statsRef.value) observer.observe(statsRef.value)

  // ScrollTrigger pin + 카드 애니메이션 (데스크탑만)
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 901px)', () => {
      const cards = gsap.utils.toArray('.career-card')

      // 왼쪽 패널 pin
      ScrollTrigger.create({
        trigger: containerRef.value,
        start: 'top 80px',
        end: () => `+=${containerRef.value.offsetHeight - stickyRef.value.offsetHeight}`,
        pin: stickyRef.value,
        pinSpacing: false,
      })

      // 진행 바 (pin과 동일한 구간으로 동기화)
      const pinEnd = () => `+=${containerRef.value.offsetHeight - stickyRef.value.offsetHeight}`
      gsap.to(progressBarRef.value, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top 80px',
          end: pinEnd,
          scrub: true,
        },
      })

      // 카드 순차 등장
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform', // 완료 후 inline transform 제거 → CSS hover가 동작
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    // 모바일: 카드 즉시 표시
    mm.add('(max-width: 900px)', () => {
      gsap.utils.toArray('.career-card').forEach((card) => {
        gsap.set(card, { opacity: 1, y: 0 })
      })
    })
  })
})

onUnmounted(() => {
  observer?.disconnect()
  ctx?.revert()
})
</script>

<style scoped></style>
