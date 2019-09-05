<template>
  <div style="display: inline-block">
      <span v-for="(item,index) in getNumStrArray(num)" :key="index">{{item}}</span>
  </div>
</template>
<script>
export default {
    name:'cardNum',
    props:{
        num:Number
    },
    methods:{
      getNumStrArray(num){
          return (num+"").split("")
      }
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    span{
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
        background: white;
        padding: 5px;
        text-align: center;
        margin: 2px;
    }
</style>