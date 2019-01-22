<template>
<div>
    <div>
        <tophead></tophead>
    </div>
    <div><!-- 主体 -->
        <router-view></router-view>
    </div>
    <div>
        <foot></foot>
    </div>
</div>
</template>
<script>
import tophead from './tophead.vue';
import foot from './foot.vue';
export default {
  name: 'heads',
  data() {
    return {

    }
  },
  components: {
    'tophead': tophead,
    'foot': foot
  }
}
</script>
<style lang="scss">

</style>


