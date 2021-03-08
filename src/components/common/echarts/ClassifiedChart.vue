<template>
  <div class="wrapper">
    <div class="text">分类统计</div>
    <!-- <div>分类统计</div> -->
    <div id="classChart">
    </div>
  </div>
</template>

<script>
import {echart} from "@/common/mixin.js"

export default {
  name:'ClassifiedChart',
  methods:{
    setOptions(){
      const a = {
        tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: this.classificationDate
        }
    ]
      }
      return a
    },
    eChartInit(){
      this.$echarts.dispose(document.getElementById('classChart'))
      const myChart2 = this.$echarts.init(document.getElementById('classChart'))
      const option2 = this.setOptions()
      myChart2.setOption(option2);
    },
  },
  computed:{
    classificationDate(){
      const list = this.recordListbyMonth
      const a = {}
      const data = []
      for(let i=0;i<list.length;i++){
        const name = list[i].detail
        const value = list[i].amount*1
        if(a[name]){
          a[name] += value 
        }else{
          a[name] = value
        }
      }
      for(const key in a){
        data.push({value:a[key],name:key})
      }
      return data
    }
  },
  mixins:[echart]
}
</script>

<style scoped>
  /* .wrapper {
    width: 98%;
    height: 400px;
    margin:1vw;
    background-color: #fff;
    border-radius: 10px;
    padding: 2vw;
  } */
  #classChart {
    margin-top: 10px;
    width: 98%;
    height: 350px;
    margin:1vw;
    background-color: #fff;
    border-radius: 10px;
    padding: 2vw;
  }
  .text{
    font-size: 18px;
    color: black;
    margin-left: 4vw;
    margin-top: 2vh;
    font-weight: 600;
  }
</style>