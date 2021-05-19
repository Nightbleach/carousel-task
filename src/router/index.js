import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageCarousel1 from '../views/PageCarousel1'
import PageCarousel2 from '../views/PageCarousel2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carouseElementUI',
    name: 'PageCarousel1',
    component: PageCarousel1

  },
  {
    path: '/carouselWithoutElementUI',
    name: 'pageCarousel2',
    component: PageCarousel2

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
