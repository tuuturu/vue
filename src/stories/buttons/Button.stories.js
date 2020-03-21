import { action } from '@storybook/addon-actions';

import Button from './Button.vue';

export default {
  title: 'Buttons/Button',
  component: Button,
};

export const standard = () => ({
  components: { Button },
  template: '<Button @click="action">Submit</Button>',
  methods: {
    action: action('clicked')
  },
});

export const secondary = () => ({
  components: { Button },
  template: '<Button secondary @click="action">Submit</Button>',
  methods: {
    action: action('clicked')
  },
});

export const danger = () => ({
  components: { Button },
  template: '<Button danger @click="action">Submit</Button>',
  methods: {
    action: action('clicked')
  },
});
