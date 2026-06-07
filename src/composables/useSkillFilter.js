import { ref, computed } from 'vue'

const activeSkill = ref(null)

const skillAliases = {
  'HTML5': ['HTML5', 'HTML'],
  'CSS3': ['CSS3', 'CSS'],
  'SCSS': ['SCSS', 'Sass'],
  'JavaScript': ['JavaScript', 'JS'],
  'jQuery': ['jQuery'],
  'TypeScript': ['TypeScript'],
  'Vue.js': ['Vue.js', 'Vue', 'Vue 3'],
  'Nuxt': ['Nuxt', 'Nuxt4'],
  'React': ['React', 'React 19'],
  'GitHub': ['GitHub'],
  'Figma': ['Figma'],
  'JIRA': ['JIRA'],
  'Confluence': ['Confluence'],
  'Bitbucket': ['Bitbucket'],
  'Zeplin': ['Zeplin'],
}

export function useSkillFilter() {
  function toggle(skill) {
    activeSkill.value = activeSkill.value === skill ? null : skill
  }

  function clear() {
    activeSkill.value = null
  }

  function matches(useSkills) {
    if (!activeSkill.value) return true
    const aliases = skillAliases[activeSkill.value] || [activeSkill.value]
    const text = String(useSkills || '').toLowerCase()
    return aliases.some(a => text.includes(a.toLowerCase()))
  }

  const isActive = computed(() => activeSkill.value !== null)

  return { activeSkill, toggle, clear, matches, isActive }
}
