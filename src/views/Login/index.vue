<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit" class="from" validate-trigger="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="enroll">
      <a href="#/registe">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
// import { Toast } from 'vant'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async onSubmit() {
      const res = await login(this.username, this.password)
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
}
.from {
  .van-button--info {
    background-color: #21b97a;
    border: 0.02667rem solid #21b97a;
    border-radius: 2px;
  }
}
.enroll {
  margin-top: 30px;
  text-align: center;
  a {
    color: #666;
    font-size: 14px;
  }
}
</style>
