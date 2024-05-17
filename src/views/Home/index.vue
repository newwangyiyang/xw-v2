<template>
  <div class="index-wrap">
    <van-index-bar ref="indexBar" highlight-color="#1989fa" :index-list="indexList" @change="handleIndexBarChange">
      <div v-for="(value, key) in indexData" :key="key">
        <van-index-anchor :index="handleGetIndexKey(key)">
          {{ key }}
        </van-index-anchor>
        <xw-item :mainXw="value.mainXw" :supportXw="value.supportXw" />
        <div v-if="value.matchIll">
          <div v-for="item in value.matchIll" :key="item.title" class="ill-wrap">
            <div class="ill-title">{{ item.title }}</div>
            <xw-item :mainXw="item.mainXw" :supportXw="item.supportXw" />
          </div>
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

// import IndexBarJson from '@/data/index-bar';
// 穴位查询2期
import IndexBarJson from '@/data/index-bar-v2';
import XwItem from './components/XwItem.vue';
export default {
  name: 'HomeIndexBar',
  components: {
    XwItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['index']),
    indexData() {
      return IndexBarJson;
    },
    indexList() {
      const keys = Object.keys(this.indexData)
        .map((key) => this.handleGetIndexKey(key))
        .reduce((acc, item) => {
          const sameKey = acc.includes(item);
          let key = item;
          if (sameKey) {
            key += ' ';
          }
          return [...acc, key];
        }, []);
      return keys;
    },
  },
  mounted() {
    // this.handleInitIndexBar();
  },
  methods: {
    ...mapMutations({
      setIndex: 'SET_INDEX',
    }),
    // 获取索引栏标题首字母
    handleGetIndexKey(indexName) {
      if (indexName.includes(' ')) {
        return indexName[0] + ' ';
      }
      return indexName[0] === '（' ? indexName[3] : indexName[0];
    },
    // 索引栏切换
    handleIndexBarChange(index) {
      this.setIndex(index);
    },
    // 初始化默认索引栏位置
    handleInitIndexBar() {
      const index = this.indexList[1];
      this.$refs.indexBar.scrollTo(index);
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #ee0a24;
.index-wrap {
  background-color: #f7f8fa;
  padding-bottom: 10px;

  ::v-deep .van-index-anchor {
    background-color: #fff;
    color: #333;
    font-weight: normal;
    line-height: 40px;
  }

  .ill-wrap {
    padding-left: 10px;
  }

  .ill-title {
    font-size: 14px;
    color: #666;
    padding-left: 10px;
    margin-top: 10px;
    position: relative;
    // &::before {
    //   content: '';
    //   position: absolute;
    //   left: 10px;
    //   top: 50%;
    //   transform: translateY(-50%);
    //   width: 3px;
    //   height: 15px;
    //   border-radius: 2px;
    //   background-color: $primary-color;
    // }
  }

  ::v-deep .van-index-bar__index {
    line-height: 25px;
  }
}
</style>