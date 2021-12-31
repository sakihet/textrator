<template>
  <div>
    <h1>{{ headerText }}</h1>
    <p>{{ headerDescription }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    headerText: {
      type: String,
      required: true
    },
    headerDescription: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
