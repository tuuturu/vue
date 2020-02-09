import { action } from '@storybook/addon-actions';

import TextInput from './TextInput.vue';

export default {
  title: 'Forms/TextInput',
  component: TextInput,
};

export const standard = () => ({
  components: { TextInput },
  template: '<TextInput />',
  methods: {
    action: action('clicked')
  },
});

