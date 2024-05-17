<template>
  <div class="header-wrap">
    <div class="header-img-box">
      <img class="header-img" src="http://data.jiudafu.com/jingluo/images0/手太阴肺经_opt.jpeg" alt="" />
    </div>
    <ul class="header-main">
      <li class="header-item">
        <span class="header-key">穴位名称: </span>
        <span v-if="xwInfo.alias" class="header-value">{{ xwInfo.alias }}（{{ xwInfo.name }}）</span>
        <span v-else class="header-value">{{ xwInfo.name }}</span>
      </li>
      <li class="header-item">
        <span class="header-key">所属经络: </span>
        <span class="header-value">{{ xwInfo.jlName }}</span>
      </li>
      <li class="header-item">
        <span class="header-key">国码: </span>
        <span class="header-value">{{ xwInfo.guojidaima }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InfoHeader',
  props: {
    xwInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  padding: 10px 20px;
  background-color: #fff;
  .header-img-box {
    width: 80px;
    .header-img {
      display: inline-block;
      width: 100%;
      height: auto;
    }
  }
  .header-main {
    flex: 1;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .header-item {
    .header-key {
      font-size: 14px;
      color: #666;
      display: inline-block;
      width: 70px;
    }
    .header-value {
      font-size: 14px;
      color: #333;
    }
  }
}
</style>