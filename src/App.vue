<template>
  <div id="app">
    <div class="container">
      <h1>Text Image Generator</h1>
      <AppInput
        labelText="text"
        inputType="text"
      />
      <AppInput
        labelText="size"
        inputType="number"
      />
      <AppInput
        labelText="foreground color"
        inputType="text"
      />
      <AppInput
        labelText="background color"
        inputType="text"
      />
      <AppInput
        labelText="height"
        inputType="number"
      />
      <AppInput
        labelText="width"
        inputType="number"
      />
      <AppButton
        text="save"
      />
      <AppCanvas
        height="256"
        width="256"
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
