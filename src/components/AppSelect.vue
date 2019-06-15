<template>
  <div class="grid">
    <div class="cell form-label">
      <label :for="labelText">
        {{ labelText }}
      </label>
    </div>
    <div class="cell form-input">
      <select @change="$emit('select', $event.target.value)">
        <option selected>-</option>
        <option
          v-for="optionItem in optionList"
          :key="optionItem.id"
          :value="optionItem.id"
        >{{ optionItem.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    labelText: String,
    optionList: Array
  }
}
</script>

<style scoped>
.grid {
  display: flex;
}
.cell {
  flex: 1;
}
.form-label {
  text-align: right;
  margin-right: 5px;
}
.form-input {
  text-align: left;
}
</style>