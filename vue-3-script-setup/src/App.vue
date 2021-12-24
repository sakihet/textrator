<script setup>
import { name, description, version } from '../package.json'
import { ref } from 'vue'
import AppCanvas from './components/AppCanvas.vue'

const text = ref('hello')
const size = ref(64)
const height = ref(256)
const width = ref(256)
const fgColor = ref('#000000')
const bgColor = ref('#ffffff')
const isTransparent = ref(false)
const baseline = ref('middle')
const angle = ref(0)
const blur = ref(0)
const contrast = ref(100)
const grayscale = ref(0)
const hueRotate = ref(0)
const dataURL = ref('')
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
const updateDataURL = (data) => {
  dataURL.value = data
}
</script>

<template>
  <div class="flex-column align-center">
    <header class="padding-top-2 padding-bottom-2">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
    </header>
    <main class="flex-column">
      <div class="flex-row">
        <div class="flex-auto"></div>
        <div class="flex-auto flex-row min-w-256 max-w-256">
          <form>
            <div class="flex-row">
              <label
                for="imageText"
                class="min-w-128 align-right"
              >
                text
              </label>
              <input
                type="text"
                v-model="text"
                id="imageText"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageSize"
                class="min-w-128 align-right"
              >
                size
              </label>
              <input
                type="number"
                v-model="size"
                id="imageSize"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageHeight"
                class="min-w-128 align-right"
              >
                height
              </label>
              <input
                type="number"
                v-model="height"
                id="imageHeight"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageWidth"
                class="min-w-128 align-right"
              >
                width
              </label>
              <input
                type="number"
                v-model="width"
                id="imageWidth"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageFgColor"
                class="min-w-128 align-right"
              >
                foreground color
              </label>
              <input
                type="color"
                v-model="fgColor"
                id="imageFgColor"
                class="min-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageBgColor"
                class="min-w-128 align-right"
              >
                background color
              </label>
              <input
                type="color"
                v-model="bgColor"
                id="imageBgColor"
                class="min-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageIsTransparent"
                class="min-w-128 align-right"
              >
                transparent
              </label>
              <input
                type="checkbox"
                v-model="isTransparent"
                id="imageIsTransparent"
                class=""
              >
            </div>
            <div class="flex-row">
              <label
                class="min-w-128 align-right"
              >
                baseline
              </label>
              <select
                class="min-w-128"
                v-model="baseline"
              >
                <option
                  v-for="baseline in BASELINES"
                  :value="baseline.name"
                >
                  {{ baseline.name }}
                </option>
              </select>
            </div>
            <div class="flex-row">
              <label
                for="imageAngle"
                class="min-w-128 align-right"
              >
                angle
              </label>
              <input
                type="number"
                v-model="angle"
                id="imageAngle"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageBlur"
                class="min-w-128 align-right"
              >
                blur
              </label>
              <input
                type="number"
                v-model="blur"
                id="imageBlur"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageContrast"
                class="min-w-128 align-right"
              >
                contrast
              </label>
              <input
                type="number"
                v-model="contrast"
                id="imageContrast"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageGrayscale"
                class="min-w-128 align-right"
              >
                grayscale
              </label>
              <input
                type="number"
                v-model="grayscale"
                id="imageGrayscale"
                class="max-w-128"
              >
            </div>
            <div class="flex-row">
              <label
                for="imageHueRotate"
                class="min-w-128 align-right"
              >
                hur rotate
              </label>
              <input
                type="number"
                v-model="hueRotate"
                id="imageHueRotate"
                class="max-w-128"
              >
            </div>
            <a
              :href="dataURL"
              download="image.png"
            >
              download
            </a>
          </form>
        </div>
        <div class="flex-auto"></div>
      </div>
      <div>
        <AppCanvas
          :text="text"
          :size="size"
          :height="height"
          :width="width"
          :fgColor="fgColor"
          :bgColor="bgColor"
          :isTransparent="isTransparent"
          :baseline="baseline"
          :angle="angle"
          :blur="blur"
          :contrast="contrast"
          :grayscale="grayscale"
          :hueRotate="hueRotate"
          @updated="updateDataURL($event)"
        />
      </div>
    </main>
    <footer class="appFooter">
      <a href="https://github.com/sakihet/textrator" target="_blank">Github</a>
      <br>
      Released under the MIT License
      <br>
      version: {{ version }} ©︎ 2018-2021 <a href="https://sakih.net" target="_blank">saki</a>
    </footer>
  </div>
</template>

<style>
@import './assets/base.css';

:root {
  --space-1: 8px;
  --space-2: 16px;
}
.padding-left-1 {
  padding-left: var(--space-1);
}
.padding-top-2 {
  padding-top: var(--space-2);
}
.padding-bottom-2 {
  padding-bottom: var(--space-2);
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-auto {
  flex: auto;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
.align-left {
  text-align: left;
}
.min-w-128 {
  min-width: 128px;
}
.max-w-128 {
  max-width: 128px;
}
.min-w-256 {
  min-width: 256px;
}
.max-w-256 {
  max-width: 256px;
}
</style>
