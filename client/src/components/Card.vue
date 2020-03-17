<template>
  <div class="col-md-3">
    <div class="card mb-3">
      <div class="p-3">
        <img class="img-fluid" :src="getImage(index)" alt="">
      </div>
      <div class="card-body">
        {{data.name}}
        <div class="mt-3">
          <button class="btn btn-secondary btn-sm" @click="goToDetailPokemon">View Detail</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'index'],
  methods: {
    getImage (index) {
      const s = '000' + (index + 1)
      const indexLength = (index + 1).toString().split('').length
      const imageName = s.substr(indexLength)
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageName}.png`
    },
    goToDetailPokemon () {
      this.$router.push({ name: 'DetailPokemon', params: { name: this.data.name } })
    }
  }
}
</script>
