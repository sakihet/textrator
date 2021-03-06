<template>
  <div id="app">
    <div class="container">
      <AppHeader
        :headerText="name"
        :headerDescription="description"
      />
      <InputLabeled
        inputId="imageText"
        inputType="text"
        labelName="text"
        :value="text"
        @input="text = $event"
      />
      <FormCentered>
        <template v-slot:leftContent>
          <label for="font">font</label>
        </template>
        <template v-slot:rightContent>
          <AppDatalist
            :datalist="fonts"
            :value="font"
            @input="font = $event"
          />
        </template>
      </FormCentered>
      <InputLabeled
        inputId="imageSize"
        inputType="number"
        labelName="size"
        :value="size"
        @input="size = $event"
      />
      <SelectLabeled
        selectId="baseline"
        labelName="baseline"
        :optionList = "baselineList"
        @select="updateBaseline($event)"
      />
      <InputLabeled
        inputId="foregroundColor"
        inputType="color"
        labelName="foreground color"
        :value="foregroundColor"
        @input="foregroundColor = $event"
      />
      <InputLabeled
        inputId="backgroundColor"
        inputType="color"
        labelName="background color"
        :value="backgroundColor"
        @input="backgroundColor = $event"
      />
      <InputLabeled
        inputId="height"
        inputType="number"
        labelName="height"
        :value="height"
        @input="height = $event"
      />
      <InputLabeled
        inputId="width"
        inputType="number"
        labelName="width"
        :value="width"
        @input="width = $event"
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
        :value="angle"
        @input="angle = $event"
      />
      <InputLabeled
        inputId="transparent"
        inputType="checkbox"
        labelName="transparent"
        :value="isTransparent"
        @input="isTransparent = $event"
      />
      <FormCentered>
        <template v-slot:rightContent>
          <AppAnchor
            :href="dataURL"
            download="image.png"
            text="download"
          />
        </template>
      </FormCentered>
      <AppCanvas
        :height="parseInt(height)"
        :width="parseInt(width)"
        :foregroundColor="foregroundColor"
        :backgroundColor="backgroundColor"
        :text="text"
        :size="parseInt(size)"
        :font="font"
        :baseline="baseline"
        :angle="parseInt(angle)"
        :isTransparent="isTransparent"
        v-on:updated="updateDataURL($event)"
      />
    </div>
    <a href="https://github.com/sakihet/textrator" target="_blank">github</a>
    <p>version: {{ version }}</p>
  </div>
</template>

<script>
import AppAnchor from './components/AppAnchor'
import AppButton from './components/AppButton'
import AppCanvas from './components/AppCanvas'
import AppDatalist from './components/AppDatalist'
import AppHeader from './components/AppHeader'
import AppInput from './components/AppInput'
import FormCentered from './components/FormCentered'
import InputLabeled from './components/InputLabeled'
import SelectLabeled from './components/SelectLabeled'
import {name} from '../package.json'
import {description} from '../package.json'
import {version} from '../package.json'

const FONTS = [
  'arial',
  'verdana',
  'tahoma',
  'georgia',
  'times new roman',
  'courier new',
  'andale mono'
]

const BASELINES = [
  {
    id: 1,
    name: 'top'
  },
  {
    id: 2,
    name: 'hanging'
  },
  {
    id: 3,
    name: 'middle'
  },
  {
    id: 4,
    name: 'alphabetic'
  },
  {
    id: 5,
    name: 'ideographic'
  },
  {
    id: 6,
    name: 'bottom'
  }
]

const SIZE_PRESETS = [
  {
    id: 1,
    name: 'favicon (32 x 32)',
    height: 32,
    width: 32
  },
  {
    id: 2,
    name: '128 x 128',
    height: 128,
    width: 128
  },
  {
    id: 3,
    name: '256 x 256',
    height: 256,
    width: 256
  }
]

export default {
  name: 'app',
  components: {
    AppAnchor,
    AppButton,
    AppCanvas,
    AppDatalist,
    AppHeader,
    AppInput,
    FormCentered,
    InputLabeled,
    SelectLabeled
  },
  data () {
    return {
      name: name[0].toUpperCase() + name.slice(1),
      description: description,
      text: 'hello.',
      size: 64,
      font: 'sans-serif',
      baseline: 'middle',
      foregroundColor: '#000000',
      backgroundColor: '#ffffff',
      height: 256,
      width: 256,
      angle: 0,
      fonts: FONTS,
      isTransparent: false,
      version: version,
      dataURL: '',
      selectedSizeId: null,
      sizeList: SIZE_PRESETS,
      baselineList: BASELINES
    }
  },
  methods: {
    updateDataURL: function (dataURL) {
      this.dataURL = dataURL
    },
    updateSize: function (sizeId) {
      if (0 < sizeId) {
        let size = this.sizeList.find(x => x.id === parseInt(sizeId))
        this.width = size.width
        this.height = size.height
      }
    },
    updateBaseline: function (id) {
      if (0 < id) {
        this.baseline = this.baselineList.find(x => x.id === parseInt(id)).name
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
