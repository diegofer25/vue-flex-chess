<template>
  <div id="app">
    <h1>Chess Test</h1>
    <ch-board />
  </div>
</template>

<script>
import chBoard from '@/components/organism/board'
export default {
  name: 'app',
  components: {
    chBoard
  }
}
</script>

<style lang="scss">
  @import './styles/variables/index';

  body {
    color: white;
    background: $background;
    #app {
      text-align: center;
    }
  }
</style>
