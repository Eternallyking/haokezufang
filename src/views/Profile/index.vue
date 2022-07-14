<template>
  <div>
    <div class="nav-profile">
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <div class="go-login">
        <div class="avatar">
          <van-image
            class="my-avatar"
            round
            width="1.6rem"
            height="1.6rem"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <div class="gologin">
          <div class="gologin-text">游客</div>
          <van-button type="primary" class="button-go-avatar" @click="gologinfn"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <div class="my-main">
      <div class="layout">
        <van-button class="btn">
          <div class="a-layout">
            <i class="iconfont icon-shoucang"></i>
            <p>我的收藏</p>
          </div>
        </van-button>
        <van-button class="btn">
          <div class="a-layout">
            <i class="iconfont icon-chuzuwu"></i>
            <p>我的出租</p>
          </div>
        </van-button>
        <van-button class="btn">
          <div class="a-layout">
            <i class="iconfont icon-lishijilu_huaban"></i>
            <p>看房记录</p>
          </div>
        </van-button>
      </div>
      <div class="layout">
        <van-button class="btn">
          <div class="a-layout">
            <i class="iconfont icon-yinhangqia"></i>
            <p>我的收藏</p>
          </div>
        </van-button>
        <van-button class="btn">
          <div class="a-layout">
            <i class="iconfont icon-gerenziliao"></i>
            <p>我的收藏</p>
          </div>
        </van-button>
        <van-button class="btn">
          <div class="a-layout">
            <i class="iconfont icon-kefu"></i>
            <p>我的收藏</p>
          </div>
        </van-button>
      </div>
    </div>
    <div class="my-floor">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gologinfn() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped lang="less">
.nav-profile {
  position: relative;
  height: 300px;
  img {
    width: 100%;
  }
  .go-login {
    background-color: #fff;
    width: 85%;
    height: 55%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    box-shadow: 0 0 10px 3px #ddd;
    font-size: 13px;
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 1px solid #f5f5f5;
      box-shadow: 0 2px 2px #bdbdbd;
      display: flex;
      position: relative;
      transform: translateY(-50%);
      margin: auto;
      background-color: #f5f5f5;
      .my-avatar {
        margin: auto;
      }
    }
    .gologin {
      :deep(.gologin-text) {
        margin-top: -18px;
        margin-bottom: 18px;
      }
      .button-go-avatar {
        background-color: #21b97a;
        border-radius: 5px;
        height: 30px;
        font-size: 13px;
      }
    }
  }
}

.my-main {
  width: 100%;
  .layout {
    display: flex;
    justify-content: space-around;
    text-align: center;
    .btn {
      background-color: transparent;
      padding: 15px 0;
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      color: #333;
      .a-layout {
        .iconfont {
          font-size: 20px;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }
}
.my-floor {
  width: 92%;
  margin: auto;
  img {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
