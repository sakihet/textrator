<template>
  <div>
    <select
      @change="$emit('select', $event.target.value)"
      :id="id"
    >
      <option selected>-</option>
      <option
        v-for="optionItem in optionList"
        :key="optionItem.id"
        :value="optionItem.id"
      >{{ optionItem.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    optionList: Array,
    id: {
      type: String
    }
  }
}
</script>

<style scoped>
</style>
