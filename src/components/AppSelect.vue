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
          v-for="sizeItem in sizeList"
          :key="sizeItem.id"
          :value="sizeItem.id"
        >{{ sizeItem.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    labelText: String,
    sizeList: Array
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