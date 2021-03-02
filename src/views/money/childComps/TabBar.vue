<template>
  <div class="top-tab-bar">
    <div class="wrapper">
      <span :class="{active:'cost'=== type}" @click="selectType('cost')">支出</span>
      <span :class="{active:'income' === type}" @click="selectType('income')">收入</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TopTabBar',
  data(){
    return {
      type:'cost'
    }
  },
  methods:{
    selectType(type){
      if(type !== 'cost' && type !== 'income'){
        throw new Error('type is unknow')
      }
      this.type = type
      this.$emit('selectType',type)
    }
  }
}
</script>

<style scoped>
  .top-tab-bar {
    position: relative;
    text-align: center;
    height: 49px;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color:rgb(234,234,236);
    border-radius: 10px;
    padding: 2px;

  }
  .wrapper>span {
    display: inline-block;
    width: 20vw;
    text-align: center;
    font-size: 14px;
    padding: 6px;
    color: black;
    
  }
  .active {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
</style>