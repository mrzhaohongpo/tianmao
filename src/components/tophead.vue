<template>
  <div>
    <div class="topbackground">
      <el-row class="topone" type="flex" justify="space-between">
        <el-col :span="5">
          <el-button type="text" @click="login">亲,  请登录</el-button>
          <el-button type="text">免费注册</el-button>
          <el-button type="text">手机逛淘宝</el-button>
        </el-col>
        <el-col :span="14">
            <ul class="topone_ulr">
              <li><router-link to="#">淘宝网首页</router-link></li>
              <li>
                  <router-link to="#">我的淘宝</router-link>
                  <i class="el-icon-arrow-down"></i>
              </li>
              <li>
                  <u class="iconfont">&#xe750;</u>
                  <router-link to="#">购物车</router-link>
                  <i class="el-icon-arrow-down"></i>
              </li>
              <li>
                  <u class="iconfont">&#xe6c3;</u>
                  <router-link to="#">收藏夹</router-link>
                  <i class="el-icon-arrow-down"></i>
              </li>
              <li>
                  <router-link to="#">商品分类</router-link>
              </li>
              <li>
                  <router-link to="#">卖家中心</router-link>
                  <i class="el-icon-arrow-down"></i>
              </li>
              <li>
                  <router-link to="#">联系客服</router-link>
                  <i class="el-icon-arrow-down"></i>
              </li>
              <li>
                  <u class="iconfont">&#xebb8;</u>
                  <router-link to="#">网站导航</router-link>
                  <i class="el-icon-arrow-down"></i>
              </li>
            </ul>
        </el-col>
      </el-row>
    </div>
    <div class="topbglogo">
        <div class="topbgtwo">
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <ul class="topbgtwo_ull">
                        <li>
                            <i class="iconfont">&#xe66e;</i>
                            <router-link to="#">司法拍卖</router-link>
                        </li>
                        <li><router-link to="#">资产交易</router-link></li>
                        <li><router-link to="#">珍品拍卖</router-link></li>
                        <li style="border-right: none;"><router-link to="#">拍卖服务</router-link></li>
                    </ul>
                </el-col>
                <el-col :span="12">
                    <ul class="topbgtwo_ulr">
                        <li>
                            <i class="iconfont">&#xe6b8;</i>
                            <router-link to="#">我的拍卖</router-link>
                        </li>
                        <li>
                            <router-link to="#">官方客服</router-link>
                        </li>
                        <li>
                            <i class="iconfont">&#xe752;</i>
                            <router-link to="#">400-822-2870</router-link>
                        </li>
                    </ul>
                </el-col>
            </el-row>
            <img src="../assets/logo11.png" alt=""/>
        </div>
    </div>
    <div class="navmax">
        <div class="nav">
            <ul class="navl">
                <li v-for="item in navs" :key="item.id">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
            <el-input placeholder="请输入内容查询" size="small" class="navr" style="width: 270px;">
                <template slot="prepend"><i class="iconfont">&#xe74b;</i></template>
                <template slot="append">搜索</template>
            </el-input>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'tophead',
    data () {
        return {
            navs: [
                {path: '/home', name: '首页', id: '1'},
                {path: '/court', name: '法院', id: '2'},
                {path: '/affiche', name: '公告', id: '3'},
                {path: '/beforehand', name: '预告', id: '4'},
                {path: '/gobroke', name: '破产', id: '5'},
                {path: '/leak', name: '捡漏', id: '6'}
            ]
        }
    },
    methods: {
        login() {
            this.$router.push({path: '/login'});
        }
    },
    // watch: {
    //     $route(to, form) {
    //         console.log(this.$route.matched);
    //     }
    // }
}
</script>
<style lang="scss">
  .topbackground {
      width: 100%;
      height:36px;
      background: #f5f5f5;
      .el-row {
        height: 36px;
      }
      .topone {
        width: 1190px;
        margin:0 auto;
        button {
          color: #6c6c6c;
          height: 36px;
          padding: 0;
        }
      }
    }
    .topone .el-col button:first-child {
      color: #f22e00;
    }
    .topone_ulr {
        height: 100%;
        width: 620px;
        float: right;
        li {
            float: left;
            padding: 0 6px;
            height: 100%;
            line-height: 36px;
            a , i, u{
              font-size: 12px;
            }
            & a:hover {
                color: red;
            }
            u {
              color: red;
            }
        }
    }
    // 第2行---------
    .topbglogo {
      height: 132px;
      background: #d2284b;
      .topbgtwo {
        height: 122px;
        width: 1190px;
        margin:0 auto;
        padding-top: 10px;
        .topbgtwo_ull li{
            float: left;
            padding: 0 14px;
            height: 16px;
            line-height: 16px;
            border-right: 1px solid #f5f5f5;
            a {
              color: #e8c5ca;
              font-size: 14px;
            }
        }
      }
      .topbgtwo ul li:first-child {
          color: #fff;
          padding-left: 0px;
          a {
            color: #fff;
          }
          i {
            font-size: 14px;
          }
      }
    }
    .topbgtwo .topbgtwo_ulr {
        width: 268px;
        height: 100%;
        float: right;
        li {
            border-right: none;
            float: left;
            color: #fff;
            a {
              color: #e8c5ca;
            }
            i {
              font-size: 14px;
            }
        }
        & li:first-child{
          padding-right: 14px;
        }

    }
    .topbgtwo img{
        height: 56px;
        margin-left: 31%;
    }
    // 第3行 --------------------------
    .navmax {
        height: 40px;
        border: 1px solid #979797;
        background: #f7f7f7;
        .nav {
            width: 1190px;
            margin:0 auto;
            .navl {
                float: left;
                height: 100%;
                li {
                    float: left;
                    height: 100%;
                    width: 86px;
                    line-height: 40px;
                    margin-right: 4px;
                    a {
                        margin-top: 6px;
                        display: inline-block;
                        height: 28px;
                        line-height: 28px;
                        width: 100%;
                        text-align: center;
                        font-weight: 570;
                        color: #4a4a4a;
                    }
                    & a:hover {
                        background: #c21f3a;
                        color: #fff;
                        border-radius: 14px;
                    }
                    .router-link-active {
                        background: #c21f3a;
                        color: #fff;
                        border-radius: 14px;
                    }
                }
            }
            .navr {
                float: right;
                margin-top: 4px;
                .el-input-group__prepend {
                    border-radius: 15px 0 0 15px;
                    background: #fff;
                    padding:0 10px;
                    border-right: 0;
                }
                input {
                    border-left: 0px;
                    padding:0;
                }
                .el-input-group__append {
                    border-radius:0 15px 15px 0;
                    background: #c21f3a;
                    color: #fff;
                }
            }
        }
    }


</style>
