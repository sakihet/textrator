<template>
  <div id="app">
    <AppHeader
      :headerText="name"
      :headerDescription="description"
    />
    <p>version: {{ version }}</p>
  </div>
</template>

<script>
import { name, description, version } from '../package.json'
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data () {
    return {
      name: name[0].toUpperCase() + name.slice(1),
      description: description,
      version: version
    }
  }
}
</script>

<style>
#app {
}
</style>
