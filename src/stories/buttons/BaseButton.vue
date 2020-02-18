<template>
  <button
    :class="{ primary, danger, disabled }"
    class="BaseButton btn"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      primary: Boolean,
      danger: Boolean,
      disabled: Boolean
    },
    methods: {
      onClick(event) {
        if (this.disabled) return

        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="scss" src="@tuuturu/styling/style.scss" scoped></style>
