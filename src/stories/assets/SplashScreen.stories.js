import SplashScreen from './SplashScreen.vue'

export default {
  title: 'Illustrations/Splash Screen',
  component: SplashScreen
}

export const primary = () => ({
  components: { SplashScreen },
  template: '<SplashScreen></SplashScreen>'
});