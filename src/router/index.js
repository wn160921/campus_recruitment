import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import DoubleChoose from "@/views/DoubleChoose";
import Lecture from "@/views/Lecture";
import PositionList from "@/views/position/PositionList";
import Position from "@/views/position/Position";
import JobFairs from "@/views/JobFairs";
Vue.use(Router)  //Vue全局使用Router
export default new Router({
    routes: [              //配置路由，这里是个数组
        {                    //每一个链接都是一个对象
            path: '/',         //链接路径
            name: 'positions',     //路由名称，
            component: PositionList   //对应的组件模板
        },
        {
            path: '/doubleChoose',
            name: 'doubleChoose',
            component: DoubleChoose
        },
        {
            path: '/lecture',
            name: 'lecture',
            component: Lecture
        },
        {
            path: '/positions',
            name: 'position',
            component: PositionList
        },
        {
            path: '/positions/:id',
            component: Position
        },
        {
            path: '/jobFairs',
            name: 'jobFairs',
            component: JobFairs
        }
    ]
})
