export default {
    name: 'ux-back-to-top',
    props: ['eleSelector'],
    methods: {
      backTop () {
        this.$emit('backTop')
      }
    }
}