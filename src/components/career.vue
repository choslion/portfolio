<template>
  <div>
    <section class="section-career">
      <div class="section-wrap">
        <div class="section-title">
          <h1 id="career" class="title" data-aos="fade" data-aos-duration="700">Career</h1>
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
              <h3 class="career-card__title">삼성카드 디지털채널 운영</h3>
              <p class="career-card__desc">삼성카드 디지털채널의 운영·개선 이슈를 JIRA 기반으로 관리하며 500건 이상 처리. 기획자·디자이너와 협업하며 기획 반영, 긴급 수정 등 디지털채널 전반의 퍼블리싱 업무를 담당했습니다.</p>
              <div class="career-tags">
                <span class="tag">Vue</span>
                <span class="tag">HTML</span>
                <span class="tag">SCSS</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">WCMS</span>
                <span class="tag">JIRA</span>
                <span class="tag">Confluence</span>
                <span class="tag">Bitbucket</span>
              </div>
            </div>

            <div class="career-card">
              <h3 class="career-card__title">신규 화면 구축</h3>
              <p class="career-card__desc">대출이동 시스템 50+ 화면, THE TWENTY 라운지 30+ 화면, 로이어스 라운지 등 주요 프로젝트만 80+ 화면. 운영 전반 합산 <strong>1000개 이상</strong>. 모든 주요 구축에서 <strong>WCMS 데이터 연동을 고려한 Vue 컴포넌트 구조</strong>로 제작했습니다.</p>
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
              <p class="career-card__desc">WCAG 기준 명세를 직접 검토하며 600p 이상의 접근성 이슈를 처리. 스크린리더 호환, 키보드 포커스 순서, 색상 대비 등을 기준에 맞춰 개선했습니다.</p>
              <div class="career-tags">
                <span class="tag">웹 접근성</span>
                <span class="tag">WCAG</span>
                <span class="tag">스크린리더</span>
              </div>
            </div>

            <div class="career-card career-card--highlight">
              <h3 class="career-card__title">팀 업무 효율화를 위한 내부 도구 제작</h3>
              <p class="career-card__desc">기획자·디자이너가 30분 가량 소요하던 배너 작업을 <strong>5분 이내로 단축</strong>하는 배너 생성기를 제작해 제공했습니다. 실제로 팀원들이 적극적으로 활용하며 업무 효율이 개선됐습니다. 내부망 전용 로띠 테스트 사이트도 제작해 디자이너가 인터넷 없이도 로띠 결과물을 즉시 확인할 수 있는 환경을 제공했습니다.</p>
              <div class="career-tags">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Lottie</span>
              </div>
            </div>

            <div class="career-card">
              <h3 class="career-card__title">자사 홈페이지 자동 배포 환경 구축</h3>
              <p class="career-card__desc">자사 홈페이지 저장소 구조를 직접 재설계하고 자동 배포 파이프라인을 구축했습니다. <strong>feature·hotfix → develop</strong> 머지 시 테스트 서버 자동 배포, <strong>develop → main PR</strong>은 관리자 승인 후 운영 서버 배포되는 이중 파이프라인을 GitHub Actions + FTP 연동으로 직접 구축했습니다.</p>
              <div class="career-tags">
                <span class="tag">GitHub Actions</span>
                <span class="tag">Git Flow</span>
                <span class="tag">FTP</span>
                <span class="tag">NAS</span>
                <span class="tag">CI/CD</span>
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
  { num: 500, suffix: '+', label: '운영·개선 이슈 처리' },
  { num: 80,  suffix: '+', label: '신규·개편 화면 구축' },
  { num: 600, suffix: 'p', label: '웹 접근성 검토' },
  { num: 2,   suffix: '년', label: '홈페이지 운영' },
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
