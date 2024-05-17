<template>
  <div class="content-wrap">
    <van-tabs v-model="tabActive" color="#1989fa" scrollspy>
      <van-tab title="概述">
        <van-divider>概述</van-divider>
        <info-title title="特定穴" />
        <div class="base-text">{{ xwInfo.tedingxue }}</div>
        <info-title title="主治病症" />
        <div class="base-text" v-html="xwInfo.zhuzhibingzheng" />
        <van-tag v-for="(item, index) in diseaseTreat" :key="index" type="primary" class="treat_tag" size="medium">{{
          item
        }}</van-tag>
        <info-title title="经验应用" />
        <div class="base-text" v-html="xwInfo.jingyanyingyong" />
        <van-tag v-for="(item, index) in experienceTreat" :key="index" type="primary" class="treat_tag" size="medium">{{
          item
        }}</van-tag>
      </van-tab>
      <van-tab title="操作">
        <van-divider>操作</van-divider>
        <info-title title="艾灸" />
        <div class="base-text" v-html="xwInfo.aijiucanshu" />
        <info-title title="按摩" />
        <div class="base-text">{{ xwInfo.massage }}</div>
        <info-title title="针刺" />
        <div class="base-text">{{ xwInfo.acupuncture }}</div>
        <div class="base-text">温馨提示: 针灸需临床证明，请谨慎操作。</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import InfoTitle from './Title.vue';
export default {
  name: 'InfoContent',
  components: {
    InfoTitle,
  },
  props: {
    xwInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      tabActive: 0,
    };
  },
  computed: {
    diseaseTreat() {
      return this.xwInfo.disease_treat.split(',');
    },
    experienceTreat() {
      return this.xwInfo.experience_treat.split(',');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
.content-wrap {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #fff;
  padding-bottom: 10px;
  .base-text {
    @include base-info-text();
  }
  .treat_tag {
    margin-right: 10px;
    margin-top: 5px;
  }
}
</style>