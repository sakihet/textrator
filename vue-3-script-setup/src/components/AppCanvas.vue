<script setup>
import { onMounted, onUpdated } from 'vue'
const props = defineProps({
  text: {
    type: String
  },
  font: {
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
  },
  baseline: {
    type: String
  },
  angle: {
    type: Number
  },
  blur: {
    type: Number
  },
  contrast: {
    type: Number
  },
  grayscale: {
    type: Number
  },
  hueRotate: {
    type: Number
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
  ctx.font = `${props.size}px ${props.font}`
  if (props.isTransparent) {
    ctx.clearRect(0, 0, props.width, props.height)
  } else {
    ctx.fillStyle = props.bgColor
    ctx.fillRect(0, 0, props.width, props.height)
  }
  ctx.fillStyle = props.fgColor
  ctx.textAlign = 'center'
  ctx.textBaseline = props.baseline
  ctx.save()
  ctx.translate(props.width / 2, props.height / 2)
  ctx.rotate(props.angle * Math.PI / 180)
  ctx.filter = `blur(${props.blur}px) contrast(${props.contrast}%) grayscale(${props.grayscale}%) hue-rotate(${props.hueRotate}deg)`
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
