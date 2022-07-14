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
import { favorites } from '@/api/user'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async fn() {
      console.log(this)
      const res = await favorites()
      console.log(res)
    }
  },
  created() {
    this.fn()
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  :deep(.van-nav-bar__title) {
    font-size: 18px;
  }
  :deep(.van-nav-bar__content) {
    height: 50px;
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
