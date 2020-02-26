<template>
  <button
    :class="{ primary, disabled }"
    class="BaseButton"
    v-bind="$attrs"
    v-on="{
      ...$listeners,
      click: event => { !disabled ? $emit('click', event) : '' }
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    primary: Boolean,
    disabled: Boolean
  }
}
</script>
<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.BaseButton {
  min-height: 68px;

  font-size: 18pt;
  font-weight: 300;

  line-height: inherit;
  cursor: pointer;
  padding: 15px 25px 15px 25px;

  &.primary {
    color: white;
    background: $blue-dark;
    border: 2px solid $blue-dark;

    &:focus, &:hover {
      color: white;
      background: $blue-hover;
      border-color: $blue-hover;
      text-decoration: none;
    }
  }

  &.disabled {
    color: $grey-dark;
    background: $grey-medium;
    border: 2px solid $grey-medium;
    cursor: not-allowed;
  }
}
</style>
