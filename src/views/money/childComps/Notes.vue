<template>
  <div class="notes">
    <div class="output">{{value}}</div>
    <div class="text">
      <span class="time" @click="dateSelect">
      <i class="iconfont icon-time"></i>
      日期
      </span>
      <span class="line">|</span>
      <input type="text" placeholder="点击添加备注" 
             v-model="remarks">
    </div>
  </div>
</template>

<script>

export default {
  name:'Notes',
  props:{
    value:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      remarks:'',
    }
  },
  watch:{
    remarks:function(newValue){
      this.$emit('textContent',newValue)
    }
  },
  methods:{
    dateSelect(){
      this.$emit('dateSelect')
    }
  }
}
</script>

<style scoped>
  .notes {
    height: 14vh;
    background-color: #fff;
    margin: 10px;
    border-radius: 8px;
    /* display: flex; */
  }
  .output {
    border-bottom: 2px solid rgb(241,242,246);
    height: 8vh;
    line-height: 8vh;
    font-size: 22px;
    font-weight: 800;
    color: rgb(195,195,195);
    margin: 0 5px;
    padding: 0 10px;
    overflow: hidden;
  }
  .text {
    border: none;
    font-size: 12px;
    padding: 0 10px;
    height: 6vh;
    width: 100%;
    overflow: hidden;
  }

  .time {
    width: 15px;
    line-height: 6vh;
  }
 
  .line {
    font-size: 4vh;
    margin-left: 5px;
    color: rgb(241,242,246);
  }
  input {
    border: none;
    /* border-left: 2px solid rgb(173, 173, 173); */
    border-radius: 0mm;
    padding: 2px 10px;
    outline: none;
    margin-left: 5px;
    margin-top: 1vh;
    font-size: 14px;
    color: gray;
    height: 4vh;
    /* line-height: 6vh; */
  }
</style>