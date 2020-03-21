import IconLocation from './IconLocation.vue'

export default {
  title: 'Icon/Location',
  component: IconLocation
}

export const primary = () => ({
  components: { IconLocation },
  template: '<IconLocation style="width: 128px; height: 128px; color: #545975"></IconLocation>'
})
