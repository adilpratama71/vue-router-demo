<template>
  <div>
    <h2>List Pokemon</h2>
    <div class="row">
      <Card v-for="(pokemon, idx) in pokemons" :key="idx" :data="pokemon" :index="idx" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card'
export default {
  data () {
    return {
      pokemons: []
    }
  },
  components: {
    Card
  },
  methods: {
    getPokemons () {
      axios.get('http://pokeapi.salestock.net/api/v2/pokemon/?limit=20&offset=0')
        .then(response => {
          const { data } = response
          this.pokemons.push(...data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getImage (index) {
      const s = '000' + (index + 1)
      const indexLength = (index + 1).toString().split('').length
      const imageName = s.substr(indexLength)
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageName}.png`
    }
  },
  created () {
    this.getPokemons()
  }
}
</script>
