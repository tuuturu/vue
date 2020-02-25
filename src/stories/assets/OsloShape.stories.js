import OsloShape from './OsloShape.vue';

export default {
  title: 'Assets/OsloShape',
  component: OsloShape,
};

export const angle = () => ({
  components: { OsloShape },
  template: '<OsloShape angle style="color: #034B45"/>'
});

export const circle = () => ({
  components: { OsloShape },
  template: '<OsloShape circle style="color: #F9C66B"/>'
});

export const sqaure = () => ({
  components: { OsloShape },
  template: '<OsloShape square style="color: #FF8274"/>'
});