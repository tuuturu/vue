import Link from './Link.vue';

export default {
  title: 'Links/Link',
  component: Link
};

export const primary = () => ({
  components: { Link },
  template: '<Link>Lenke</Link>',
});