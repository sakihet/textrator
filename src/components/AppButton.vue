<template>
  <div class="grid">
    <div class="cell form-label">
      <label>
      </label>
    </div>
    <div class="cell form-input">
      <button @click="onClick">
        {{ text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: String,
    onClick: {
      type: Function,
      required: false
    }
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
