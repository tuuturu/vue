<template>
  <button :class="{ primary, danger, disabled }" class="BaseButton btn" v-bind="$attrs" v-on="$listeners">
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
    }
  }
</script>

<style lang="scss" src="@tuuturu/styling/style.scss" scoped></style>
