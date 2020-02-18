import { action } from '@storybook/addon-actions';

import DateInput from './DateInput.vue';

export default {
	title: 'Forms/DateInput',
	component: DateInput,
};

export const standard = () => ({
	components: { DateInput },
	template: '<DateInput @input="action"/>',
	methods: {
		action: action('changed date')
	},
});

