import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListCard from '../views/ListCard.vue'
import ListPokemon from '../views/ListPokemon.vue'
import DetailPokemon from '../views/DetailPokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon',
    name: 'ListPokemon',
    component: ListPokemon
  },
  {
    path: '/pokemon/:name',
    name: 'DetailPokemon',
    component: DetailPokemon
  },
  {
    path: '/card',
    name: 'ListCard',
    component: ListCard
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
