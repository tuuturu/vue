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
	@include clickable();

	padding: 1em;

	border: 3px solid black;

	line-height: 2em;
}
</style>
