<template>
  <div>
    <section class="section-about">
      <div class="section-wrap">
        <div class="section-title">
          <h1 id="about" class="title" data-aos="fade" data-aos-duration="700">About</h1>
          <div class="underLine"></div>
        </div>
        <div class="appeal">
          <h2 class="appeal-text" data-aos="fade-up" data-aos-duration="700">항상 <span class="point">긍정적인</span> 방향을 바라보는 사람</h2>
          <h2 class="appeal-text" data-aos="fade-up" data-aos-duration="1400"><span class="point">역지사지</span>의 마음을 가지고 상대방을 대하는 사람</h2>
          <h2 class="appeal-text" data-aos="fade-up" data-aos-duration="2100">의견을 잘 내고 나와 다른 의견에도 <span class="point">수용</span>할 줄 아는 사람</h2>
        </div>
        <div class="appeal-second">
          <h2 class="appeal-text appeal-point" data-aos="zoom-out-up" data-aos-duration="1500">그래서 뽑아야 할 <span class="point">사람</span></h2>
          <span class="logo"><img src="@/assets/img/logo-black.png" alt="로고" /></span>
        </div>
        <ul class="about-detail">
          <!-- <li class="about-me flex-set">
            <div class="about-me__text flex-set">
              <div class="who font24" data-aos="fade-right" data-aos-duration="1000">Who is this guy?</div>
              <p>
                1994년 6월 3일 출생, 현재 경기도 남양주시에 거주하고 있다.
                <br />
                스케이트보드 타는것을 즐기며 또한 삶 자체를 즐긴다.
                <br />
                MBTI 는 ESTP(에너지 넘치는 문제해결사)이며 현재 웹 퍼블리셔로 재직 중이다.
              </p>
              <span># 이스라엘 해외봉사 활동 # GS25 점포관리</span>
              <span># 그린컴퓨터학원 뷰(Vue)활용 프론트엔드 웹개발자 양성과정 수료</span>
            </div>
          </li> -->
          <li class="about-skills">
            <skill v-for="item in skills" :key="item.name" :name="item.name" :percent="item.percent" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import skill from './skill.vue'

const skills = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS/SCSS', percent: 95 },
  { name: 'JavaScript', percent: 80 },
  { name: 'Vue.js', percent: 70 },
  { name: '웹 접근성', percent: 75 },
  { name: 'Git/GitHub', percent: 70 },
  { name: 'Figma', percent: 60 },
  { name: 'Node.js', percent: 40 },
]

onMounted(() => {
  const handleScroll = () => {
    const appealSecond = document.querySelector('.appeal-second')
    if (window.scrollY > appealSecond.offsetTop) {
      document.querySelectorAll('.skill-percent').forEach((bar, i) => {
        bar.style.width = `${skills[i].percent}%`
      })
    }
  }
  window.addEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
