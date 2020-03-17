<template>
  <div>
    <div class="row d-flex justify-content-center mt-5" v-if="!isLoading">
      <div class="col-md-3 text-center">
        <img :src="getImage()" alt="" />
        <h2>{{ pokemon.name }}</h2>
        <div class="btn-group">
          <router-link
            :to="`/pokemon/${$route.params.name}/description`"
            class="btn btn-sm btn-outline-secondary"
            >Description</router-link
          >
          <router-link
            :to="`/pokemon/${$route.params.name}/stats`"
            class="btn btn-sm btn-outline-secondary"
            >Stats</router-link
          >
        </div>
      </div>
      <div class="col-md-5">
        <router-view :data="pokemon"></router-view>
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'
export default {
  components: {
    Loading
  },
  computed: {
    description() {
      return this.pokemon.flavor_text_entries.filter(
        data => data.language.name === 'en'
      )[0].flavor_text
    },
    isLoading() {
      return this.$store.state.isLoading
    },
    pokemon() {
      return this.$store.state.pokemon
    }
  },
  methods: {
    getImage() {
      return this.$store.getters.getImage(this.pokemon.id)
    }
  },
  created() {
    const name = this.$route.params.name
    this.$store.dispatch('getDetailPokemon', name)
  }
}
</script>
