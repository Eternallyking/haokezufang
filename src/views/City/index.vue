<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  :deep(.van-nav-bar__title) {
    font-size: 18px;
  }
  :deep(.van-nav-bar__content) {
    height: 45px;
    background-color: #21b97a;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
}
</style>
