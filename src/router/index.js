import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import DoubleChoose from "@/views/DoubleChoose";
import Lecture from "@/views/Lecture";
import PositionList from "@/views/position/PositionList";
import Position from "@/views/position/Position";
import JobFairList from "@/views/jobFair/JobFairList";
import JobFair from '@/views/jobFair/JobFair';
import UnitInfo from "@/views/UnitInfo";

Vue.use(Router)  //Vue全局使用Router
export default new Router({
    routes: [              //配置路由，这里是个数组
        {                    //每一个链接都是一个对象
            path: '/',         //链接路径
            name: '首页',     //路由名称，
            component: PositionList   //对应的组件模板
        },
        {
            path: '/doubleChoose',
            name: '双选会',
            component: DoubleChoose
        },
        {
            path: '/lecture',
            name: '宣讲会',
            component: Lecture
        },
        {
            path: '/positions',
            name: '职位',
            component: PositionList
        },
        {
            name: "职位详情",
            path: '/positions/:id',
            component: Position
        },
        {
            path: '/jobFairs',
            name: '招聘会',
            component: JobFairList
        }, {
            name: "招聘会详情",
            path: '/jobFairs/:id',
            component: JobFair
        }, {
            name:"单位详情",
            path: '/units/:id',
            component: UnitInfo
        }, {
            path: '*',
            name:'匹配错误',
            redirect: '/'
        }
    ]
})
