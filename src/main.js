import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRightLong, faBars, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faFigma, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faRightLong, faBars, faCheck, faCircleXmark, faGithub, faFigma, faInstagram)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
