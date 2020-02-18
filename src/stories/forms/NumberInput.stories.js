import { action } from '@storybook/addon-actions';

import NumberInput from './NumberInput.vue';

export default {
	title: 'Forms/NumberInput',
	component: NumberInput,
};

export const standard = () => ({
	components: { NumberInput },
	template: '<NumberInput />',
	methods: {
		action: action('clicked')
	},
});
