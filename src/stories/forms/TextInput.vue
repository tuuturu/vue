<template>
	<input
    type="text"
    class="TextInput"
    @input="$emit('input', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
	name: 'TextInput'
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.TextInput {
	@include clickable;

	padding: 1em;

	border: $border-width solid $primary-color;
	border-radius: $border-radius;

	line-height: 2em;
}
</style>
