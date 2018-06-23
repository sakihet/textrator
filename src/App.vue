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
      <AppDatalist
        labelText="font"
        :datalist="fonts"
        :value="font"
        @input="font = $event"
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
      <AppInput
        labelText="rotate"
        inputType="number"
        :value="angle"
        @input="angle = $event"
      />
      <AppInput
        labelText="transparent"
        inputType="checkbox"
        :value="isTransparent"
        @change="isTransparent = $event"
      />
      <a :href="dataURL" download="image.png">
        <AppButton
          text="download"
          :onClick="download"
        />
      </a>
      <AppCanvas
        :height="parseInt(height)"
        :width="parseInt(width)"
        :foregroundColor="foregroundColor"
        :backgroundColor="backgroundColor"
        :text="text"
        :size="parseInt(size)"
        :font="font"
        :angle="parseInt(angle)"
        :isTransparent="isTransparent"
        v-on:updated="updateDataURL($event)"
      />
    </div>
    <hr>
    <a href="https://github.com/sakihet/text-image-generator" target="_blank">github</a>
    <p>version: {{ version }}</p>
  </div>
</template>

<script>
import AppButton from './components/AppButton'
import AppCanvas from './components/AppCanvas'
import AppDatalist from './components/AppDatalist'
import AppInput from './components/AppInput'
import {version} from '../package.json'

export default {
  name: 'app',
  components: {
    AppButton,
    AppCanvas,
    AppDatalist,
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
      width: 256,
      angle: 0,
      fonts: [
        'arial',
        'verdana',
        'tahoma',
        'georgia',
        'times new roman',
        'courier new',
        'andale mono'
      ],
      isTransparent: false,
      version: version,
      dataURL: ''
    }
  },
  methods: {
    updateDataURL: function (dataURL) {
      this.dataURL = dataURL
    },
    download: function () {
      console.log('download')
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
hr {
  border: 0.5px inset #ccc;
}
</style>
