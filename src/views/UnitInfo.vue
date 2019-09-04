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
                <img width="100px" src="../../static/company-logo.png" alt="">
            </div>
            <div class="info">
                <div class="name"></div>
                <div class="city"></div>
                <div class="type"></div>
                <div class="scale"></div>
                <div class="industry"></div>
            </div>
            <div class="nums">
                <div class="need"></div>
                <div>
                    分享至
                </div>
            </div>
        </div>
        <div class="left">

        </div>
        <div class="right">

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

    export default {
        name: "UnitInfo",
        created() {
            this.fetchData();
        },
        methods: {
            fetchData(){
                this.unitInfo = getUnitInfo(this.$route.params.id)
                this.positions = getUnitAllPosition(this.$route.params.id)
            }
        },
        data() {
            return {
                unitInfo:null,
                positions:null
            }
        }
    }
</script>

<style scoped>

</style>