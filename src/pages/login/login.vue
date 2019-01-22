<template>
    <div id="login">
        <div class="logione">
            <div>
                <el-row>
                    <el-col :span="4">
                        <router-link to="/home">
                            <span>淘宝网</span>
                            <span>Taobao.com</span>
                        </router-link>
                    </el-col>
                    <el-col :span="20">
                        <p>为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</p>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 中间 -->
        <div class="logintwo">
            <div>
                <div class="loginR">
                    <!-- 右上方切换 -->
                    <div class="one" @click.stop="isloginTR">
                        <div class="one1 iconfont" v-if="loginTR">&#xe6d3;</div>
                        <div class="one1 iconfont" v-else>&#xe74f;</div>
                        <div class="one2"></div>
                    </div>
                    <div v-if="loginTR" class="loginR_no1">
                        <p>
                            手机扫码, 安全登录
                        </p>
                        <div>
                            <img src="../../../static/logo/2ww.png" alt="">
                        </div>
                        <el-row class="no_1">
                            <el-col :span="4" :offset="4">
                                <i class="iconfont">&#xe74f;</i>
                            </el-col>
                            <el-col :span="13">
                                <!-- 二维码下方 -->
                                <p>
                                    <span>打开</span>
                                    <router-link to="/home">手机淘宝</router-link>
                                    <router-link to="/home">手机天猫</router-link>
                                </p>
                                <p>
                                    <span>扫一扫登录</span>
                                </p>
                            </el-col>
                        </el-row>
                    </div>
                    <!-- 密码登录 -->
                    <div v-else class="loginR_no2">
                        <p>
                            密码登录
                        </p>
                        <el-form ref="form" :model="form">
                            <el-form-item>
                                <el-input placeholder="请输入用户名" v-model="form.name" clearable>
                                    <template slot="prepend"><i class="iconfont">&#xe62e;</i></template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="请输入密码" v-model="form.password" clearable>
                                    <template slot="prepend"><i class="iconfont">&#xe61f;</i></template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="success" class="subm">提  交</el-button>
                            </el-form-item>
                        </el-form>


                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div class="loginbum"></div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            loginTR: true,
            form: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            window.open('https://login.taobao.com');
        },
        isloginTR() {
            this.loginTR = !this.loginTR;
        }
    }
}
</script>
<style lang="scss">
    .logione {
        height: 88px;
        background: #fff;
        & > div {
            width: 1200px;
            height: 100%;
            margin:0 auto;
            a {
                display: inline-block;
                span {
                    display: block;
                    color: #ff4400;
                    font-family: 'KaiTi';
                    font-weight: 700;
                }
                & > span:nth-child(1) {
                    font-size: 30px;
                    height: 25px;
                    line-height: 25px;
                    letter-spacing: -3px;
                }
                & > span:nth-child(2) {
                    font-size: 14px;
                    height: 20px;
                    line-height: 9px;
                    letter-spacing: 1px;
                }
            }
        }
    }
    .logione .el-row, .logione .el-col {
        height: 100%;
    }
    .logione .el-col {
        line-height: 88px;
    }
    .logione .el-col-4 {
        line-height: 110px;
    }
    .logione .el-col-20 p {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        width: 900px;
        background: #fef2f2;
        border: 1px solid #ffb4a8;
        text-align: center;
        font-size: 12px;    
    }
    // 中间
    .logintwo {
        width: 100%;
        height: 600px;
        overflow: hidden;
        background:#bf383f url('../../../static/logo/loginbg.jpg') no-repeat center;
        & > div {
            width: 1200px;
            height: 100%;
            margin:0 auto;
            position: relative;
        }
    }
    .loginR {
        width: 350px;
        height: 350px;
        background: #f9eced;
        position: absolute;
        top: 120px;
        right: 50px;
        z-index: 10;
    }
    .loginR .one {
        width: 42px;
        height: 42px;
        margin: 10px 5px 0 0;
        position: absolute;
        cursor: pointer;
        top: 0px;
        right: 0px;
        z-index: 30;
        .one1 {
            font-size: 40px;
            color: #ff4400;
            font-weight: 580;
            text-align: center;
            line-height: 42px;
        }
        .one2 {
            width: 0px;
            position: absolute;
            left: 0;
            bottom: 0;
            border: 32px solid #fff;
            border-bottom: none;
            border-right: none;
            border-left-color: #fff;
            border-top-color: transparent;


        }
    }
    .loginR_no1 ,.loginR_no2 {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        width: 300px;
        height: 300px;
        padding: 25px;
    }
    .loginR_no1 > p {
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        font-weight: 600;
    }
    .loginR_no1 > div:nth-child(2) {
        text-align: center;
        margin: 16px 0px;
    }
    .no_1 .el-col-4 {
        height: 45px;
        line-height: 45px;
        text-align: center;
        i {
            font-size: 40px;
            color: #ff5248;
        }
    }
    .no_1 .el-col-13 p:first-child a {
        color: #ff5248;
    }
    .no_1 .el-col-13 p:first-child a:nth-child(2) {
        border-right: 1px solid #f9bc8c;
        padding-right: 4px;
    }
    // 密码登录
    .loginR_no2 > p {
        font-size: 18px;
        font-weight: 580;
        margin-top: 8px;
        margin-bottom: 22px;
    }
    .subm {
        width: 100%;
        background-color: #ff4400;
        border-color: #ff4400;
        span {
            font-weight: 580;
            font-size: 16px;
        }
    }
    .subm:hover {
        background: #ee4204;
    }
</style>

