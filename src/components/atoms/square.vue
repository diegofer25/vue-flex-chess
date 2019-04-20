<template>
  <div
    :class="`ch-square ${color}-square`"
    @dragover.prevent
    @drop="getMove"
  >
    <slot />
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
    ...mapActions('game', ['setTurn']),
    getMove (e) {
      const vue = this
      e.preventDefault();
      var id = e.dataTransfer.getData("pieceId")
      if (!vue.$slots.default && vue.square.canMove) {
        vue.setTurn()
        vue.$emit('update-piece', { id, newPosition: this.position })
        vue.$emit('finish-move')
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
    &.green-square {
      background-color: rgb(120, 201, 0);
      border: 1px solid black;
    }
  }
</style>

