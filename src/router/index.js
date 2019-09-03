import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import DoubleChoose from "@/views/DoubleChoose";
import Lecture from "@/views/Lecture";
import Position from "@/views/Position";
import JobFairs from "@/views/JobFairs";
Vue.use(Router)  //Vue全局使用Router
export default new Router({
    routes: [              //配置路由，这里是个数组
        {                    //每一个链接都是一个对象
            path: '/',         //链接路径
            name: 'position',     //路由名称，
            component: Position   //对应的组件模板
        },
        {
            path: '/doubleChoose',
            name: 'doubleChoose',     //路由名称，
            component: DoubleChoose   //对应的组件模板
        },
        {
            path: '/lecture',
            name: 'lecture',     //路由名称，
            component: Lecture   //对应的组件模板
        },
        {
            path: '/position',
            name: 'position',     //路由名称，
            component: Position   //对应的组件模板
        },
        {
            path: '/jobFairs',
            name: 'jobFairs',
            component: JobFairs
        }
    ]
})
