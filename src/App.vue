<script setup lang="ts">
import {store} from './store'
import AppCanvas from './components/AppCanvas.vue'
import {FONTS, BASELINES} from './constants'
</script>

<template>
  <div class="layout-center text-center layout-stack-6">
    <div class="">
      <div>
        <h1 class="py-4">Textrator</h1>
      </div>
      <div class="py-2">
        <p class="">Text image generator</p>
      </div>
    </div>
    <div class="layout-stack-1 text-secondary">
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span>
                Text
              </span>
            </div>
            <input
              type="text"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.text"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span>
                Font
              </span>
            </div>
            <select
              class="h-6 w-32 border-solid border-1 border-color-primary"
              v-model="store.font"
            >
              <option v-for="f in FONTS" :value="f">{{ f }}</option>
            </select>
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span>
                Size
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.size"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span>
                Height
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.height"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span>
                Width
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.width"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="text-small">
                Foreground color
              </span>
            </div>
            <input
              type="color"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.fgColor"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="text-small">
                Background color
              </span>
            </div>
            <input
              type="color"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.bgColor"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="">
                Transparent
              </span>
            </div>
            <div class="h-6 w-32 text-left">
              <input
                type="checkbox"
                class="h-6 border-solid border-1 border-color-primary"
                v-model="store.isTransparent"
              />
            </div>
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="">
                Baseline
              </span>
            </div>
            <select
              class="h-6 w-32 border-solid border-1 border-color-primary"
              v-model="store.baseline"
            >
              <option v-for="b in BASELINES" :value="b">{{ b }}</option>
            </select>
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="">
                Angle
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.angle"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="">
                Blur
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.blur"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="">
                Contrast
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.contrast"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="">
                Grayscale
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.grayscale"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-32 text-right px-2">
              <span class="">
                Hue rotate
              </span>
            </div>
            <input
              type="number"
              class="h-6 w-32 border-solid border-1 border-color-primary px-2"
              v-model="store.hueRotate"
            />
          </label>
        </div>
      </div>
    </div>
    <div>
      <a
        class="text-decoration-none text-link"
        :href="store.dataURL"
        download="image.png"
      >Download</a>
    </div>
    <div>
      <AppCanvas
        :text="store.text"
        :font="store.font"
        :size="store.size"
        :height="store.height"
        :width="store.width"
        :bgColor="store.bgColor"
        :fgColor="store.fgColor"
        :isTransparent="store.isTransparent"
        :baseline="store.baseline"
        :angle="store.angle"
        :blur="store.blur"
        :contrast="store.contrast"
        :grayscale="store.grayscale"
        :hueRotate="store.hueRotate"
        :dataURL="store.dataURL"
      />
    </div>
    <div class="layout-stack-2">
      <div>
        <a
          class="text-decoration-none text-link text-small"
          href="https://github.com/sakihet/textrator"
        >GitHub</a>
      </div>
      <div>
        <a
          class="text-decoration-none text-link text-small"
          href="https://sakih.net/"
        >©︎ 2018-PRESENT saki</a>
      </div>
    </div>
  </div>
</template>
