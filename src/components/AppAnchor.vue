<template>
  <div class="grid">
    <div class="cell form-label">
      <label :for="labelText">
        {{ labelText }}
      </label>
    </div>
    <div class="cell form-input">
      <a
        class="button"
        :href="href"
        :download="download"
      >
        {{ text }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    labelText: String,
    text: String,
    href: String,
    download: String
  }
}
</script>

<style scoped>
a.button {
  appearance: button;
  text-decoration: none;
  color: black;
  padding: 2px;
  font-family: monospace;
}
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
