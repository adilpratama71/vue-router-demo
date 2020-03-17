<template>
  <div>
    <h2>
      Detail Data Pokemon
    </h2>
    <p>
      egg_groups: {{egg_groups}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    egg_groups () {
      if (this.data) return this.data.egg_groups.map(d => d.name).join(', ')
      return ''
    }
  }
}
</script>
