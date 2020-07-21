<template>
  <div>
    <h1>{{ text }}</h1>
    <p>A text image generator</p>
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
