<template>
    <div class="container">
        <!--  宣讲会  -->
        <div class="findDiv">
            <div>
                <el-input v-model="keyword" placeholder="请输入关键字" size="mini"></el-input>
                <el-select v-model="college" placeholder="请选择大学" size="mini">
                    <el-option
                            v-for="item in collegeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker
                        v-model="startDate"
                        type="date"
                        size="mini"
                        placeholder="请选择开始日期">
                </el-date-picker>
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
            <div class="lectureDiv myhead">
                <div class="name">招聘会名称</div>
                <div class="unit">举办单位</div>
                <div class="city">举办城市</div>
                <div class="address">举办地点</div>
                <div class="time">举办时间</div>
            </div>
            <div class="lectureDiv" v-for="item in lectures" :key="item.id">
                <div class="name">{{item.name}}</div>
                <div class="unit">{{item.unit}}</div>
                <div class="city">{{item.city}}</div>
                <div class="address">{{item.address}}</div>
                <div class="time">{{item.time}}</div>
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
    } from '@/datas/jobFairDatas'

    export default {
        name: "lecture",
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.lectures = getData();
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

    .showDiv {
        width: 1190px;
        margin-top: 10px;
        padding: 5px;
        background: white;
    }

    .myhead {
        background: #eee;

    }

    .showDiv .lectureDiv {
        height: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        overflow: hidden;
        line-height: 30px;
    }

    .showDiv .lectureDiv div {
        float: left;
    }

    .showDiv .lectureDiv .name {
        width: 200px;
    }

    .showDiv .lectureDiv .unit {
        width: 200px;
    }

    .showDiv .lectureDiv .city {
        width: 200px;
    }

    .showDiv .lectureDiv .address {
        width: 250px;
    }

    .showDiv .lectureDiv .time {
        width: 200px;
    }

    .el-pagination {
        margin-top: 10px;
        text-align: center;
    }
</style>