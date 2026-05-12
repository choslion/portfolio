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
          :feeling="item.feeling"
          :contribution="item.contribution"
          :mainFunc="item.mainFunc"
          :url="item.url"
          :github="item.github"
          :figma="item.figma"
          :useSkills="item.useSkills"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import projectModule from './projectModuel.vue'
import kibuttzMain from '@/assets/img/kibuttzMain.png'
import seoulTakjuMain from '@/assets/img/seoulTakjuMain.png'
import youtube from '@/assets/img/youtube.png'

const projects = [
  {
    title: '키부츠코리아',
    date: '2022.11 ~ 2022.12 (개인프로젝트)',
    img: kibuttzMain,
    introduce:
      '저의 첫 개인 프로젝트 입니다. 독자적인 사이트를 가지고 리뉴얼 해보는것을 경험하였고 MySQL, EJS템플릿을 이용한 모듈화, Node.js를 이용한 서버열기를 처음으로 해보았던 프로젝트 입니다.',
    feeling:
      '홈페이지 구조를 보고 이해하는 능력이 생겼고 백엔드 공부를 해봄으로써 백엔드 개발자의 업무를 조금이나마 알게 되어서 도움이 되었습니다. 또 페이지를 AWS와 연결해서 다른 사람의 컴퓨터에서 창을 띄웠을때 흥미를 많이 느꼈습니다.',
    contribution: '100%',
    mainFunc: '회원가입, 로그인, 게시글 작성, 정보전달',
    url: 'https://kibuttzkorea-choslion.koyeb.app/',
    github: 'https://github.com/choslion/KibuttzKorea',
    figma: 'https://i.esdrop.com/d/f/BhioNGHPJG/t6OGP8F9Gd.png',
    useSkills: 'HTML, CSS, JavaScript, MySQL, Node.js',
  },
  {
    title: '서울탁주',
    date: '2022.11 ~ 2022.12 (팀프로젝트)',
    img: seoulTakjuMain,
    introduce:
      '첫 팀프로젝트 입니다. 팀의 조장을 맡아 여러 사람의 의견이 잘 어우러지게 사이트를 제작하였습니다. 제가 맡은 부분은 메인페이지, 카카오맵 Api를 받아 지도 가져오기 그리고 MySQL을 node.js 와 연동해 DB의 정보를 가져올 수 있는 게시판을 만들었습니다. 또한 git을 이용해 데이터를 주고 받아보는 경험을 하였습니다.',
    feeling:
      '팀프로젝트를 하며 사람이 서로 소통하며 작업하는것 , 그 과정 속에서 긍정적인 생각과 태도가 얼마나 중요한 일인지 알게 되었습니다.',
    contribution: '33.33%',
    mainFunc: '회원가입, 로그인, 게시글 작성, 정보전달',
    url: 'https://seoultakju-choslion.koyeb.app/',
    github: 'https://github.com/choslion/seoulTakju-personal',
    figma: 'https://i.esdrop.com/d/f/BhioNGHPJG/GzsXzPjkht.png',
    useSkills: 'HTML, CSS, JavaScript, MySQL, Node.js',
  },
  {
    title: '승혁의 유튜브',
    date: '2022.12 ~ 2023.2 (개인프로젝트)',
    img: youtube,
    introduce:
      '노마드코더의 유튜브 클론코딩 수업을 들으며 Pug, Mongo, ES6 , 다양한 npm에 대해 알게 되고 연습해본 사이트입니다.',
    feeling:
      '처음 알게되는 개념(다양한 npm , ES6 문법 , Node.js문법) 이 많아서 흐름을 이해하려고 최대한 노력했던 페이지이고 ejs , pug 등 템플릿엔진들끼리 문법과 구조가 비슷하다고 생각하였습니다.',
    contribution: '100%',
    mainFunc: '사용자 인증, 게시글 작성, 댓글 작성, 동영상 재생, 동영상 및 사용자 프로필 수정',
    url: '',
    github: 'https://github.com/choslion/wetube',
    figma: '❌',
    useSkills: 'Pug, Mongo, ES6',
  },
]
</script>

<style scoped></style>
