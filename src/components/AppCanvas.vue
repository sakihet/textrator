<template>
  <div>
    <canvas
      id="cv"
      :height="height"
      :width="width"
    >
    </canvas>
    <div hidden>
      {{ backgroundColor }}
      {{ foregroundColor }}
      {{ text }}
      {{ size }}
      {{ font }}
      {{ isTransparent }}
      {{ angle }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCanvas',
  props: {
    height: Number,
    width: Number,
    foregroundColor: String,
    backgroundColor: String,
    text: String,
    size: Number,
    font: String,
    angle: Number,
    isTransparent: Boolean
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw: function () {
      const cv = document.getElementById('cv')
      const ctx = cv.getContext('2d')
      ctx.clearRect(0, 0, this.width, this.height)
      ctx.font = this.size + 'px' + ' ' + this.font
      if (this.isTransparent) {
        ctx.clearRect(0, 0, this.width, this.height)
      } else {
        ctx.fillStyle = this.backgroundColor
        ctx.fillRect(0, 0, this.width, this.height)
      }
      ctx.fillStyle = this.foregroundColor
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.save()
      ctx.translate(this.width / 2, this.height / 2)
      ctx.rotate(this.angle * Math.PI / 180)
      ctx.fillText(this.text, 0, 0)
      ctx.restore()
    }
  },
  updated () {
    this.draw()
  }
}
</script>

<style scoped>
canvas {
  margin-top: 10px;
  border: 1px dotted;
}
</style>
