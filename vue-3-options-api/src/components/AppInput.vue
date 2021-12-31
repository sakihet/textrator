<template>
  <div>
    <input
      :id="inputId"
      :type="inputType"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    inputId: {
      type: String,
      required: true
    },
    inputType: {
      String,
      required: true
    },
    value: [String, Number, Boolean]
  },
  emits: [
    'input'
  ]
}
</script>

<style scoped>
</style>
