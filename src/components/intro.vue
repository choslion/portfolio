<template>
  <div>
    <section class="section-intro">
      <!-- <div class="intro-bg"></div> -->
      <div class="flex">
        <h1 class="logo">
          <a href=""><img src="@/assets/img/logo-white.png" alt="하얀조승혁" /></a>
        </h1>
        <h1 class="intro-text">
          안녕하세요, 저는 <span class="point">조승혁</span> 입니다.
          <br />
          웹 개발자가 되고 싶습니다.
        </h1>
        <div class="button" v-on:click="moreView">
          View my work
          <font-awesome-icon icon="fa-solid fa-right-long" />
        </div>
      </div>
      <div class="quotes" data-aos="fade-up" data-aos-duration="700" data-aos-offset="0">
        <h3 class="quote">{{ randomQuotes.quote }}</h3>
        <h4 class="author">{{ randomQuotes.author }}</h4>
      </div>
    </section>
  </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
    const moreView = function () {
      const navBarHeight = 50;
      const aboutMeHeight = document.querySelector('.section-about').offsetTop;
      window.scrollTo({
        top: aboutMeHeight - navBarHeight,
        behavior: 'smooth',
      });
    };

    const quotes = reactive([
      {
        quote: '자신감 있는 표정을 지으면 자신감이 생긴다.',
        author: '찰스 다윈',
      },
      {
        quote: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.',
        author: '괴테',
      },
      {
        quote: '마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.',
        author: '이소룡',
      },
      {
        quote: '인생은 과감한 모험이 아니라면 아무것도 아닌 것이다.',
        author: '헬렌 켈러',
      },
      {
        quote: '고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.',
        author: '괴테',
      },
      {
        quote: '자신을 내보여라. 그러면 재능이 드러날 것이다.',
        author: '발타사르 그라시안',
      },
      {
        quote: '신은 용기 있는 자를 결코 버리지 않는다.',
        author: '켄러',
      },
      {
        quote: '인사를 잘하면 반은 먹고 들어간다.',
        author: '우리아빠',
      },
      {
        quote: '당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.',
        author: '헨리 포드',
      },
      {
        quote: '작은 기회로 부터 종종 위대한 업적이 시작된다.',
        author: '데모스테네스',
      },
      {
        quote: '최고에 도달하려면 최저에서 시작하라.',
        author: 'P.시루스',
      },
      {
        quote: '내 비장의 무기는 아직 손안에 있다 .그것은 희망이다.',
        author: '나폴레옹',
      },
      {
        quote: '인생에 뜻을 세우는데 있어 늦은 때라곤 없다.',
        author: '볼드윈',
      },
      {
        quote: '실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.',
        author: '하버트 개서',
      },
    ]);
    const quote = document.querySelector('.quotes h3');
    const author = document.querySelector('.quotes h4');

    const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

    return {
      quotes,
      quote,
      author,
      randomQuotes,
      moreView,
    };
  },
};
</script>
<style scoped></style>
