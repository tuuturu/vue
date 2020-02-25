import { action } from '@storybook/addon-actions';

import TextInput from './TextInput.vue';

function template(content, component, prop) {
  return `<div>${content}<br><br><span>💡 Usage: &lt;${component} ${prop} /&gt;</span>`
}


export default {
  title: 'Forms/TextInput',
  component: TextInput,
};

export const standard = () => ({
  components: { TextInput },
  template: '<TextInput @input="inputAction" @blur="blurAction" />',
  methods: {
    inputAction: action('input'),
    blurAction: action('blur')
  },
});

export const withLabel = () => ({
  components: { TextInput },
  template: template('<div><TextInput label="Label" />', 'TextInput', 'label="content"')
})
