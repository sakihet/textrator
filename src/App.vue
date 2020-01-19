<template>
  <div id="app">
    <div class="container">
      <AppHeader
        text="Text Image Generator"
      />
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
      <AppSelect
        labelText="baseline"
        :optionList = "baselineList"
        @select="updateBaseline($event)"
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
      <AppSelect
        labelText="size"
        :optionList = "sizeList"
        @select="updateSize($event)"
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
    <a href="https://github.com/sakihet/text-image-generator" target="_blank">github</a>
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
import AppSelect from './components/AppSelect'
import FormCentered from './components/FormCentered'
import {version} from '../package.json'

export default {
  name: 'app',
  components: {
    AppAnchor,
    AppButton,
    AppCanvas,
    AppDatalist,
    AppHeader,
    AppInput,
    AppSelect,
    FormCentered
  },
  data () {
    return {
      text: 'hello.',
      size: 64,
      font: 'sans-serif',
      baseline: 'middle',
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
      dataURL: '',
      selectedSizeId: null,
      sizeList: [
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
      ],
      baselineList: [
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
