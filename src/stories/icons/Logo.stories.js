import Logo from './Logo.vue'

export default {
  title: 'Icons/Logo',
  component: Logo
}

export const primary = () => ({
  components: { Logo },
  template: '<Logo></Logo>'
});
