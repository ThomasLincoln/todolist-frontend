<template>
  <div>
    <button :style="buttonStyle">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
  },
  computed: {
    buttonStyle() {
      return {
        padding: `0.5em ${this.size}em`,
      }
    }
  }
}
</script>

<style>
button {
  color: var(--white);
  background-color: var(--secondary-color);
  box-shadow: 0px 0px 10px var(--white);

  border-radius: 13px;
  font-size: large;
}
</style>