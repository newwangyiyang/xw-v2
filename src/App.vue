<template>
  <div id="app">
    <keep-alive :max="keepAliveMax" :include="keepAliveRoutes">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { appSetting } from '@/utils/constant';
export default {
  name: 'App',
  computed: {
    ...mapGetters(['keepAliveRoutes']),
    keepAliveMax() {
      return appSetting.keepAliveMax;
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/common.scss';
@import '@/assets/scss/mixins.scss';
</style>
