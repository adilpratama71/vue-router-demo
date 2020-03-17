<template>
  <div>
    <h2>
      Description Pokemon
    </h2>
    <p>
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    description () {
      return this.data.flavor_text_entries.filter(data => data.language.name === 'en')[0].flavor_text
    }
  },
  created () {
    console.log(this.data)
  }
}
</script>
