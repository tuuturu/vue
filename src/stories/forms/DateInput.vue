<template>
	<input
		class="DateInput"
		type="date"
		v-bind="$attrs"
		:value="date"
		@input="$emit('input', $event.target.valueAsDate)"
	/>
</template>

<script>
export default {
	name: 'DateInput',
	props: {
		value: {
			type: Date,
			default: () => new Date(Date.now())
		},
	},
	computed: {
		date() {
			if (this.value)
				return this.value.toISOString().split('T')[0]

			return ''
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.DateInput {
	@include clickable;

	padding: 1em;

	border: $border-width solid $primary-color;
	border-radius: $border-radius;

	line-height: 2em;
}
</style>
