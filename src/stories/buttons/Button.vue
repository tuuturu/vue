<template>
		<button
			class="Button"
			:class="{ danger, secondary }"
			v-bind="$attrs"
			v-on="$listeners"
		>
				<slot />
		</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		danger: Boolean,
		secondary: Boolean
	}
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style';

.Button {
	background-color: $primary-color;
	padding: 1em;
	font-weight: bold;
	font-size: large;
	cursor: pointer;
	color: white;

	border: $border-width solid $primary-color;
	border-radius: $border-radius;

	&.secondary {
		background-color: transparent;
		color: $primary-color;
	}

	&.danger {
		background-color: $red;
		border-color: $red;
	}
}
</style>
