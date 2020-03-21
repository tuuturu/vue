import IconLogo from './IconLogo.vue'

export default {
  title: 'Icon/Logo',
  component: IconLogo
}

export const primary = () => ({
  components: { IconLogo },
  template: '<IconLogo style="width: 128px; height: 128px;"></IconLogo>'
});
