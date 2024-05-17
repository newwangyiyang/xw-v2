<template>
  <div class="explain-wrap">
    <info-title title="定位" />
    <div class="dingwei">{{ xwInfo.dingwei }}</div>
    <info-title title="取穴" />
    <van-steps direction="vertical" :active="-1" class="quxue">
      <van-step v-for="(item, index) in quxueList" :key="index">{{ item }}</van-step>
    </van-steps>
    <div class="img-wrap">
      <img :src="handleGetXwImg(xwInfo.xueweitu)" class="xueweitu" alt="" />
    </div>
  </div>
</template>

<script>
import InfoTitle from './Title.vue';
export default {
  name: 'InfoExplain',
  components: {
    InfoTitle,
  },
  props: {
    xwInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    quxueList() {
      const quxueList = this.xwInfo.quxue.split('<br>').filter(Boolean);
      return quxueList.length > 0 ? quxueList : ['无'];
    },
  },
  methods: {
    handleGetXwImg(xueweitu) {
      return xueweitu.startsWith('http') ? xueweitu : `http://data.jiudafu.com/jingluo/images0/${xueweitu}.jpeg`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
.explain-wrap {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #fff;
  .dingwei {
    @include base-info-text();
  }
  ::v-deep .van-step--vertical {
    &::after {
      border: 0 none;
    }
  }
  .quxue {
    margin-top: -5px;
  }
  .img-wrap {
    overflow: hidden;
    padding-bottom: 5px;
    .xueweitu {
      display: inline-block;
      width: 100%;
      height: auto;
      margin-top: -70px;
    }
  }
}
</style>