<template>
  <div :class="dividerClass"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '1px'
    },
    color: {
      type: String,
      default: 'gray-300'
    },
    margin: {
      type: String,
      default: 'my-4'
    }
  },
  computed: {
    dividerClass() {
      return `${this.margin} bg-${this.color} h-${this.height}`
    }
  }
}
</script>
