<template>
  <div class="item-card-wrapper" > 
    <span class="date">{{showDate}}</span>
    <div class="money-summary" >
      <span>支出：{{calcCost}}</span> 
      <span>收入：{{calcIncome}}</span>
    </div>
    <div class="item-card" >
      <div class="item" v-for="(item,key) in recordList" :key="key">
        <span class="icon" :class="{income:item.items.type === 'income'}">
          <i class="iconfont" :class="item.items.detailIcon"></i>
        </span>
        <span class="text">{{item.items.detail}}</span>
        <span class="money">{{item.items.amount}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'item',
  props:{
    recordList:{
      type:Array,
      default(){
        return []
      }
    },
    date:{
      type:String,
      default:''
    }
  },
  computed:{
    showDate(){
      if(this.recordList[0].title.indexOf('-') >= 0){
        return this.recordList[0].title
      }else{
        return '未知'
      }
    },
    calcIncome(){
      const income = this.recordList.reduce((sum,item)=>{
        if(item.items.type === 'income'){
          return sum + item.items.amount*1
        }else {
          return sum 
        }
      },0)
      return income
    },
    calcCost(){
      const cost = this.recordList.reduce((sum,item)=>{
        if(item.items.type === 'cost'){
          return sum + item.items.amount*1
        }else {
          return sum 
        }
      },0)
      return cost
    }
  }
  // data(){
  //   return {
  //     recordListA:[]
  //   }
  // },


}
</script>

<style scoped>
  .item-card-wrapper {
    padding:3vw 5vw;
    font-size: 12px;
  }
  .money-summary {
    float: right;
  }
  .money-summary>span {
    padding-left:6px;
  }
  .item-card {
    margin-top: 8px;
    width: 90vw;
    background-color: #fff;
    border-radius: 12px;
  }
  .item {
    font-size: 14px;
    color: black;
    font-weight: 700;
    margin: 0 8px;
    padding: 15px;
    color: var(--color-text);
    line-height: 100%;
    border-bottom: 1px solid rgb(241,242,246);
  }
  .item-card :last-child {
    border-bottom: none;
  }
  .icon {
    font-size: 25px;
    display: block;
    text-align: center;
    width: 35px;
    height: 35px;
    background-color: var(--color-tint2);
    border-radius: 50%;
    float: left;
    position: relative;
  }
  .icon i{
    font-size: 20px;
    position: absolute;
    color: white;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
  }
  .income {
    background-color:var(--color-tint1);
  }
  .text {
    line-height: 35px;
    margin-left: 12px;
  }
  .money {
    float:right;
    line-height: 35px;
  }
</style>