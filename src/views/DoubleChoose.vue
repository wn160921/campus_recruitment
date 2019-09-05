<template>
    <div class="container">
        <!--  宣讲会  -->
        <div class="findDiv">
            <div>
                <el-input v-model="keyword" placeholder="请输入关键字" size="mini"></el-input>
                <el-date-picker
                        v-model="endDate"
                        type="date"
                        size="mini"
                        placeholder="请选择结束日期">
                </el-date-picker>
                <el-button type="warning" round size="mini">搜索</el-button>
                <div class="filter">
                    举办城市:
                    <el-radio-group v-model="city" size="mini">
                        <el-radio-button v-for="item in cityOptions" :label="item" :key="item"></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
        </div>
        <div class="showDiv">
            <div class="doubleChooseDiv" v-for="item in lectures" :key="item.id">
                <div class="left">
                    <div class="logo" :style="{background:'url('+item.logo+')'}"></div>
                    <div class="name canClick" @click="goJobFair(item.id)">{{item.name}}</div>
                    <div class="city">举办城市: {{item.city}}</div>
                    <div class="time">举办日期: {{item.dateStart}}至{{item.dateEnd}}</div>
                </div>
                <div class="right">
                    <div>
                        <el-button type="primary" size="mini" @click="goJobFair(item.id)">进入会场</el-button>
                    </div>
                    <div>
                        <el-button type="success" size="mini">单位报名</el-button>
                    </div>
                </div>
                <div class="status" :class="{'statusOut':checkDate(item.dateStart,item.dateEnd)}"></div>
            </div>
            <el-pagination
                    background
                    layout="prev,pager,next"
                    :total="page.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {
        getData
    } from '@/datas/doubleChoose'
    import moment from 'moment'
    export default {
        name: "lecture",
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.lectures = getData();
            },
            goJobFair(id) {
                this.$router.push({ path: `/jobFairs/${id}` });
            },
            checkDate(start,end){
                start = moment(start)
                end = moment(end);
                let now = new Date();
                if(start<now && now <end){
                    return false
                }
                return true;
            }
        },
        data() {
            return {
                keyword: '',
                college: '0',
                startDate: '',
                endDate: '',
                city: '不限',
                cityOptions: [
                    '不限', '北京', '上海', '广东', '武汉', '长沙', '岳阳', '重庆', '襄阳', '大托', '石家庄', '阿拉善盟'
                ],
                collegeOptions: [
                    {label: '师范大学', value: '0'},
                    {label: '理工大学', value: '1'},
                    {label: '警官学院', value: '2'},
                    {label: '铁路大学', value: '3'},
                    {label: '清华大学', value: '4'},
                    {label: '加里顿大学', value: '5'},
                    {label: '劳力顿大学', value: '6'}
                ],
                lectures: [],
                page: {
                    current: 1, size: 10, total: 100
                }
            }
        }
    }
</script>

<style scoped>
    .el-input {
        width: auto;
        margin-right: 10px;
    }

    .el-cascader {
        margin-right: 10px;
    }

    .el-select {
        margin-right: 10px;
    }

    .container {
        width: 1200px;
        margin: 10px auto;
        padding: 10px;
    }

    .findDiv {
        background: white;
        padding: 5px;
    }

    .filter {
        padding: 10px;
        height: 20px;
        font-size: 14px;
        line-height: 30px;
        vertical-align: middle;
    }

    .status{
        width: 51px;
        height: 51px;
        position: absolute;
        right: 0;
        top: 0;
        background: url("../assets/valid.gif");
    }

    .statusOut{
        background: url("../assets/lapsed.png");
    }

    .showDiv {
        width: 1190px;
        margin-top: 10px;
        padding: 5px;
        background: white;
    }


    .showDiv .doubleChooseDiv {
        position: relative;
        height: 100px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        overflow: hidden;
        line-height: 33px;
        border-bottom: #999999 solid 1px;
    }

    .showDiv .doubleChooseDiv .right {
        float: right;
        padding-right: 40px;
        padding-top: 15px;
    }

    .showDiv .doubleChooseDiv .left {
        float: left;
        height: 100%;
        width: 500px;
        overflow: hidden;
    }

    .showDiv .doubleChooseDiv .logo {
        width: 200px;
        height: 120px;
        float: left;
        margin-right: 20px;
    }

    .showDiv .doubleChooseDiv .name {
        color: #f26222;
        font-weight: bold;
    }

    .showDiv .doubleChooseDiv .city {
        /*float: left;*/
    }

    .showDiv .doubleChooseDiv .time {
        /*float: left;*/
    }


    .el-pagination {
        margin-top: 10px;
        text-align: center;
    }
</style>