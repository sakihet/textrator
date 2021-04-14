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
    <DatalistLabeled
      selectId="font"
      labelName="font"
      :datalistList="fontList"
      :value="image.font"
      @input="updateFont($event.target.value)"
    />
    <InputLabeled
      inputId="imageSize"
      inputType="number"
      labelName="size"
      :value="image.textSize"
      @input="image.textSize = $event"
    />
    <SelectLabeled
      selectId="baseline"
      labelName="baseline"
      :optionList="baselineList"
      @select="updateBaseline($event)"
    />
    <InputLabeled
      inputId="foregroundColor"
      inputType="color"
      labelName="foreground color"
      :value="image.color.foreground"
      @input="image.color.foreground = $event"
    />
    <InputLabeled
      inputId="backgrounColor"
      inputType="color"
      labelName="background color"
      :value="image.color.background"
      @input="image.color.background = $event"
    />
    <InputLabeled
      inputId="height"
      inputType="number"
      labelName="height"
      :value="image.size.height"
      @input="image.size.height = $event"
    />
    <InputLabeled
      inputId="width"
      inputType="number"
      labelName="width"
      :value="image.size.width"
      @input="image.size.width = $event"
    />
    <SelectLabeled
      selectId="sizePresets"
      labelName="size presets"
      :optionList="sizeList"
      @select="updateSize($event)"
    />
    <InputLabeled
      inputId="angle"
      inputType="number"
      labelName="angle"
      :value="image.angle"
      @input="image.angle = $event"
    />
    <InputLabeled
      inputId="transparent"
      inputType="checkbox"
      labelName="transparent"
      :value="image.isTransparent"
      @input="image.isTransparent = $event"
    />
    <AppAnchor
      :href="dataURL"
      download="image.png"
      text="download"
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
    <footer>
      <a href="https://github.com/sakihet/textrator" target="_blank">Github</a>
      <p>Released under the MIT License</p>
      <p>version: {{ version }} ©︎ 2018-2021 <a href="https://sakih.net" target="_blank">saki</a></p>
    </footer>
  </div>
</template>

<script>
import { name, description, version } from '../package.json'
import { BASELINES, FONTS, SIZE_PRESETS } from './constants'
import AppAnchor from './components/AppAnchor'
import AppCanvas from './components/AppCanvas'
import AppHeader from './components/AppHeader'
import DatalistLabeled from './components/DatalistLabeled'
import InputLabeled from './components/InputLabeled'
import SelectLabeled from './components/SelectLabeled'

export default {
  name: 'App',
  components: {
    AppAnchor,
    AppCanvas,
    AppHeader,
    DatalistLabeled,
    InputLabeled,
    SelectLabeled
  },
  data () {
    return {
      name: name[0].toUpperCase() + name.slice(1),
      dataURL: '',
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
      },
      sizeList: SIZE_PRESETS,
      baselineList: BASELINES,
      fontList: FONTS
    }
  },
  methods: {
    updateBaseline: function (id) {
      if (id > 0) {
        this.image.baseline = this.baselineList.find(x => x.id === parseInt(id)).name
      } else {
        this.image.baseline = 'middle'
      }
    },
    updateDataURL: function (dataURL) {
      this.dataURL = dataURL
    },
    updateFont: function (font) {
      if (font) {
        const newFont = this.fontList.find(x => x === font)
        this.image.font = newFont
      }
    },
    updateSize: function (sizeId) {
      if (sizeId > 0) {
        const size = this.sizeList.find(x => x.id === parseInt(sizeId))
        this.image.size.width = size.width
        this.image.size.height = size.height
      } else {
        this.image.size.width = 256
        this.image.size.height = 256
      }
    }
  }
}
</script>

<style>
/* reset */
* {
  box-sizing: border-box;
}
body,
h1,
p {
  margin: 0;
}
body {
  min-height: 100vh;
}

#app {
  text-align: center;
}
footer {
  color: #757575;
}
</style>
