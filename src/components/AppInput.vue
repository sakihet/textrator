<template>
  <div class="grid">
    <div class="cell form-label">
      <label :for="labelText">
        {{ labelText }}
      </label>
    </div>
    <div class="cell form-input">
      <input :id="labelText" :type="inputType">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    labelText: String,
    inputType: String
  }
}
</script>

<style>
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
