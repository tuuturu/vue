import Footer from './Footer';

export default {
  title: 'Page/Footer',
  component: Footer,
  data: () => ({
    $route: { name: '' }
  })
};

export const standard = () => ({
  components: { Footer },
  template: '<Footer />',
});
