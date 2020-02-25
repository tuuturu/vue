import Icons from './Icons.vue'

export default {
  title: 'Assets/Icons',
  component: Icons
};

export const arrow = () => ({
  components: { Icons },
  template: '<Icons arrow style="color: #2A2859"/>'
})

export const expand = () => ({
  components: { Icons },
  template: '<Icons expand style="color: #2A2859"/>'
})

export const minimize = () => ({
  components: { Icons },
  template: '<Icons minimize style="color: #2A2859"/>'
})