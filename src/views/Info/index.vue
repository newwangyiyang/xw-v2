<template>
  <div class="info-wrap">
    <info-header :xwInfo="xwInfo" />
    <info-explain :xwInfo="xwInfo" />
    <info-content :xwInfo="xwInfo" />
  </div>
</template>

<script>
import XwListJson from '@/data/xwInfo.json';
import jlInfo from '@/data/jingluo.json';

import InfoHeader from './components/Header.vue';
import InfoExplain from './components/Explain.vue';
import InfoContent from './components/Content.vue';
export default {
  name: 'XwInfo',
  components: {
    InfoHeader,
    InfoExplain,
    InfoContent,
  },
  computed: {
    xwName() {
      return decodeURIComponent(this.$route.params.xw);
    },
    xwInfo() {
      const xwInfo =
        XwListJson.find((item) => [item.name, item.alias].some((matchItem) => matchItem === this.xwName)) || {};
      const jingluoId = String(xwInfo.jingluo);
      const jlItem = jlInfo.find((item) => jingluoId === item.jl.jlId);
      const jlName = jlItem.jl.name;
      return {
        ...xwInfo,
        jlName,
      };
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.info-wrap {
  background-color: #f7f8fa;
}
</style>