import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
Vue.config.productionTip = false
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);

import VModal from 'vue-js-modal'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronUp)
library.add(faChevronDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
import router from './router'

Vue.use(router)

 
Vue.use(VModal,{
  dialog: true,
  dynamic: true
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



