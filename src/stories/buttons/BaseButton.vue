<template>
  <button
    :class="{ primary, disabled }"
    class="BaseButton"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
const navn = 'Ingrid'

const personer = { navn }

  export default {
    name: 'BaseButton',
    props: {
      primary: Boolean,
      disabled: Boolean
    },
    mounted() {
      console.log(this.primary)
    },
    methods: {
      onClick(event) {
        if (this.disabled) return

        this.$emit('click', event)
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.BaseButton {
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  cursor: pointer;
  padding: 25px;

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
