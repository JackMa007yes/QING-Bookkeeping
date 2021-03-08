<template>
  <div class="monthChoose">
    <div class="month-show-area">
      <span class="show-month">{{month}}</span>
      <span class="select-month" @click="showPopup">切换日期</span>
    </div>
    <van-popup v-model="show"  position="top" round get-container="body"  :style="{ height: '40%',width:'100%',backgroundcolor:'#fff'}">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="selectMonth"
      />
    </van-popup>
  </div>
</template>

<script>
import {formatDate} from '/src/common/utils.js'

export default {
  name:'MonthChoose',
  // props:{
  //   month:{
  //     type:String,
  //     default(){
  //       return '2021年3月'
  //     }
  //   }
  // },
  data() {
    return {
      month:'',
      show:false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      }
      return val;
    },
    showPopup(){
      this.show = true
    },
    selectMonth(month){
      this.month = formatDate(month,'yyyy年MM月')
      this.show = false
      this.$emit('monthSelect',month)
    }
  },
  

}
</script>

<style scoped>
  .month-show-area {
    display: flex;
    justify-content: space-between;
    width: 90%;
    /* border: 1px solid red; */
    margin: 4vw 5vw 0 5vw;
  }
  .show-month {
    font-size: 20px;
    color: black;
    font-weight: 600;
    line-height: 20px;
  }
  .select-month {
    line-height: 20px;
    color: blue;
    font-size: 14px;
  }
</style>