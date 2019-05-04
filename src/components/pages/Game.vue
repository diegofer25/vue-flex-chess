<template>
  <div class="ch-game bg-dark-grey text-white">

    <div class="ch-layout flex column fill-height">
      <div class="ch-player grow-2">
        <div class="flex row">
          <p class="text-xs-center m-y-none">Jogador 1</p>
        </div>
      </div>
      <div class="ch-board grow-1">
        <div class="flex row fill-height">
          <div class="grow-2">
            y axis
          </div>
          <div class="grow-1">
            <div class="flex column fill-height">
              <div class="grow-1 p-a-sm">
                <ch-board />
              </div>
              <div class="grow-2">
                x axis
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ch-player grow-2">
        <div class="flex row">
          <p class="text-xs-center m-y-none">Jogador 2</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import chBoard from '@/components/organism/board.vue'
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

