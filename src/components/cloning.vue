<template>
  <div class="section-cloning">
    <div class="section-wrap">
      <div class="section-title">
        <h1 id="cloning" class="title">Practice</h1>
        <div class="underLine"></div>
      </div>
      <div class="practice-img__wrap">
        <cloningModule v-for="item in cloningItems" :key="item.url + item.img" :url="item.url" :img="item.img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import cloningModule from './cloningModule.vue'
import randomGame from '@/assets/img/randomGame.png'
import seomoon from '@/assets/img/seomoon.png'
import freshMain from '@/assets/img/freshMain.png'
import dosirak from '@/assets/img/dosirak.png'
import richmond from '@/assets/img/richmond.png'
import todo from '@/assets/img/todo.png'
import kakao4 from '@/assets/img/kakao4.png'
import kakao1 from '@/assets/img/kakao1.png'
import kakao2 from '@/assets/img/kakao2.png'

const cloningItems = [
  { url: 'https://choslion.github.io/jschallenge/random.html', img: randomGame },
  { url: 'https://choslion.github.io/seomoon/', img: seomoon },
  { url: 'https://choslion.github.io/housefresh/', img: freshMain },
  { url: 'https://choslion.github.io/dosirak/', img: dosirak },
  { url: 'https://choslion.github.io/richmond/', img: richmond },
  { url: 'https://choslion.github.io/jschallenge/log.html', img: todo },
  { url: 'https://choslion.github.io/kokoa-clone/', img: kakao4 },
  { url: 'https://choslion.github.io/kokoa-clone/', img: kakao1 },
  { url: 'https://choslion.github.io/kokoa-clone/', img: kakao2 },
]
</script>

<style scoped></style>
