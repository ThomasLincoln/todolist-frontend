<template>
  <div>
    <button class="defaultButton" :style="buttonStyle">
      <div style="display: flex; align-items: center;">
        <slot name="icon"></slot>
        <div class="label">
          {{ label }}
        </div>
      </div>
    </button>
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
    backCor: {
      type: String,
      required: true
    },
    cor: {
      type: String,
      required: true
    }
  },
  computed: {
    buttonStyle() {
      return {
        padding: `0.5em ${this.size}em`,
        backgroundColor: `var(${this.backCor})`,
        color: `var(${this.cor})`
      }
    }
  }
}
</script>

<style>
.defaultButton {
  border-radius: 13px;
  font-size: large;
}

.defaultButton .label{
  margin-left: 1em;
}
</style>