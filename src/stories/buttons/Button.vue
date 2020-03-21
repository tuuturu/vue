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
.Button {
	background-color: #545975;
	padding: 1em;
	font-weight: bold;
	font-size: large;
	cursor: pointer;
	color: white;

	border: 2px solid #545975;
	border-radius: 4px;

	&.secondary {
		background-color: transparent;
		color: #545975;
	}

	&.danger {
		background-color: #BC4148;
		border-color: #BC4148;
	}
}
</style>
