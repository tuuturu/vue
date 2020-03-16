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
    background-color: #545975;
    padding: 1em;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    color: white;
    min-width: 750px;
}

</style>