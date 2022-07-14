<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #title>
        <van-search
          class="list-input"
          v-model="value"
          label="北京"
          placeholder="请输入小区或地址"
          @search="onSearch"
        >
          <template #label>
            <span
              >北京
              <van-icon name="arrow-down" @click="citylistfn" />
            </span>
          </template>
        </van-search>
      </template>
      <template #right> <i class="iconfont icon-dituzhaofang"></i></template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    citylistfn() {
      this.$router.push({
        path: '/city'
      })
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
    height: 50px;
    background-color: #21b97a;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
  .van-search__content {
    background-color: transparent;
  }
  :deep(.van-nav-bar__title) {
    max-width: 80%;
  }
  .list-input {
    height: 34px;
    border-radius: 3px;
    .van-search__content {
      padding: 0;
    }
    :deep(.van-icon-search) {
      color: #9c9fa1;
      border-left: solid 1px #e5e5e5;
      height: 22px;
      padding-left: 10px;
      margin-left: 10px;
    }
    ::placeholder {
      font-size: 13px;
      color: #9c9fa1;
    }
    :deep(.van-icon-arrow-down) {
      color: #7f7f80;
    }
  }
  .icon-dituzhaofang {
    color: #fff;
  }
}
</style>
