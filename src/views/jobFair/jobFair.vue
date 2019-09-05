<template>
    <div class="container">
        <div class="header">

            <div class="poster">
                <img :src="fair.poster" alt/>
            </div>
            <div class="detail">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-addressbook_fill"></use>
                </svg>
                参会单位: <span><CardNum :num="fair.unitNum"></CardNum></span> 人&nbsp;&nbsp;
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-businesscard_fill"></use>
                </svg>
                招聘职位: <span><CardNum :num="fair.positionNum"></CardNum></span> 人&nbsp;&nbsp;
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-browse"></use>
                </svg>
                关注人数: <span><CardNum :num="fair.focusNum"></CardNum></span> 人 &nbsp;&nbsp;
                <div style="width: 800px;line-height: 30px">
                    为了进一步做好蒙古语授课毕业生就业帮扶工作，确保离校不离心，服务不断线，内蒙古自治区教育厅定于2019年8月15日-31日开展2019届蒙古语授课毕业生网络专场招聘会。
                </div>
            </div>
        </div>
        <div class="main">
            <div class="filter">
                <el-input v-model="keyword" placeholder="请输入关键字" size="mini"></el-input>
                <el-cascader
                        placeholder="请选择城市"
                        v-model="city"
                        :options="cityOptions"
                        :props="{ expandTrigger: 'hover' }"
                        size="mini"
                ></el-cascader>
                <el-select v-model="job" placeholder="请选择职位类别" size="mini">
                    <el-option
                            v-for="item in jobOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="warning" round size="mini">查询</el-button>
            </div>
            <div class="fairList">
                <UnitCard v-for="item in fair.unitList" :unit="item" :key="item.id"></UnitCard>
            </div>
        </div>
    </div>
</template>

<script>
    import {getDataById} from ".././../datas/fairsData";
    import CardNum from "@/components/CardNum";
    import UnitCard from "@/components/UnitCard";

    export default {
        name: "jobFair",
        components: {UnitCard, CardNum},
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.fair = getDataById(this.$route.params.id);
            }
        },
        data() {
            return {
                fair: null,
                keyword: '',
                city: '',
                cityOptions: [
                    {
                        value: '1',
                        label: '北京',
                        children: [
                            {
                                value: '11',
                                label: '北门'
                            }, {
                                value: '12',
                                label: '东门'
                            }
                        ]
                    },
                    {
                        value: "2",
                        label: '河北',
                        children: [
                            {
                                value: '21',
                                label: '石家庄'
                            },
                            {
                                value: "22",
                                label: '唐山市'
                            }
                        ]
                    }
                ],
                job: '1',
                jobOptions: [
                    {
                        label: '销售/零售/客户服务类',
                        value: '1'
                    },
                    {
                        label: '市场/公关类',
                        value: '2'
                    },
                    {
                        label: '贸易/采购类',
                        value: '3'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .el-input {
        width: 30%;
        margin-right: 10px;
    }

    .el-cascader {
        width: 30%;
        margin-right: 10px;
    }

    .el-select {
        width: 30%;
        margin-right: 10px;
    }

    .container {
        width: 1200px;
        margin: 10px auto;
        padding: 10px;
        text-align: center;
    }

    .header{
        background: white;
        padding-bottom: 20px;
    }

    .detail {
        color: #03A9F5;
        background: #E2F3FB;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 10px;
        display: inline-block;
    }

    .main {
        background: white;
        margin-top: 10px;
        padding: 10px;
    }
    .main .filter{
        padding: 20px;
        text-align: left;
        background: #F6F8FA ;
    }
    .main .fairList{
        text-align: left;
    }
</style>