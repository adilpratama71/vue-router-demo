import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    isLoading: false
  },
  mutations: {
    SET_POKEMONS(state, payload) {
      state.pokemons = payload
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    getPokemons({ commit }) {
      commit('SET_LOADING', true)
      axios
        .get('http://pokeapi.salestock.net/api/v2/pokemon/?limit=20&offset=0')
        .then(response => {
          const { data } = response
          const manipulatePokemons = data.results.map((el, idx) => {
            return {
              id: idx,
              ...el
            }
          })
          commit('SET_POKEMONS', manipulatePokemons)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    }
  },
  getters: {
    getOddPokemons: state => state.pokemons.filter(el => el.id % 2 !== 0),
    getEvenPokemons: state => state.pokemons.filter(el => el.id % 2 === 0),
    getImage: state => {
      return id => {
        const s = '000' + (id + 1)
        const indexLength = (id + 1).toString().split('').length
        const imageName = s.substr(indexLength)
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageName}.png`
      }
    }
  }
})
