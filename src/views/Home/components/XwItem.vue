<template>
  <div class="xw-item-wrap">
    <div v-show="mainXw.length > 0" class="main_box">
      <div class="main_tit">主穴</div>
      <div class="main_btn_box">
        <van-button v-for="item in mainXw" :key="item" size="small" class="main_btn" @click="handleViewXwInfo(item)">{{
          item
        }}</van-button>
      </div>
    </div>
    <div v-show="supportXw.length > 0" class="main_box mb-10">
      <div class="main_tit">配穴</div>
      <div class="main_btn_box">
        <van-button
          v-for="item in supportXw"
          :key="item"
          size="small"
          class="main_btn"
          @click="handleViewXwInfo(item)"
          >{{ item }}</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainXw: {
      type: Array,
      default: () => [],
    },
    supportXw: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 查看穴位详情
    handleViewXwInfo(xw) {
      const encodeXw = encodeURIComponent(xw);
      this.$router.push({
        name: 'Info',
        params: {
          xw: encodeXw,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.xw-item-wrap {
  .main_box {
    padding: 0px 20px;
  }
  .main_tit {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    position: relative;
    padding-left: 10px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 100%;
      background-color: #1989fa;
      border-radius: 1px;
    }
  }
  .main_btn_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .main_btn {
    width: 100px;
    flex-shrink: 0;
    margin-top: 10px;
    margin-right: 8px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
}
</style>