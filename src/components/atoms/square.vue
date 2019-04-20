<template>
  <div
    :class="`ch-square ${color}-square`"
    @dragover.prevent
    @drop="getMove"
  >
    <div :class="{ 'can-move': square.canMove  }">
      <slot />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ch-square',
  props: {
    color: {
      type: String,
      required: true,
      validator: (value) => ['green', 'black', 'white'].indexOf(value) !== -1
    },
    square: {
      type: Object,
      required: true
    },
    position: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('game', [
      'endTurn',
      'setPiecePosition',
      'finishMove'
    ]),
    getMove (e) {
      const vue = this
      e.preventDefault();
      var id = parseInt(e.dataTransfer.getData("pieceId"))
      if (vue.square.canMove) {
        vue.setPiecePosition({ id, newPosition: this.position })
        vue.finishMove()
        vue.endTurn()
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .ch-square {
    width: 100px;
    &.white-square {
      background-color: rgb(255, 255, 255);
    }
    &.black-square {
      background-color: #757575;
    }
    .can-move {
      height: 100%;
      width: 100%;
      background-color: rgba(121, 201, 0, 0.5);
    }
  }
</style>

