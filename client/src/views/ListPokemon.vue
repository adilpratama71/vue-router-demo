<template>
  <div>
    <div v-if="!isLoading">
      <h2>List Pokemon</h2>
      <div class="row">
        <Card
          v-for="pokemon in oddPokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import Loading from '../components/Loading'
export default {
  components: {
    Card,
    Loading
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons
    },
    isLoading() {
      return this.$store.state.isLoading
    },
    oddPokemons() {
      return this.$store.getters.getOddPokemons
    },
    evenPokemons() {
      return this.$store.getters.getEvenPokemons
    }
  },
  created() {
    this.$store.dispatch('getPokemons')
  }
}
</script>
