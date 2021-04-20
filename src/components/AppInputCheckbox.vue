<template>
  <div>
    <input
      :id="inputId"
      type="checkbox"
      :checked="isChecked"
      @change="$emit('change', $event.target.checked)"
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
    isChecked: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    'change'
  ]
}
</script>

<style scoped>
</style>
