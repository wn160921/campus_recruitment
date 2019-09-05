<template>
    <div class="container">
        <div class="myBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/positions' }">职位</el-breadcrumb-item>
                <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="left">
            <div class="baseInfo">
                <div>
                    <div class="positionName">{{positionInfo.name}}</div>
                    <div class="money">{{positionInfo.money}}</div>
                    <el-button type="warning" icon="el-icon-star-off" size="mini" plain>申请职位</el-button>
                    <el-button type="warning" size="mini">收藏职位</el-button>
                </div>
                <div>
                    <div class="publishTime">{{positionInfo.publishTime}} 发布</div>
                    <div class="scanNum">浏览次数: {{positionInfo.scanNum}}</div>
                    <div class="share" style="width:100px">
                        <div>分享至:</div>
                    </div>
                </div>
            </div>
            <div class="detailInfo">
                <div>
                    <h3>职位要求:</h3>
                    <ul class="positionRequire">
                        <li><span class="grayColor">工作城市: </span>{{positionInfo.require.city}}</li>
                        <li><span class="grayColor">招聘人数: </span>{{positionInfo.require.num}}</li>
                        <li><span class="grayColor">职位性质: </span>{{positionInfo.require.type}}</li>
                        <li><span class="grayColor">学历要求: </span>{{positionInfo.require.education}}</li>
                        <li><span class="grayColor">工作经验: </span>{{positionInfo.require.experience}}</li>
                        <li><span class="grayColor">语言能力: </span>{{positionInfo.require.language}}</li>
                        <li><span class="grayColor">需求专业: </span>{{positionInfo.require.major}}</li>
                        <li><span class="grayColor">职能类别: </span>{{positionInfo.require.ptype}}</li>
                    </ul>
                </div>
                <div>
                    <h3>职位描述</h3>
                    <div class="description" v-html="positionInfo.description"></div>
                </div>
                <div>
                    <h3>单位简介:</h3>
                    <div class="introduction" v-html="unitInfo.introduction"></div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="unitInfo">
                <div class="logo">
                    <img width="100px" src="../../static/company-logo.png" alt="">
                </div>
                <div class="name">{{unitInfo.name}}</div>
                <div class="industry"><span class="grayColor">单位行业: </span>{{unitInfo.industry}}</div>
                <div class="type"><span class="grayColor">单位性质: </span>{{unitInfo.type}}</div>
                <div class="scale"><span class="grayColor">单位规模: </span>{{unitInfo.scale}}</div>
                <div class="homePage"><span class="grayColor">单位网址: </span><a :href="'http://'+unitInfo.homePage">{{unitInfo.homePage}}</a>
                </div>
            </div>
            <div class="moreInfo">
                <div class="title">
                    <i class="el-icon-s-cooperation"></i>公司其他职位
                </div>
                <ul class="positions">
                    <li v-for="p in morePositions" :key="p.id">
                        <div class="name canClick" @click="goPositionInfo(p.id)">{{p.name}}</div>
                        <div class="money">{{p.money}}</div>
                        <div class="city">{{p.require.city}}</div>
                        <div class="type">{{p.require.type}}</div>
                        <div class="education">{{p.require.education}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getPositionInfo,
        getMorePositionInfo
    } from '@/datas/positionInfoData'
    import {
        getUnitInfo
    } from '@/datas/unitInfoData'

    export default {
        name: "Position",
        created() {
            //职位id
            let id = this.$route.params.id;
            this.fetchData(id);
        },
        methods: {
            fetchData(id) {
                this.positionInfo = getPositionInfo(id);
                this.unitInfo = getUnitInfo(this.positionInfo.unitId);
                this.morePositions = getMorePositionInfo(id, this.positionInfo.unitId)
            },
            goPositionInfo(id) {
                this.fetchData(id);
            }
        },
        data() {
            return {
                positionInfo: null,
                unitInfo: null,
                morePositions: null
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 1200px;
        margin: 10px auto;
        padding: 10px;
    }

    .myBreadcrumb {
        background: white;
        padding: 10px;
        margin-top: 10px;
    }

    .left {
        float: left;
        width: 900px;
        margin-top: 10px;
    }

    .right {
        width: 280px;
        margin-top: 10px;
        float: left;
    }

    .left .baseInfo {
        margin-bottom: 10px;
        padding: 10px;
        background: white;
    }

    .left .baseInfo .positionName {
        display: inline-block;
        width: 400px;
        font-size: large;
    }

    .left .baseInfo .money {
        display: inline-block;
        width: 280px;
        color: #f26222;
    }

    .left .baseInfo .publishTime {
        display: inline-block;
        font-size: small;
        margin-right: 10px;
    }

    .left .baseInfo .scanNum {
        display: inline-block;
        font-size: small;
    }

    .left .baseInfo .share {

        margin-left: 20px;
        float: right;
    }

    .left .detailInfo {
        background: white;
        padding: 10px;
    }


    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    .left .detailInfo .positionRequire {
        overflow: hidden;
    }

    .left .detailInfo .positionRequire li {
        float: left;
        width: 400px;
    }

    .left .detailInfo .description {
        font-size: 14px;
    }

    .left .detailInfo .introduction {
        font-size: 14px;
    }


    .right .unitInfo {
        background: white;
        margin-left: 10px;
        padding: 10px;
        overflow: auto;
    }

    .right .moreInfo {
        margin-left: 10px;
        margin-top: 10px;
    }

    .right .moreInfo .title {
        margin-bottom: 2px;
        background: white;
        padding: 10px;
    }

    .right .moreInfo .positions {
        background: white;
        padding: 10px;
        overflow: auto;
    }

    .right .moreInfo .positions li {
        float: left;
        margin-bottom: 10px;
    }

    .right .moreInfo .positions li div {
        display: inline-block;
        padding-right: 10px;
    }

    .right .moreInfo .positions li .money {
        color: #f26222;
    }

    .right .unitInfo .logo {
        width: 100px;
        margin: 0 auto;
    }

    .right .unitInfo .name {
        text-align: center;
    }


</style>