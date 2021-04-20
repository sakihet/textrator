<template>
  <div class="input-checkbox-labeled">
    <div class="left">
      <label :for="inputId">
        {{ labelName }}
      </label>
    </div>
    <div class="right">
      <AppInputCheckbox
        :inputId="inputId"
        :isChecked="isChecked"
        @change="$emit('change', $event)"
      />
    </div>
  </div>
</template>

<script>
import AppInputCheckbox from './AppInputCheckbox'

export default {
  name: 'InputCheckboxLabeled',
  components: {
    AppInputCheckbox
  },
  props: {
    inputId: {
      type: String,
      required: true
    },
    labelName: {
      type: String
    },
    isChecked: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    'change'
  ]
}
</script>

<style scoped>
.input-checkbox-labeled {
  display: flex;
}
.left {
  flex: 1;
  text-align: right;
  padding-right: 5px;
}
.right {
  flex: 1;
  text-align: left;
}
</style>
