<template>
  <div>
    <section class="section-about">
      <div class="section-wrap">
        <div class="section-title">
          <h1 id="about" class="title" data-aos="fade" data-aos-duration="700">About</h1>
          <div class="underLine"></div>
        </div>

        <p class="about-desc" data-aos="fade-up" data-aos-duration="700">
          현재 <span class="point">웹 퍼블리셔</span>로 재직 중이며, 마크업부터 배포 자동화까지 폭넓게 다뤄왔습니다.
        </p>

        <div class="skill-grid">
          <div
            v-for="skill in skills"
            :key="skill.label"
            class="skill-item"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <img :src="iconDataUrl(skill)" :alt="skill.label" class="skill-icon" />
            <span>{{ skill.label }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  siHtml5, siCss, siSass, siJavascript, siTypescript,
  siVuedotjs, siNuxt, siReact,
  siPython, siNodedotjs,
  siGit, siGithub,
  siFigma, siJira, siConfluence, siBitbucket,
} from 'simple-icons'

// Zeplin is not in simple-icons npm package — hardcoded SVG
const zeplinSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FDBD39" d="M3 5h18v2.5L7.5 17H21v2H3v-2.5L16.5 7H3V5z"/></svg>`

const skills = [
  { si: siHtml5,      label: 'HTML5' },
  { si: siCss,        label: 'CSS3' },
  { si: siSass,       label: 'SCSS' },
  { si: siJavascript, label: 'JavaScript' },
  { si: siTypescript, label: 'TypeScript' },
  { si: siVuedotjs,   label: 'Vue.js' },
  { si: siNuxt,       label: 'Nuxt' },
  { si: siReact,      label: 'React' },
  { si: siPython,     label: 'Python' },
  { si: siNodedotjs,  label: 'Node.js' },
  { si: siGit,        label: 'Git' },
  { si: siGithub,     label: 'GitHub', color: '#ffffff' },
  { si: siFigma,      label: 'Figma' },
  { si: siJira,       label: 'JIRA' },
  { si: siConfluence, label: 'Confluence' },
  { si: siBitbucket,  label: 'Bitbucket' },
  { svg: zeplinSvg,   label: 'Zeplin' },
]

function iconDataUrl(skill) {
  if (skill.svg) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(skill.svg)}`
  }
  const color = skill.color ?? `#${skill.si.hex}`
  const svg = skill.si.svg.replace('<svg', `<svg fill="${color}"`)
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
</script>

<style scoped></style>
