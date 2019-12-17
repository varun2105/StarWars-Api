import Vue from 'vue'
import Router from 'vue-router'
import Planets from '@/components/planets.vue'
import Home from '@/components/Home.vue'
import Starships from '@/components/starships.vue'
import Films from '@/components/Films.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships
    },
    {
      path: '/films',
      name: 'Films',
      component: Films
    }
  ]
})