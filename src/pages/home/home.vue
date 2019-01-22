<template>
  <div id="home">
      <div class="home">
        <el-row class="homeOne" :gutter="8">
            <el-col :span="5">
            <!-- 轮播图左 -->
                <p>
                    <i class="iconfont">&#xe694;</i>
                    <router-link to="/home">标的物类型</router-link>
                </p>
                <ul class="clearfix">
                    <li v-for="item in logoL" :key="item.id">
                        <router-link :to="item.path">{{item.names}}</router-link>
                    </li>
                </ul>
                <p>
                    <i class="iconfont">&#xe766;</i>
                    <router-link to="/home">标的物所在地</router-link>
                </p>
                <ul>
                    <li v-for="item in logoLb" :key="item.id">
                        <router-link :to="item.path">{{item.names}}</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="19" class="logoR">
                <!-- 轮播图左 -->
                <div class="fr">
                    <div class="logoRtop">
                        <!-- 上 -->
                        <dl class="fl" v-for="item in logoRtopT">
                            <dt :key="item.id">
                                <router-link :to="item.path">
                                    <i class="iconfont" v-html="item.icon"></i>
                                </router-link>
                            </dt>
                            <dd>
                                <router-link :to="item.path">{{item.names}}</router-link>
                            </dd>
                        </dl>
                    </div>
                    <div class="logoRbottm">
                        <!-- 下 -->
                        <router-link to="/home">
                            <span class="fl">帮助中心</span>
                            <span class="fr">
                                <u>更多</u>
                                <i class="iconfont">&#xe602;</i>
                            </span>
                        </router-link>
                        <div class="logoRban">
                            <router-link :to="item.path" v-for="item in logoRban" :key="item.id" :title="item.names">
                                <span>{{item.an}}</span>
                                <u>{{item.names}}</u>
                            </router-link>
                        </div>
                        <div class="logoRan0">
                            <router-link to="/home">
                                <i class="iconfont">&#xebd1;</i>
                                <span>模拟体验司法拍卖</span>
                            </router-link>
                            <p>
                                客服专线 400-822-2870
                            </p>
                        </div>
                    </div>
                </div>
                <div class="fr">
                    <!-- 轮播图 -->
                    <el-carousel height="368px">
                        <el-carousel-item arrow="always" v-for="item in logoCome" :key="item.id">
                            <router-link :to="item.path">
                                <img :src="item.url" alt=""/>
                            </router-link>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
        </el-row>
        <div class="homeTwo clearfix" v-if="offhomT">
            <!-- 竞拍流程 -->
            <el-row>
                <el-col :span="3" class="homeT_left">
                    <router-link class="fl" to="/home">竞拍流程</router-link>
                </el-col>
                <el-col :span="21" class="homeT_right">
                    <strong @click="offhomeTwo">
                        <i class="iconfont">&#xe633;</i>
                    </strong>
                    <ul>
                        <li v-for="(item,index) in homeT_right" :key="item.id">
                            <router-link :to="item.to">
                                <span>
                                    <u>
                                        <i class="iconfont" v-html="item.icon"></i>
                                    </u>
                                </span>
                                <span>
                                    <u>
                                        <b>{{item.num}}</b>
                                        <b>{{item.name}}</b>
                                    </u>
                                </span>
                                <span><i class="iconfont">&#xe602;</i></span>
                            </router-link>
                        </li>
                    </ul>

                </el-col>
            </el-row>
        </div>
      </div>
  </div>
