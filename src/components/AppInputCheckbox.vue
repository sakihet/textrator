<template>
  <div>
    <input
      :id="inputId"
      type="checkbox"
      :value="value"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInputCheckbox',
  props: {
    inputId: {
      type: String,
      required: true
    },
    value: {
      type: Boolean
    }
  },
  emits: [
    'change'
  ]
}
</script>

<style scoped>
</style>
