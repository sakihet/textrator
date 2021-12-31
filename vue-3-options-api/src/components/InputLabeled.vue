<template>
  <div class="input-labeled">
    <div class="left">
      <label :for="inputId">
        {{ labelName }}
      </label>
    </div>
    <div class="right">
      <AppInput
        :inputId="inputId"
        :inputType="inputType"
        :value="value"
        @input="$emit('input', $event)"
      />
    </div>
  </div>
</template>

<script>
import AppInput from './AppInput'

export default {
  name: 'InputLabeled',
  components: {
    AppInput
  },
  props: {
    inputType: {
      type: String,
      required: true
    },
    inputId: {
      type: String,
      required: true
    },
    labelName: {
      type: String
    },
    value: [String, Number, Boolean]
  },
  emits: [
    'input'
  ]
}
</script>

<style scoped>
.input-labeled {
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
