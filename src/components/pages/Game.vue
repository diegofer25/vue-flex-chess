<template>
  <div class="ch-game bg-dark-grey text-white">

    <!-- <div class="flex row wrap justify-center"> -->
    <ch-layout row wrap justify-center>
      <div class="xs-12 md-2 lg-3 xl-4">
        <p class="text-xs-center">Player 1</p>
      </div>
      <div class="xs-12 md-8 lg-6 xl-4">
        <div class="flex column">
          <div class="grow-1 p-a-sm">
            <ch-board />
          </div>
        </div>
      </div>
      <div class="xs-12 md-2 lg-3 xl-4">
        <p class="text-xs-center">Player 2</p>
      </div>
    </ch-layout>
    <!-- </div> -->

  </div>
</template>

<script>
import { chBoard } from '@/components/templates'
export default {
  name: 'ch-game',
  components: {
    chBoard
  }
}
</script>

<style lang="scss" scoped>
  .ch-game {
    height: 100vh;
  }
</style>

