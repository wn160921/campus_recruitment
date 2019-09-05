<template>
    <div class="container">
        <div class="findDiv">
            <div>
                <el-input v-model="keyword" placeholder="请输入关键字" size="mini"></el-input>
                <el-cascader
                        :options="options"
                        :props="props"
                        collapse-tags
                        size="mini"
                        clearable></el-cascader>
                <el-select v-model="industry" placeholder="请选择行业" size="mini">
                    <el-option
                            v-for="item in industryOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="warning" round size="mini">搜索</el-button>
            </div>
            <div class="filter">
                薪资水平:
                <el-radio-group v-model="money" size="mini">
                    <el-radio-button label="不限"></el-radio-button>
                    <el-radio-button label="1500以下"></el-radio-button>
                    <el-radio-button label="1500-1999"></el-radio-button>
                    <el-radio-button label="2000-2999"></el-radio-button>
                    <el-radio-button label="3000-4499"></el-radio-button>
                    <el-radio-button label="4500-5999"></el-radio-button>
                    <el-radio-button label="5000-7999"></el-radio-button>
                    <el-radio-button label="8000-12999"></el-radio-button>
                    <el-radio-button label="13000-29999"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="filter">
                学历要求:
                <el-radio-group v-model="education" size="mini">
                    <el-radio-button label="不限"></el-radio-button>
                    <el-radio-button label="本科"></el-radio-button>
                    <el-radio-button label="硕士"></el-radio-button>
                    <el-radio-button label="博士"></el-radio-button>
                    <el-radio-button label="大专"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="filter">
                工作经验:
                <el-radio-group v-model="workExperience" size="mini">
                    <el-radio-button label="不限"></el-radio-button>
                    <el-radio-button label="在校学生"></el-radio-button>
                    <el-radio-button label="应届毕业生"></el-radio-button>
                    <el-radio-button label="一到三年"></el-radio-button>
                    <el-radio-button label="三到五年"></el-radio-button>
                    <el-radio-button label="五年以上"></el-radio-button>
                    <el-radio-button label="八年以上"></el-radio-button>
                    <el-radio-button label="十年以上"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="filter">
                单位性质:
                <el-radio-group v-model="unitType" size="mini">
                    <el-radio-button label="不限"></el-radio-button>
                    <el-radio-button label="国有企业"></el-radio-button>
                    <el-radio-button label="民营企业"></el-radio-button>
                    <el-radio-button label="政府机关"></el-radio-button>
                    <el-radio-button label="事业单位"></el-radio-button>
                    <el-radio-button label="上市公司"></el-radio-button>
                    <el-radio-button label="股份制企业"></el-radio-button>
                    <el-radio-button label="中外合资"></el-radio-button>
                    <el-radio-button label="外商独资/代表处"></el-radio-button>
                    <el-radio-button label="非盈利组织"></el-radio-button>
                    <el-radio-button label="部队"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="filter">
                单位规模:
                <el-radio-group v-model="unitScale" size="mini">
                    <el-radio-button label="不限"></el-radio-button>
                    <el-radio-button label="少于50人"></el-radio-button>
                    <el-radio-button label="50-150人"></el-radio-button>
                    <el-radio-button label="150-500人"></el-radio-button>
                    <el-radio-button label="500-1000人"></el-radio-button>
                    <el-radio-button label="1000-5000人"></el-radio-button>
                    <el-radio-button label="5000-10000人"></el-radio-button>
                    <el-radio-button label="10000人以上"></el-radio-button>
                </el-radio-group>
            </div>
        </div>

        <div class="showDiv">
            <div class="unitDiv" v-for="item in units" :key="item.id">
                <div class="leftInfo">
                    <div class="logo" :style="{background:'url('+item.logo+')'}"></div>
                    <div class="jobName canClick" @click="goPositionInfo(item.id)">{{item.jobName}}</div>
                    <div class="jobMoney">{{item.money}}</div>
                    <div class="location">{{item.location}}</div>
                    <div class="jobTimeType">{{item.jobTimeType}}</div>
                    <div class="educationRequire">{{item.educationRequire}}</div>
                </div>
                <div class="middleInfo">
                    <div class="unitName canClick" @click="goUnitInfo(item.unitId)">{{item.unitName}}</div>
                    <div class="unitType">{{item.unitType}}</div>
                    <div class="unitScale">{{item.unitScale}}</div>
                </div>
                <div class="rightInfo">
                    <el-button type="warning">申请职位</el-button>
                    <div class="publishTime">{{item.publishTime}}发布</div>
                </div>
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
    } from "@/datas/jobData"

    export default {
        name: "positions",
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.units = getData()
            },
            goPositionInfo(id){
                this.$router.push({path:`/positions/${id}`})
            },
            goUnitInfo(id){
                this.$router.push({path:`/units/${id}`})
            }
        },
        data() {
            return {
                  keyword: '',
                industry: '0',
                money: "不限",
                education: "不限",
                workExperience: "不限",
                unitType: "不限",
                unitScale: "不限",
                units: [],
                page: {
                    size: 10,
                    current: 1,
                    total: 100
                },
                industryOptions: [
                    {label: "农、林、牧、渔业", value: "0"},
                    {label: "采矿业", value: "1"},
                    {label: "制造业", value: ""},
                    {label: "电力、热力、燃气及水生产和供应业", value: "2"},
                    {label: "建筑业", value: "3"},
                    {label: "批发和零售业", value: "4"},
                    {label: "交通运输仓储和邮政业", value: "5"},
                    {label: "信息传输软件和信息技术服务业", value: "6"},
                    {label: "金融业", value: "7"},
                    {label: "房地产业", value: "8"},
                    {label: "租赁和商务服务业", value: "9"},
                    {label: "科学研究和技术服务业", value: "10"},
                    {label: "水利、环境和公共设施管理业", value: "11"},
                    {label: "居民、服务修理和其他服务业", value: "12"},
                    {label: "教育", value: "13"},
                    {label: "卫生和社会工作", value: "14"},
                    {label: "文化、体育和娱乐业", value: "15"},
                    {label: "公共管理、社会保障、社会组织", value: "16"},
                    {label: "国际组织", value: "17"},
                    {label: "军队", value: "18"},
                    {label: "其他", value: "19"},
                ],
                props: {
                    multiple: true
                },
                options: [
                    {
                        value: 1,
                        label: '东南',
                        children: [{
                            value: 2,
                            label: '上海',
                            children: [
                                {value: 3, label: '普陀'},
                                {value: 4, label: '黄埔'},
                                {value: 5, label: '徐汇'}
                            ]
                        }, {
                            value: 7,
                            label: '江苏',
                            children: [
                                {value: 8, label: '南京'},
                                {value: 9, label: '苏州'},
                                {value: 10, label: '无锡'}
                            ]
                        }, {
                            value: 12,
                            label: '浙江',
                            children: [
                                {value: 13, label: '杭州'},
                                {value: 14, label: '宁波'},
                                {value: 15, label: '嘉兴'}
                            ]
                        }]
                    }, {
                        value: 17,
                        label: '西北',
                        children: [{
                            value: 18,
                            label: '陕西',
                            children: [
                                {value: 19, label: '西安'},
                                {value: 20, label: '延安'}
                            ]
                        }, {
                            value: 21,
                            label: '新疆维吾尔族自治区',
                            children: [
                                {value: 22, label: '乌鲁木齐'},
                                {value: 23, label: '克拉玛依'}
                            ]
                        }]
                    }]
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

    .showDiv {
        width: 1190px;
        margin-top: 10px;
        padding: 5px;
        background: white;
    }

    .filter {
        padding: 10px;
        height: 20px;
        font-size: 14px;
        line-height: 30px;
        vertical-align: middle;
    }

    .showDiv .unitDiv {
        width: 1200px;
        height: 70px;
        padding-top: 20px;
        padding-bottom: 20px;
        overflow: hidden;
        border-bottom: #eee solid 1px;
        line-height: 35px;
    }

    .showDiv .unitDiv .leftInfo {
        display: inline-block;
        width: 600px;
        float: left;
    }

    .showDiv .unitDiv .middleInfo {
        display: inline-block;
        width: 400px;
        float: left;
    }

    .showDiv .unitDiv .rightInfo {
        width: 200px;
        display: inline-block;
    }

    .showDiv .unitDiv .leftInfo .logo {
        width: 50px;
        height: 50px;
        margin-top: 10px;
        margin-right: 20px;
        margin-left: 20px;
        background-size: cover;
        float: left;
    }

    .showDiv .unitDiv .leftInfo .jobName {
        float: left;
        padding-right: 10px;
    }

    .showDiv .unitDiv .leftInfo .jobMoney {
        font-size: small;
        color: red;
        height: 35px;
        line-height: 35px;
    }

    .showDiv .unitDiv .leftInfo .location {
        color: #999;
        padding-right: 5px;
    }

    .showDiv .unitDiv .leftInfo .jobTimeType {
        color: #999;
        padding-right: 5px;;
    }

    .showDiv .unitDiv .leftInfo .educationRequire {
        color: #999;
    }

    .showDiv .unitDiv .middleInfo .unitType {
        color: #999;
        padding-right: 5px;
    }

    .showDiv .unitDiv .middleInfo .unitScale {
        color: #999;
        padding-right: 5px;
    }

    .showDiv .unitDiv .rightInfo .publishTime {
        color: #999;
    }


    .showDiv .unitDiv .leftInfo .location {
        float: left;
    }

    .showDiv .unitDiv .leftInfo .jobTimeType {
        float: left;
    }

    .showDiv .unitDiv .middleInfo .unitType {
        float: left;
    }

    .el-pagination{
        margin-top: 10px;
        text-align: center;
    }

</style>