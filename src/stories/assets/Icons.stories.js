import { action } from '@storybook/addon-actions'
import Icons from './Icons.vue'


function template(content, component, prop) {
  return `<div>${content}<br><br><span>💡 Usage: &lt;${component} ${prop} /&gt;</span>`
}

export default {
  title: 'Assets/Icons',
  component: Icons
};

export const arrow = () => ({
  components: { Icons },
  template: template('<Icons @click="action" arrow style="color: #2A2859"/>', 'Icons', 'arrow'),
	methods: {
  	action: action('Click!')
  }
})

export const expand = () => ({
  components: { Icons },
  template: template('<Icons @click="action" expand style="color: #2A2859"/>', 'Icons', 'expand'),
  methods: {
    action: action('Click!')
  }
})

export const minimize = () => ({
  components: { Icons },
  template: template('<Icons @click="action" minimize style="color: #2A2859"/>', 'Icons', 'minimize'),
  methods: {
    action: action('Click!')
  }
})
