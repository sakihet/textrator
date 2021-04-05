<template>
  <div>
    <input
      :id="inputId"
      :type="inputType"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.checked)"
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
    inputType: String,
    value: [String, Number, Boolean]
  }
}
</script>

<style scoped>
</style>
