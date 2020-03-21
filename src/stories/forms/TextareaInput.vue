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

	border: $border-width solid $primary-color;
	border-radius: $border-radius;

	line-height: 2em;
}
</style>
