import { reactive } from 'vue'

export interface Store {
  text: string,
  font: string,
  size: number,
  height: number,
  width: number,
  bgColor: string,
  fgColor: string,
  isTransparent: boolean,
  baseline: CanvasTextBaseline,
  angle: number,
  blur: number,
  contrast: number,
  grayscale: number,
  hueRotate: number,
  dataURL: string
}

export const store: Store = reactive({
  text: 'hello',
  font: 'times new roman',
  size: 64,
  height: 256,
  width: 256,
  bgColor: '#ffffff',
  fgColor: '#000000',
  isTransparent: false,
  baseline: 'middle',
  angle: 0,
  blur: 0,
  contrast: 100,
  grayscale: 0,
  hueRotate: 0,
  dataURL: ''
})
