<template>
  <div class="col-md-3">
    <div class="card mb-3 shadow-sm text-center">
      <div class="p-3">
        <img
          class="img-fluid"
          :src="pokemon.imageUrl ? pokemon.imageUrl : image"
          alt=""
        />
      </div>
      <div class="card-body">
        <span class="text-capitalize">{{ pokemon.name }}</span>
        <div class="mt-3">
          <button class="btn btn-secondary btn-sm" @click="goToDetailPokemon">
            View Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  computed: {
    image() {
      return this.$store.getters.getImage(this.pokemon.id)
    }
  },
  methods: {
    goToDetailPokemon() {
      this.$router.push({
        name: 'DetailPokemon',
        params: { name: this.pokemon.name }
      })
    }
  }
}
</script>
