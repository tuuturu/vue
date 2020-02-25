<template>
    <a href="javascript:void(0)">
        <slot></slot>
    </a>
</template>

<script>
export default {
  name: "Link"
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';
$osg-font-path: '~styleguide/src/assets/fonts';
@import '~styleguide/src/assets/sass/common';

a {
    color: $blue-dark;
    font-family: "Oslo Sans", sans-serif;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 2px solid $blue-dark;

    &:focus, &:hover, &:active, &:visited {
        color: $blue-hover;
        text-decoration: none;
        border-bottom: 2px solid $blue-hover;
    }
}

</style>