import Vue from 'vue'
import Router from 'vue-router'
import Heads from '@/components/heads.vue'; //公共组件/或菜单
import Login from '@/pages/login/login.vue';
//主标签切换
import Home from '../pages/home/home.vue';
import Affiche from '../pages/affiche/affiche';
import Beforehand from '../pages/beforehand/beforehand';
import Court from '../pages/court/court';
import Gobroke from '../pages/gobroke/gobroke';
import Leak from '../pages/leak/leak';


Vue.use(Router)

let route = new Router({
    mode: "history",
    routes: [{
            path: '/',
            redirect: '/home', //重定向
            component: Heads,
            name: 'origin',
            meta: 'origin',
            children: [{
                    path: '/home',
                    name: 'home',
                    meta: '首页',
                    component: Home
                },
                {
                    path: '/affiche',
                    name: 'affiche',
                    meta: '公告',
                    component: Affiche
                },
                {
                    path: '/beforehand',
                    name: 'beforehand',
                    meta: '预告',
                    component: Beforehand
                },
                {
                    path: '/court',
                    name: 'court',
                    meta: '法院',
                    component: Court
                },
                {
                    path: '/gobroke',
                    name: 'gobroke',
                    meta: '破产',
                    component: Gobroke
                },
                {
                    path: '/leak',
                    name: 'leak',
                    meta: '捡漏',
                    component: Leak
                },

            ]
        },
        {
            path: '/login',
            name: 'login',
            meta: '登录',
            component: Login
        }
    ]
});
route.beforeEach((to, form, next) => {
    console.log(to);
    console.log(form);
    setTimeout(() => {
        next();
    }, 100);
})



export default route;