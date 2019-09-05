<template>
    <div class="container">
        <div class="myBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>单位信息</el-breadcrumb-item>
                <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="baseInfo">
            <div class="logo">
                <img width="80px" src="../static/company-logo.png" alt="">
            </div>
            <div class="info">
                <div class="name">{{unitInfo.name}}</div>
                <div class="city">{{unitInfo.city}}</div>
                <div class="type">{{unitInfo.type}}</div>
                <div class="scale">{{unitInfo.scale}}</div>
                <div class="industry">{{unitInfo.industry}}</div>
            </div>
            <div class="nums">
                <div class="need">
                    在招职位: <span class="c-importtant">{{positions.length}}</span>
                </div>
                <div>
                    分享至
                </div>
            </div>
        </div>
        <div class="left">
            <div class="introOut">
                <h3>单位简介:</h3>
                <div class="introduction" v-html="unitInfo.introduction"></div>
            </div>

            <div class="positions">
                <h3>在招职位</h3>
                <PositionListShow :positions="completeJobInfo" :showLogo="false"></PositionListShow>
            </div>
        </div>
        <div class="right">
            <div class="contact">
                <div class="oveflow">
                    <div class="floatLeft"><i class="el-icon-s-custom"></i> 联系方式</div>
                </div>
                <div>
                    <div class="item">
                        <label class="label">联系人</label><span>{{unitInfo.contact.name}}</span>
                    </div>
                    <div class="item">
                        <label class="label">手机</label><span>{{unitInfo.contact.phone}}</span>
                    </div>
                    <div class="item">
                        <label class="label">电话</label><span>{{unitInfo.contact.tel}}</span>
                    </div>
                    <div class="item">
                        <label class="label">邮箱</label><span>{{unitInfo.contact.email}}</span>
                    </div>
                    <div class="item" v-if="unitInfo.contact.intelnet!=''">
                        <label class="label">网址</label>
                        <span><a :href="'http://'+unitInfo.contact.intelnet">{{unitInfo.contact.intelnet}}</a></span>
                    </div>
                    <div class="item">
                        <label class="label">地址</label><span>{{unitInfo.contact.address}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getUnitAllPosition
    } from '@/datas/positionInfoData'
    import {
        getUnitInfo
    } from '@/datas/unitInfoData'
    import PositionListShow from "@/components/PositionListShow";

    export default {
        name: "UnitInfo",
        components: {PositionListShow},
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.unitInfo = getUnitInfo(this.$route.params.id)
                this.positions = getUnitAllPosition(this.$route.params.id)
            }
        },
        data() {
            return {
                unitInfo: null,
                positions: null
            }
        },
        computed: {
            completeJobInfo() {
                let result = this.positions.map(item => {
                    item.logo = this.unitInfo.logo;
                    item.unitName = this.unitInfo.name;
                    item.unitType = this.unitInfo.type;
                    item.unitScale = this.unitInfo.scale;
                    return item
                });
                return result;
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .item{
        position: relative;
        margin-top: 10px;
    }


    .label{
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
        position: absolute;
        left: 0;
        top: 0;
        color: #999;
    }
    .item span{
        min-height: 20px;
        line-height: 20px;
        display: block;
        color: #737373;
        margin-left: 80px;
    }

    .container {
        width: 1200px;
        margin: 5px auto;
        padding: 10px;
        overflow: hidden;

        .myBreadcrumb {
            background: white;
            padding: 10px;
        }
        .baseInfo {
            margin-top: 10px;
            background: white;
            padding: 10px;
            overflow: auto;

            .logo {
                float: left;
                margin-right: 20px;
            }
            .info {
                float: left;
                line-height: 40px;

                div {
                    margin-right: 10px;
                }

                .name {
                    font-size: larger;
                }
                .city, .type, .scale, .industry {
                    display: inline-block;
                }
            }

            .nums {
                float: right;
                line-height: 40px;
            }

        }
    }

    .left {
        background: white;
        margin-top: 10px;
        padding: 10px;
        float: left;
        width: 900px;
    }
    .right{
        overflow: hidden;
        width: 280px;

        .contact{
            margin: 10px;
            margin-right: 0;
            padding: 10px;

            background: white;
        }
    }

</style>