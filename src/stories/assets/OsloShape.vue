<template>
    <div class="OsloShape" v-on="$listeners" v-bind="$attrs">
        <OsloAngle v-if="angle" />
        <OsloCircle v-if="circle"/>
        <OsloSquare v-if="square"/>
    </div>
</template>

<script>
import OsloAngle from './OsloAngle.vue';
import OsloCircle from './OsloCircle.vue';
import OsloSquare from './OsloSquare.vue';

export default {
  name: "OsloShape",
  components: { OsloAngle, OsloSquare, OsloCircle },
  props: { angle: Boolean, square: Boolean, circle: Boolean }
}
</script>
