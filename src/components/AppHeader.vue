<template>
  <div>
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    text: String,
  }
}
</script>

<style scoped>
</style>
