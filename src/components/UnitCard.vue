<template>
    <div class="main">
        <div class="head">
            <img width="60px" src="../static/company-logo.png" alt=""/> <span class="name">{{unit.name}}</span>
        </div>
        <div class="positionList">
            <div v-for="item in subThree(unit.positions)" :key="item.id" class="oveflow padd5">
                <div class="floatLeft">
                    <div class="pName canClick" @click="goPositionInfo(item.id)">{{item.name}}</div>
                    <div class="pMoney c-importtant">{{item.money}}</div>
                </div>
                <div class="floatRight">
                    <el-button type="primary" plain>申请职位</el-button>
                </div>
            </div>
        </div>
        <div class="bottom canClick" @click="goUnitInfo(unit.id)">
            <span>查看全部职位</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "UnitCard",
        props: {
            unit: Object
        }, methods: {
            subThree(arr){
                return arr.filter((a,i)=>i<=2);
            },
            goUnitInfo(id){
                this.$router.push({path:`/units/${id}`})
            },
            goPositionInfo(id) {
                this.$router.push({path: `/positions/${id}`})
            }
        },
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .main {
        display: inline-block;
        width: 280px;
        height: 270px;
        background: white;
        border: #9f9f9f 1px solid;
        position: relative;
        margin: 5px;
    }
    .head{
        height: 60px;
        border-bottom: #737373 solid 2px;
        position: relative;
        text-align: left;
        vertical-align: middle;
        img{
            text-align: left;
        }
        .name{
            text-align: left;
            width: 200px;
            overflow: hidden;
            line-height: 30px;
            margin-left: 10px;
            position: absolute;
            top:50%;
            transform:translate(0,-50%);
        }
    }

    .bottom{
        text-align: center;
        background: #F6F8FA;
        color:#0088CC;
        height: 40px;
        width: 280px;
        line-height: 40px;
        position: absolute;
        left: 10px;
        bottom: 10px;
    }
</style>