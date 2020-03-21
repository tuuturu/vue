import IconImage from './IconImage.vue'

export default {
  title: 'Icon/Image',
  component: IconImage
}

export const primary = () => ({
  components: { IconImage },
  template: '<IconImage style="width: 128px; height: 128px; color: #545975"></IconImage>'
})
