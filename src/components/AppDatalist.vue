<template>
  <div class="grid">
    <div class="cell form-label">
      <label :for="labelText">
        {{ labelText }}
      </label>
    </div>
    <div class="cell form-input">
      <input list="fonts"
        @input="$emit('input', $event.target.value)"
      />
      <datalist id="fonts">
        <option v-for="data in datalist" :key="data" :value="data">{{ data }}</option>
      </datalist>
    </div>
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
