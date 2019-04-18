<template>
  <div :class="`ch-square ${color}-square`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ch-square',
  props: {
    color: {
      type: String,
      required: true,
      validator: (value) => ['black', 'white'].indexOf(value) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
  .ch-square {
    width: 100px;
    &.white-square {
      background-color: white;
    }
    &.black-square {
      background-color: #757575;
    }
  }
</style>

