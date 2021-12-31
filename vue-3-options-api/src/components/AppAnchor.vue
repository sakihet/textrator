<template>
  <a
    class="button"
    :href="href"
    :download="download"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'AppAnchor',
  props: {
    text: String,
    href: String,
    download: String
  }
}
</script>

<style scoped>
a.button {
  appearance: button;
  text-decoration: none;
  font-family: monospace;
}
</style>
