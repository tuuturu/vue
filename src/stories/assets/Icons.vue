<template>
    <div class="Icons">
        <Arrow v-if="arrow" />
        <Expand v-if="expand" />
        <Minimize v-if="minimize" />
    </div>
</template>

<script>
import Arrow from './Arrow.vue'
import Expand from './Expand.vue'
import Minimize from './Minimize.vue'

export default {
  name: "Icons",
  components: { Arrow, Expand, Minimize },
  props: { arrow: Boolean, expand: Boolean, minimize: Boolean }
}
</script>

<style scoped>

</style>