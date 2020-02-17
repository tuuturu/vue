<template>
    <button class="TestButton" v-bind="$attrs" v-on="$listeners">
        <slot />
    </button>
</template>

<script>
export default {
  name: 'TestButton'
}
</script>

<style lang="scss" scoped>

.TestButton {

    background-color: hotpink;
    padding: 1em;

    font-weight: bold;
    font-size: large;

    border: 3px solid hotpink;
    cursor: pointer;

    &:hover {
        color: white;
        border: 3px solid mediumpurple;
        background-color: mediumpurple;
    }
}

</style>