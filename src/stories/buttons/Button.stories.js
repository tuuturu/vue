import { action } from '@storybook/addon-actions';

import BaseButton from './BaseButton.vue';

export default {
  title: 'Buttons/BaseButton',
  component: BaseButton,
};

export const primary = () => ({
  components: { BaseButton },
  template: '<BaseButton primary @click="action">Knappetekst</BaseButton>',
  methods: {
    action: action('clicked')
  },
});

export const disabled = () => ({
  components: { BaseButton },
  template: '<BaseButton disabled @click="action">Knappetekst</BaseButton>',
  methods: {
    action: action('clicked')
  },
});
