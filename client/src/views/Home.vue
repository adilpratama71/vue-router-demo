<template>
  <div class="home text-center">
    <img alt="Vue logo" src="https://gifimage.net/wp-content/uploads/2018/04/pokemon-logo-gif-2.gif">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
