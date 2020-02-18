<template>
	<textarea
		class="TextareaInput"
		:value="value"
		@input="$emit('input', $event.target.value)"
		v-bind="$attrs"
	/>
</template>

<script>
export default {
	name: 'TextareaInput',
	props: {
		value: String
	}
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.TextareaInput {
	@include clickable;

	padding: 1em;

	border: 3px solid $black;

	line-height: 2em;
}
</style>
