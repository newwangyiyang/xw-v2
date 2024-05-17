<template functional>
  <div class="page-box">
    <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt="" />
    <p class="tips">啊哦！你所访问的页面不存在</p>
    <van-button to="/" class="btn" size="small" type="info">返回首页</van-button>
  </div>
</template>
<style lang="scss" scoped>
.page-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  img {
    width: 300px;
    display: inline-block;
  }
  .tips {
    font-size: 14px;
    color: #999;
    margin-top: 20px;
  }
  .btn {
    width: 185px;
    margin: 0 auto;
    margin-top: 20px;
    display: inline-block;
  }
}
</style>