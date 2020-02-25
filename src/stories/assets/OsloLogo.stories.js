import OsloLogo from './OsloLogo.vue';

export default {
  title: 'Assets/OsloLogo',
  component: OsloLogo,
};

export const standard = () => ({
  components: { OsloLogo },
  template: '<OsloLogo style="width: 300px; height: 154px;"/>'
});
