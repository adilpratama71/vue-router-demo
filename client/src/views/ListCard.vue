<template>
  <div>
    <div v-if="!isLoading">
      <h2>List Card</h2>
      <div class="row">
        <Card v-for="card in cards" :key="card.id" :data="card" />
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card'
import Loading from '../components/Loading'
export default {
  name: 'ListCard',
  data() {
    return {
      cards: [],
      isLoading: false
    }
  },
  components: {
    Card,
    Loading
  },
  methods: {
    getCards() {
      this.isLoading = true
      axios
        .get('https://api.pokemontcg.io/v1/cards?pageSize=20&page=1')
        .then(response => {
          const { data } = response
          this.cards.push(...data.cards)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          this.isLoading = false
        })
    }
  },
  created() {
    this.getCards()
  }
}
</script>
