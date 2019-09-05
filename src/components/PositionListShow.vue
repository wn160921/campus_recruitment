<template>
    <div class="showDiv">
        <div class="unitDiv" v-for="item in positions" :key="item.id">
            <div class="leftInfo">
                <div class="logo" v-if="showLogo" :style="{background:'url('+item.logo+')'}"></div>
                <div class="jobName canClick" @click="goPositionInfo(item.id)">{{item.name}}</div>
                <div class="jobMoney">{{item.money}}</div>
                <div class="location">{{item.require.city}}</div>
                <div class="jobTimeType">{{item.require.type}}</div>
                <div class="educationRequire">{{item.require.education}}</div>
            </div>
            <div class="middleInfo">
                <div class="unitName canClick" @click="goUnitInfo(item.unitId)">{{item.unitName}}</div>
                <div class="unitType">{{item.unitType}}</div>
                <div class="unitScale">{{item.unitScale}}</div>
            </div>
            <div class="rightInfo">
                <div style="text-align: center">
                    <el-button type="warning" size="mini">申请职位</el-button>
                </div>
                <div class="publishTime">{{item.publishTime}}发布</div>
            </div>
        </div>
        <el-pagination
                background
                layout="prev,pager,next"
                :total="positions.length">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "PositionListShow",
        props: {
            positions: Array,
            showLogo: Boolean
        },
        methods: {
            goPositionInfo(id) {
                this.$router.push({path: `/positions/${id}`})
            }
        },
        data() {
            return {
                page: {
                    size: 10,
                    current: 1
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .showDiv {
        background: white;

        .unitDiv {
            width: 100%;
            height: 70px;
            padding-top: 20px;
            padding-bottom: 20px;
            overflow: hidden;
            border-bottom: #eee solid 1px;
            line-height: 35px;

            .leftInfo {
                display: inline-block;
                width: 40%;
                float: left;

                .logo {
                    width: 50px;
                    height: 50px;
                    margin-top: 10px;
                    margin-left: 20px;
                    background-size: cover;
                    float: left;
                }
                .jobName {
                    float: left;
                    padding-right: 10px;
                    padding-left: 10px;
                }
                .jobMoney {
                    font-size: small;
                    color: red;
                    height: 35px;
                    line-height: 35px;
                }
                .location {
                    float: left;
                    color: #999;
                    padding-right: 5px;
                    padding-left: 10px;
                }
                .jobTimeType {
                    color: #999;
                    padding-right: 5px;;
                    float: left;
                }
                .educationRequire {
                    color: #999;
                }
            }

            .middleInfo {
                display: inline-block;
                width: 33%;
                float: left;

                .unitType {
                    color: #999;
                    padding-right: 5px;
                    float: left;
                }
                .unitScale {
                    color: #999;
                    padding-right: 5px;
                }
            }

            .rightInfo {
                float: right;
                display: inline-block;

                .publishTime {
                    color: #999;
                }
            }
        }
    }


    .el-pagination {
        margin-top: 10px;
        text-align: center;
    }

</style>