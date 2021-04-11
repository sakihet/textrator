<template>
  <div class="datalist-labeled">
    <div class="left">
      <label :for="selectId">
        {{ labelName }}
      </label>
    </div>
    <div class="right">
      <AppDatalist
        :id="selectId"
        :datalist = "datalistList"
        @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<script>
import AppDatalist from './AppDatalist'

export default {
  name: 'DatalistLabeled',
  components: {
    AppDatalist
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
    datalistList: {
      type: Array
    }
  }
}
</script>

<style scoped>
.datalist-labeled {
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
