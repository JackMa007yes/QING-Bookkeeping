<template>
  <layout class="wrapper">
    <top-tab-bar @selectType="selectType"/>
    <div class="content">
      <month-choose @monthSelect='monthSelect'/>
      <daily-chart :recordListbyMonth="recordListbyMonth" :calcType='calcType'/>
      <classified-chart :recordListbyMonth="recordListbyMonth"/>
    </div>
  </layout>
</template>

<script>
import layout from '@/components/content/layout.vue'
import TopTabBar from "@/views/money/childComps/TabBar.vue"
import ClassifiedChart from '@/components/common/echarts/ClassifiedChart.vue';
import MonthChoose from '@/components/common/monthChoose.vue';
import {formatDate} from '/src/common/utils.js'
import DailyChart from '../../components/common/echarts/DailyChart.vue';


export default {
  components: { layout,TopTabBar,ClassifiedChart, MonthChoose,DailyChart },
  name:'Statistics',
  data(){
    return {
      calcType:'cost',
      selectMonth:' ',
    }
  },
  methods:{
    selectType(type){
      this.calcType = type
    },
    monthSelect(month){
      this.selectMonth = formatDate(month,'yyyy-MM')
    }
  },
  computed:{
    recordList(){
      return this.$store.state.recordList
    },
    recordListbyMonth(){
      const byMonth = this.recordList
        .filter(item => {
          const a = item.date.indexOf(this.selectMonth) >= 0
          return a
        })
        .filter(item => item.type === this.calcType)
      return byMonth
    },
  },
  mounted(){
    this.$store.commit('fetchRecords')
  },
};

</script> 

<style scoped>
  .wrapper {
    background-color: rgb(241,242,246);
  }
  .content {
    overflow: hidden;
    height: calc(100% - 49px);
    overflow: auto;
  }
</style>