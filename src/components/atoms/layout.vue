<template>
  <div class="flex" :class="[flexClasses, breakpointClasses]">
    <slot />
  </div>
</template>

<script>
import { breakpoints } from '@/mixins'
export default {
  name: 'ch-layout',
  mixins: [breakpoints],
  props: {
    row: Boolean,
    column: Boolean,
    rowReverse: Boolean,
    columnReverse: Boolean,
    nowrap: Boolean,
    wrap: Boolean,
    wrapReverse: Boolean,
    justifyStart: Boolean,
    justifyEnd: Boolean,
    justifyCenter: Boolean,
    justifySpaceBetween: Boolean,
    justifySpaceAround: Boolean,
    justifySpaceEvenly: Boolean,
    justifyStretch: Boolean,
    alignItemsStart: Boolean,
    alignItemsEnd: Boolean,
    alignItemsCenter: Boolean,
    alignItemsBaseline: Boolean,
    alignStart: Boolean,
    alignEnd: Boolean,
    alignCenter: Boolean,
    alignSpaceBetween: Boolean,
    alignSpaceAround: Boolean,
    alignStretc: Boolean,
  },
  computed: {
    flexClasses () {
      return {
        row: this.row,
        column: this.column,
        'row-reverse': this.rowReverse,
        'column-reverse': this.columnReverse,
        nowrap: this.nowrap,
        wrap: this.wrap,
        'wrap-reverse': this.wrapReverse,
        'justify-start': this.justifyStart,
        'justify-end': this.justifyEnd,
        'justify-center': this.justifyCenter,
        'justify-spaceBetween': this.justifySpaceBetween,
        'justify-spaceAround': this.justifySpaceAround,
        'justify-spaceEvenly': this.justifySpaceEvenly,
        'justify-stretch': this.justifyStretch,
        'align-items-start': this.alignItemsStart,
        'align-items-end': this.alignItemsEnd,
        'align-items-center': this.alignItemsCenter,
        'align-items-baseline': this.alignItemsBaseline,
        'align-start': this.alignStart,
        'align-end': this.alignEnd,
        'align-center': this.alignCenter,
        'align-space-between': this.alignSpaceBetween,
        'align-spaceAround': this.alignSpaceAround,
        'align-stretc': this.alignStretc,
      }
    }
  }
}
</script>
