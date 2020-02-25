import Header from './Header';

export default {
  title: 'Page/Header',
  component: Header,
  data: () => ({
    $route: { name: '' }
  })
};

export const standard = () => ({
  components: { Header },
  template: '<Header />',
});
