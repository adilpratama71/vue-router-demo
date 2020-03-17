<template>
  <div>
    <div class="row d-flex justify-content-center mt-5" v-if="!isLoading">
      <div class="col-md-3">
        <img :src="getImage()" alt="">
      </div>
      <div class="col-md-5">
        <h2>Detail Pokemon {{pokemon.name}}</h2>
        <p>
          {{description}}
        </p>
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '../components/Loading'
export default {
  data () {
    return {
      pokemon: {},
      isLoading: false
    }
  },
  components: {
    Loading
  },
  computed: {
    description () {
      return this.pokemon.flavor_text_entries.filter(data => data.language.name === 'en')[0].flavor_text
    }
  },
  methods: {
    getDetailPokemon () {
      const pokemonName = this.$route.params.name

      this.isLoading = true
      axios.get(`http://pokeapi.salestock.net/api/v2/pokemon-species/${pokemonName}`)
        .then(response => {
          const { data } = response
          this.pokemon = data
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          this.isLoading = false
        })
    },
    getImage () {
      const s = '000' + this.pokemon.id
      const indexLength = this.pokemon.id.toString().split('').length
      const imageName = s.substr(indexLength)
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageName}.png`
    },
    getDescription () {
      return this.pokemon.flavor_text_entries.filter(data => data.language.name === 'en')[0].flavor_text
    }
  },
  created () {
    this.getDetailPokemon()
  }
}
</script>
