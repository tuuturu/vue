import IconCamera from './IconCamera.vue'

export default {
  title: 'Icon/Camera',
  component: IconCamera
}

export const primary = () => ({
  components: { IconCamera },
  template: '<IconCamera style="width: 128px; height: 128px; color: #545975"></IconCamera>'
})
