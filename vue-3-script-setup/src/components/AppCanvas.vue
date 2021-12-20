<script setup>
import { onMounted, onUpdated } from 'vue'
const props = defineProps({
  text: {
    type: String
  },
  size: {
    type: Number
  },
  height: {
    type: Number
  },
  width: {
    type: Number
  },
  fgColor: {
    type: String
  },
  bgColor: {
    type: String
  },
  isTransparent: {
    type: Boolean
  }
})
const emits = defineEmits(['updated'])
onMounted(() => {
  console.log('mounted')
  draw()
  emitDataURL()
})
onUpdated(() => {
  console.log('updated')
  draw()
  emitDataURL()
})
const draw = () => {
  console.log('draw')
  const cv = document.querySelector('#cv')
  const ctx = cv.getContext('2d')
  ctx.clearRect(0, 0, props.width, props.height)
  ctx.font = `${props.size}px serif`
  if (props.isTransparent) {
    ctx.clearRect(0, 0, props.width, props.height)
  } else {
    ctx.fillStyle = props.bgColor
    ctx.fillRect(0, 0, props.width, props.height)
  }
  ctx.fillStyle = props.fgColor
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.save()
  ctx.translate(props.width / 2, props.height / 2)
  ctx.fillText(props.text, 0, 0)
  ctx.restore()
}
const emitDataURL = () => {
  const dataURL = document.querySelector('#cv').toDataURL('image/png')
  emits('updated', dataURL)
}
</script>

<template>
  <canvas
    class="appCanvas"
    id="cv"
    :height="height"
    :width="width"
  ></canvas>
</template>

<style scoped>
.appCanvas {
  border: 1px dotted;
}
</style>
