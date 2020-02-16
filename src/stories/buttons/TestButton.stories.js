import { action } from '@storybook/addon-actions';

import TestButton from './TestButton.vue';

export default {
  title: 'Buttons/TestButton',
  component: TestButton,
};

export const primary = () => ({
  components: { TestButton },
  template: '<TestButton primary @click="action">Submit</TestButton>',
  methods: {
    action: action('clicked')
  },
});
