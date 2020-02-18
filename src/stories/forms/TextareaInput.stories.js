import { action } from '@storybook/addon-actions';

import TextareaInput from './TextareaInput'

export default {
	title: 'Forms/TextareaInput',
	component: TextareaInput,
};

export const standard = () => ({
	components: { TextareaInput },
	template: '<TextareaInput />',
	methods: {
		action: action('clicked')
	},
});

