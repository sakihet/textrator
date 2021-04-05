<template>
  <div id="app">
    <AppHeader
      :headerText="name"
      :headerDescription="description"
    />
    <InputLabeled
      inputId="imageText"
      inputType="text"
      labelName="text"
      :value="image.text"
      @input="image.text = $event"
    />
    <AppCanvas
      :height="parseInt(image.size.height)"
      :width="parseInt(image.size.width)"
      :foregroundColor="image.color.foreground"
      :backgroundColor="image.color.background"
      :text="image.text"
      :size="parseInt(image.textSize)"
      :font="image.font"
      :baseline="image.baseline"
      :angle="parseInt(image.angle)"
      :isTransparent="image.isTransparent"
      v-on:updated="updateDataURL($event)"
    />
    <p>version: {{ version }}</p>
  </div>
</template>

<script>
import { name, description, version } from '../package.json'
import AppCanvas from './components/AppCanvas'
import AppHeader from './components/AppHeader'
import InputLabeled from './components/InputLabeled'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppHeader,
    InputLabeled
  },
  data () {
    return {
      name: name[0].toUpperCase() + name.slice(1),
      description: description,
      version: version,
      image: {
        angle: 0,
        baseline: 'middle',
        color: {
          foreground: '#000000',
          background: '#ffffff'
        },
        font: 'sans-serif',
        isTransparent: false,
        size: {
          height: 256,
          width: 256
        },
        text: 'hello.',
        textSize: 64
      }
    }
  },
  methods: {
    updateDataURL: function (dataURL) {
      this.dataURL = dataURL
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
