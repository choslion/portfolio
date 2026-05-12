<template>
  <div>
    <div class="skill">
      <div class="skill-percent">
        <div class="skill-name flex-set">{{ name }}</div>
      </div>
      <span class="percent">{{ percent }}%</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  percent: Number,
})
</script>

<style scoped></style>
