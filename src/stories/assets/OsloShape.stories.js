import { action } from '@storybook/addon-actions'
import OsloShape from './OsloShape.vue';

function template(content, component, prop) {
  return `<div>${content}<br><br><span>💡 Usage: &lt;${component} ${prop} /&gt;</span>`
}

export default {
  title: 'Assets/OsloShape',
  component: OsloShape
};

export const angle = () => ({
  components: { OsloShape },
  template: template('<OsloShape @click="action" angle style="color: #034B45"/>', 'OsloShape', 'angle'),
  methods: {
    action: action('click')
  }
});

export const circle = () => ({
  components: { OsloShape },
  template: template('<OsloShape @click="action" circle style="color: #F9C66B"/>', 'OsloShape', 'circle'),
  methods: {
    action: action('click')
  }
});

export const square = () => ({
  components: { OsloShape },
  template: template('<OsloShape @click="action" square style="color: #FF8274"/>', 'OsloShape', 'square'),
  methods: {
    action: action('click')
  }
});
