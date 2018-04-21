<template>
  <div id="app">
    <div class="container">
      <h1>Text Image Generator</h1>
      <AppInput
        labelText="text"
        inputType="text"
        :value="text"
        @input="text = $event"
      />
      <AppInput
        labelText="size"
        inputType="number"
        :value="size"
        @input="size = $event"
      />
      <AppInput
        labelText="foreground color"
        inputType="text"
        :value="foregroundColor"
        @input="foregroundColor = $event"
      />
      <AppInput
        labelText="background color"
        inputType="text"
        :value="backgroundColor"
        @input="backgroundColor = $event"
      />
      <AppInput
        labelText="height"
        inputType="number"
        :value="height"
        @input="height = $event"
      />
      <AppInput
        labelText="width"
        inputType="number"
        :value="width"
        @input="width = $event"
      />
      <AppButton
        text="save"
        :onClick="save"
      />
      <AppCanvas
        :height="height"
        :width="width"
        :foregroundColor="foregroundColor"
        :backgroundColor="backgroundColor"
        :text="text"
        :size="size"
        :font="font"
      />
    </div>
  </div>
</template>

<script>
import AppButton from './components/AppButton'
import AppCanvas from './components/AppCanvas'
import AppInput from './components/AppInput'

export default {
  name: 'app',
  components: {
    AppButton,
    AppCanvas,
    AppInput
  },
  data () {
    return {
      text: 'hello.',
      size: 64,
      font: 'sans-serif',
      foregroundColor: '#000000',
      backgroundColor: '#ffffff',
      height: 256,
      width: 256
    }
  },
  methods: {
    save() {
      const cv = document.getElementById('cv')
      const dataUrl = cv.toDataURL('image/png')
      const w = window.open('about:blank')
      w.document.write("<img src='" + dataUrl + "'/>")
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
