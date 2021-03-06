export default {
  props: {
    xs1: Boolean,
    xs2: Boolean,
    xs3: Boolean,
    xs4: Boolean,
    xs5: Boolean,
    xs6: Boolean,
    xs7: Boolean,
    xs8: Boolean,
    xs9: Boolean,
    xs10: Boolean,
    xs11: Boolean,
    xs12: Boolean,

    sm1: Boolean,
    sm2: Boolean,
    sm3: Boolean,
    sm4: Boolean,
    sm5: Boolean,
    sm6: Boolean,
    sm7: Boolean,
    sm8: Boolean,
    sm9: Boolean,
    sm10: Boolean,
    sm11: Boolean,
    sm12: Boolean,

    md1: Boolean,
    md2: Boolean,
    md3: Boolean,
    md4: Boolean,
    md5: Boolean,
    md6: Boolean,
    md7: Boolean,
    md8: Boolean,
    md9: Boolean,
    md10: Boolean,
    md11: Boolean,
    md12: Boolean,

    lg1: Boolean,
    lg2: Boolean,
    lg3: Boolean,
    lg4: Boolean,
    lg5: Boolean,
    lg6: Boolean,
    lg7: Boolean,
    lg8: Boolean,
    lg9: Boolean,
    lg10: Boolean,
    lg11: Boolean,
    lg12: Boolean,

    xl1: Boolean,
    xl2: Boolean,
    xl3: Boolean,
    xl4: Boolean,
    xl5: Boolean,
    xl6: Boolean,
    xl7: Boolean,
    xl8: Boolean,
    xl9: Boolean,
    xl10: Boolean,
    xl11: Boolean,
    xl12: Boolean,
  },
  computed: {
    breakpointClasses () {
      return {
        'xs-1': this.xs1,
        'xs-2': this.xs2,
        'xs-3': this.xs3,
        'xs-4': this.xs4,
        'xs-5': this.xs5,
        'xs-6': this.xs6,
        'xs-7': this.xs7,
        'xs-8': this.xs8,
        'xs-9': this.xs9,
        'xs-10': this.xs10,
        'xs-11': this.xs11,
        'xs-12': this.xs12,

        'sm-1': this.sm1,
        'sm-2': this.sm2,
        'sm-3': this.sm3,
        'sm-4': this.sm4,
        'sm-5': this.sm5,
        'sm-6': this.sm6,
        'sm-7': this.sm7,
        'sm-8': this.sm8,
        'sm-9': this.sm9,
        'sm-10': this.sm10,
        'sm-11': this.sm11,
        'sm-12': this.sm12,

        'md-1': this.md1,
        'md-2': this.md2,
        'md-3': this.md3,
        'md-4': this.md4,
        'md-5': this.md5,
        'md-6': this.md6,
        'md-7': this.md7,
        'md-8': this.md8,
        'md-9': this.md9,
        'md-10': this.md10,
        'md-11': this.md11,
        'md-12': this.md12,

        'lg-1': this.lg1,
        'lg-2': this.lg2,
        'lg-3': this.lg3,
        'lg-4': this.lg4,
        'lg-5': this.lg5,
        'lg-6': this.lg6,
        'lg-7': this.lg7,
        'lg-8': this.lg8,
        'lg-9': this.lg9,
        'lg-10': this.lg10,
        'lg-11': this.lg11,
        'lg-12': this.lg12,

        'xl-1': this.xl1,
        'xl-2': this.xl2,
        'xl-3': this.xl3,
        'xl-4': this.xl4,
        'xl-5': this.xl5,
        'xl-6': this.xl6,
        'xl-7': this.xl7,
        'xl-8': this.xl8,
        'xl-9': this.xl9,
        'xl-10': this.xl10,
        'xl-11': this.xl11,
        'xl-12': this.xl12
      }
    }
  },
}
