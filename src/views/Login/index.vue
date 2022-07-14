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
        name="账号"
        placeholder="请输入账号"
        :rules="[
          { required: true, pattern, message: '用户名格式为5-8的数字或字母' }
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, validator, message: '密码格式为5-12的数字或字母' }
        ]"
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
      password: '',
      token: '',
      pattern: /^[A-Za-z0-9]{5,8}$/
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    validator(val) {
      return /^[A-Za-z0-9]{5,12}$/.test(val)
    },
    async onSubmit() {
      try {
        const res = await login(this.username, this.password)
        console.log(res)
        if (res.data.status === 200) {
          this.token = res.data.body.token
          console.log(this.token)
          this.$toast({
            message: '登录成功',
            icon: 'passed',
            type: 'success',
            onClose: () => {
              this.$router.push('/home/profile')
            }
          })
        } else {
          this.$toast({
            message: res.data.description
          })
        }
      } catch (e) {
        this.$toast(e)
      }
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
.from {
  margin-top: 30px;
  .van-button--normal {
    font-size: 18px;
  }
  .van-cell {
    height: 60px;
    margin-bottom: 9px;
  }
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
