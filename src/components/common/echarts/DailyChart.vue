<template>
  <div id="daily-chart">
  </div>
</template>

<script>
import {echart} from "@/common/mixin.js"

export default {
  name:'DailyChart',
  props:{
    calcType:{
      type:String,
      default:'cost'
    }
  },
  methods:{
    setOptions(){
      const a = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
              return [pt[0], '10%'];
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name:'支出金额',
          data: this.amountData,
          type: 'line',
          lineStyle: {
            color: 'rgb(248,132,107)'
          },
          areaStyle: {
            color: 'rgb(248,132,107)'
          },
          itemStyle: {
            // 点的颜色。
            color: 'rgb(248,132,107)'
          },
        }]
      }
      if (this.calcType !== 'cost'){
        a.series= [{
          name: '收入金额',
          data: this.amountData,
          type: 'line',
          lineStyle: {
            color: 'rgb(160,204,155)'
            },
            areaStyle: {
              color: 'rgb(160,204,155)'
            },
            itemStyle: {
              // 点的颜色。
            color: 'rgb(160,204,155)'
          },
        }]
      }
      return a
    },
    eChartInit(){
      this.$echarts.dispose(document.getElementById('daily-chart'))
      const myChart = this.$echarts.init(document.getElementById('daily-chart'))
      const options = this.setOptions()
      myChart.setOption(options);
    },
  },
  computed:{
    amountData(){
      const a = []
      for(let i=1;i<32;i++){
        a.push(0)
      }
      const monthList = this.recordListbyMonth
      for(let i=0;i<monthList.length;i++){
        a[monthList[i].date.split('-')[2]*1] += monthList[i].amount*1
      }
      return a
    }
  },
  mixins:[echart]
}
</script>

<style scoped>
  #daily-chart {
    width: 98%;
    height: 350px;
    margin:1vw;
    background-color: #fff;
    border-radius: 10px;
    padding: 2vw;
  }
</style>