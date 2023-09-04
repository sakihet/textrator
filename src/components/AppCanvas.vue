<script setup lang="ts">
import {ref, onMounted, onUpdated} from 'vue'
import {Store, store} from '../store'

onMounted(() => {
  console.log('mounted')
  draw()
})
onUpdated(() => {
  console.log('updated')
  draw()
})

const props = defineProps<Store>()

const cv = ref<HTMLCanvasElement | undefined>(undefined)

const generateDataURL = () => {
  if (cv.value) {
    store.dataURL = cv.value.toDataURL()
  }
}

const draw = () => {
  if (cv.value) {
    const ctx = cv.value.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, props.width, props.height)
      // background
      if (!props.isTransparent) {
        ctx.fillStyle = props.bgColor
        ctx.fillRect(0, 0, props.width, props.height)
      }
      // foreground
      ctx.font = `${props.size}px ${props.font}`
      ctx.fillStyle = props.fgColor
      ctx.textAlign = 'center'
      ctx.textBaseline = props.baseline as CanvasTextBaseline
      ctx.save()
      ctx.translate(props.width / 2, props.height / 2)
      ctx.rotate(props.angle * Math.PI / 180)
      ctx.filter = `blur(${props.blur}px) contrast(${props.contrast}%) grayscale(${props.grayscale}%) hue-rotate(${props.hueRotate}deg)`
      ctx.fillText(props.text, 0, 0)
      ctx.restore()
      generateDataURL()
    }
  }
}
</script>

<template>
  <canvas
    class="border-dotted border-1 border-color-primary"
    ref="cv"
    :height="props.height"
    :width="props.width"
  />
</template>
