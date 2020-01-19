<template>
  <div>
    <input list="fonts"
      @input="$emit('input', $event.target.value)"
    />
    <datalist id="fonts">
      <option v-for="data in datalist" :key="data" :value="data">{{ data }}</option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'AppDatalist',
  props: {
    labelText: String,
    inputType: String,
    value: String,
    datalist: Array
  }
}
</script>

<style scoped>
</style>
