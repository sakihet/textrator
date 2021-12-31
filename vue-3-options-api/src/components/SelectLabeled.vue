<template>
  <div class="select-labeled">
    <div class="left">
      <label :for="selectId">
        {{ labelName }}
      </label>
    </div>
    <div class="right">
      <AppSelect
        :id="selectId"
        :optionList = "optionList"
        @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<script>
import AppSelect from './AppSelect'

export default {
  name: 'SelectLabeled',
  components: {
    AppSelect
  },
  props: {
    selectId: {
      type: String,
      required: true
    },
    labelName: {
      type: String
    },
    value: [String, Number, Boolean],
    optionList: {
      type: Array
    }
  }
}
</script>

<style scoped>
.select-labeled {
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
