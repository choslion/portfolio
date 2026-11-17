import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRightLong, faBars, faCheck, faArrowUp, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faCopy } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faFigma, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faRightLong, faBars, faCheck, faArrowUp, faPlay, faPause, faCircleXmark, faCopy, faGithub, faFigma, faInstagram)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
