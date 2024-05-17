<template>
  <div class="info-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'InfoTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.info-title {
  font-size: 16px;
  color: #333;
  line-height: 30px;
}
</style>