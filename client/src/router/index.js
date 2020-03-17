import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListCard from '../views/ListCard.vue'
import ListPokemon from '../views/ListPokemon.vue'
import DetailPokemon from '../views/DetailPokemon.vue'
import Dashboard from '../views/Dashboard.vue'
import PokemonDescription from '../components/PokemonDescription'
import PokemonStats from '../components/PokemonStats'

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
    component: ListPokemon,
  },
  {
    path: '/pokemon/:name',
    name: 'DetailPokemon',
    component: DetailPokemon,
    redirect: {
      name: 'PokemonStats'
    },
    children: [
      {
        path: 'stats',
        component: PokemonStats,
        name: 'PokemonStats'
      },
      {
        path: 'description',
        component: PokemonDescription,
        name: 'PokemonDescription'
      }
    ]
  },
  {
    path: '/card',
    name: 'ListCard',
    component: ListCard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')

    if (token) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
