<template>
	<input
		class="NumberInput"
		type="number"
		v-bind="$attrs"
		:value="value"
		@input="$emit('input', parseInt($event.target.value))"
	/>
</template>

<script>
export default {
	name: 'NumberInput',
	props: {
		value: {
			type: Number,
			default: 0
		}
	},
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.NumberInput {
	@include clickable;

	padding: 1em;

	border: 3px solid $black;

	line-height: 2em;
}
</style>