</template>
<script>
import { logoL, logoLb, logoCome, logoRtopT, logoRban, homeT_right} from './home.js';//主页的数据
export default {
  name: 'home',
  data() {
    return {
        logoL,
        logoLb,
        logoCome,
        logoRtopT,
        logoRban,
        homeT_right,
        offhomT: true
    }
  },
    methods: {
        offhomeTwo() {
            this.offhomT = false;
        }
    }
}
</script>
<style lang="scss">
    #home {
        width: 100%;
        position: relative;
        .home {
            width: 1190px;
            margin:0 auto;
        }
    }
    .homeOne {
        width: 1190px;
        height: 370px;
        margin: 20px 0 0 0 !important;
        // background: #ccc;
        .el-col-5 {
            height:100%;
            border: 2px solid #ce2023;
            padding: 14px 0 0 18px !important;
            p > a {
                font-weight: 570;
            }
            p > i {
                color: #ce2023;
            }
            p a:hover {
                color: #ce2023;
            }
            & ul:nth-child(2) li{
                float: left;
                width: 25%;
                height: 28px;
                line-height: 28px;
                a {
                    color: #333333;
                    font-size: 12px;
                }
                & a:hover {
                    color: #fff;
                    background: #ce2023;
                }
            }
        }
    }
    .homeOne .el-col-5 ul li:nth-child(2) a,.homeOne .el-col-5 ul li:nth-child(1) a{
        color: #ce2023;
    }
    .homeOne .el-col-5 ul:nth-child(4) {
        & > li:nth-child(4) a ,& > li:nth-child(6) a,& > li:nth-child(9) a {
            color: #ce2023;
        }
        li {
            float: left;
            height: 28px;
            line-height: 28px;
            width: 25%;
            & a:hover {
                color: #fff;
                background: #ce2023;
            }
        }
    } 
    .logoR > div:nth-child(2) {
        width: 660px;
        background: #eee;
        box-sizing: border-box;
        border: 1px solid #dfdfdf;
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
                width: 658px;
                height: 368px;
            }
        }
    }
    .logoR {
        padding: 0 !important;
    }
    .logoR > div:nth-child(1) {
        width: 270px;
        height: 370px;
        background: #f7f7f7;
        box-sizing: border-box;
        border: 1px solid #dfdfdf;
    }
    .logoRtop {
        width: 100%;
        height: 124px;
        border: 1px solid #dfdfdf;
        background: #f7f7f7;
        dl {
            height: 124px;
            width: 33%;
            text-align: center;
            dt {
                height: 74px;
                line-height: 100px;
                a {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    border-radius: 24px;
                    border: 2px solid #bcbcbd;
                    background: #fff;
                    text-align: center;
                    line-height: 45px;
                    color: #cd0000;
                    i {
                        font-size: 26px;
                        font-weight: 580;
                    }
                }
            }
            dd {
                margin-top: 10px;
                a {
                    font-weight: 580;
                }
            }
        }
    }
    .logoRtop dl a:hover {
        color: #c31f3a;
        border-color: #c31f3a;
    }
    .logoRbottm {
        height: auto;
        box-sizing: border-box;
        padding-left: 20px;
        padding-top: 16px;
        & > a:first-child {
            display: inline-block;
            width: 100%;
            height: 18px;
            line-height: 18px;
            font-weight: 580;
            & span:last-child {
                margin-right: 15px;
            }
        }
        & a:hover {
            color: #c31f3a;
        }
    }
    .logoRban a {
        display: inline-block;
        width: 120px;
        height: 20px;
        margin-bottom: 15px;
        font-size: 12px;
        color: #777777;
        span {
            display: inline-block;
            width: 36px;
            height: 20px;
            line-height: 18px;
            float: left;
            box-sizing: border-box;
            border: 1px solid #666666;
            border-radius: 3px;
            text-align: center;
        }
        u {
            display: inline-block;
            width: 84px;
            height: 100%;
            float: left;
            text-indent: 4px;
            background: #f7f7f7;
            color: #777777;
        }

    }
    .logoRbottm .logoRban a:hover {
        color: #fff;
        background: #c31f3a;
        text-decoration: underline;
    }
    .logoRban {
        padding-top: 10px;
    }
    .logoRan0 {
        height: auto;
        a {
            display: inline-block;
            width: 122px;
            height: 14px;
            line-height: 14px;
            border: 1px solid #c31f3a;
            border-radius: 4px;
            font-size: 12px;
            margin:0 auto;
            padding: 8px 44px;
            i {
                font-size: 14px;
                margin-right: 8px;
            }
        }
    }
    .logoRan0 a:hover {
        background: #c31f3a;
        color: #fff;
    }
    .logoRan0 p {
        width: 225px;
        height: 38px;
        line-height: 38px;
        text-align: center;
    }
    // 竞拍流程
    .homeTwo {
        width: 1188px;
        height: 80px;
        border: 1px solid #e3e3e3;
        .homeT_left a:first-child {
            display:block;
            font-size: 18px;
            color: #000;
            font-weight: 600;
            height:50px;
            letter-spacing: 5px;
            padding: 15px 49px;
            background: #f2f2f2;
        }
    }
    .homeTwo .homeT_right ul {
        width: 100%;
        height: 80px;
        position: relative;
        li {
            float: left;
            width: 16.66%;
            height: 100%;
        }
    }
    .homeT_right ul li a {
        display: block;
        height: 100%;
        span {
            float: left;
            display: inline-block;
            height: 100%;
            text-align: center;
        }
    }
    .homeT_right ul li a span:first-child {
        width: 35%;
        line-height: 80px;
        text-align: right;
        u {
            display: inline-block;
            width: 40px;
            height: 40px;
            text-align: center;
            background: #f2f2f2;
            line-height: 40px;
            border-radius: 20px 0 20px 20px;
            i {
                color: #666;
                font-size: 20px;
            }
        }
    }
    .homeT_right ul li a span:nth-child(2) {
        width: 50%;
        text-align: left;
        line-height: 94px;
        u {
            display: inline-block;
            height: 40px;
            text-align: left;
            b {
                display: block;
                line-height: 20px;
                text-indent: 12px;
            }
        }
    }
    .homeT_right ul li a span:nth-child(3) {
        width: 15%;
        line-height: 80px;
        text-align: center;
        i {
            font-size: 34px;
            font-weight: 700;
            color: #d7d7d7;
        }
    }
    .homeT_right li a:hover {
        color: #c31f3a;
        & span:first-child u{
            background: #c31f3a;
            i {
                color: #fff;
            }
        }
    }
    .homeT_right strong {
        display: block;
        position: absolute;
        right: 4px;
        top: 4px;
        z-index: 20;
        background: #eee;
        width: 14px;
        height: 14px;
        text-align: center;
        line-height: 14px;
        i {
            color: #707670;
            font-size: 12px;
        }
    }
    .homeT_right strong i:hover {
        color: #c31f3a;
        cursor: pointer;
    }
</style>
