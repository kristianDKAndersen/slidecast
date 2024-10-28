<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { defineComponent } from 'vue';

export default defineComponent({
  
  name: 'App',
  components: {
    
  }, 
  setup() {
  return {
    RouterView,
    RouterLink
  }
  }
  
});

</script>

<template>

    <RouterView />

</template>

<style scoped>

</style>
