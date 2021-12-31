<template>
  <button>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: String,
  }
}
</script>

<style scoped>
</style>
