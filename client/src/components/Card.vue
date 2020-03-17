<template>
  <div class="col-md-3">
    <div class="card mb-3 shadow-sm text-center">
      <div class="p-3">
        <img class="img-fluid" :src="data.imageUrl ? data.imageUrl : image" alt="">
      </div>
      <div class="card-body">
        <span class="text-capitalize">{{data.name}}</span>
        <div class="mt-3" v-if="!data.id">
          <button class="btn btn-secondary btn-sm" @click="goToDetailPokemon">View Detail</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'index'],
  computed: {
    image () {
      const s = '000' + (this.index + 1)
      const indexLength = (this.index + 1).toString().split('').length
      const imageName = s.substr(indexLength)
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageName}.png`
    }
  },
  methods: {
    goToDetailPokemon () {
      this.$router.push({ name: 'DetailPokemon', params: { name: this.data.name } })
    }
  }
}
</script>
