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
    font: String
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
      ctx.fillStyle = this.backgroundColor
      ctx.fillRect(0, 0, this.width, this.height)
      ctx.fillStyle = this.foregroundColor
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(this.text, this.width / 2, this.height / 2)
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
