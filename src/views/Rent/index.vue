<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      title="收藏列表"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
      </van-card>
    </div>
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

<style></style>
