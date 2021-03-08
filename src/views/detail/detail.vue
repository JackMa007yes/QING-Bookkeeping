<template>
  <layout class="detail">
    <div class="content">
      <month-choose @monthSelect='monthSelect' :month='selectMonth'/>
      <summary-card :recordList="recordListbyMonth"/>
      <item-card :recordList='item' v-for="(item,index) in result" :key='index'/>
    </div>
  </layout>
</template>

<script>
import Layout from '@/components/content/layout.vue'
import ItemCard from './childComps/itemCard.vue'
import SummaryCard from './childComps/SummaryCard.vue'
import MonthChoose from '@/components/common/monthChoose'
import {formatDate} from '/src/common/utils.js'


export default {
  name:'Labels',
  data(){
    return {
      selectMonth:'2021-3',
      result:{}
    }
  },
  components:{
    Layout,
    ItemCard,
    SummaryCard,
    MonthChoose
  },
  computed:{
    recordList(){
      return this.$store.state.recordList
    },
    recordListbyMonth(){
      const byMonth = this.recordList.filter(item => {
        const a = item.date.indexOf(this.selectMonth) >= 0
        return a
      })
      return byMonth
    },
    // result(){
    //   const list = this.recordListbyMonth.sort((a,b)=>{
    //       const stringB = b.date.split('-')
    //       const stringA = a.date.split('-')
    //       return stringB[2]*1-stringA[2]*1 >= 0
    //     })
    //   const hashTable = {}
    //   for(let i = 0 ; i<list.length;i++){ 
    //     const date = list[i].date
    //     hashTable[date] = hashTable[date] || []
    //     hashTable[date].push({title:date,items:list[i]})
    //   }
    //   return hashTable
    // },
  },
  mounted(){
    this.$store.commit('fetchRecords')
  },
  methods:{
    monthSelect(month){
      this.selectMonth = formatDate(month,'yyyy-MM')
    }
  },
  watch:{
    recordListbyMonth:{
      handler: function(){
        const list = this.recordListbyMonth.sort((a,b)=>{
          const stringB = b.date.split('-')
          const stringA = a.date.split('-')
          return stringB[2]*1-stringA[2]*1 >= 0
        })
      const hashTable = {}
      for(let i = 0 ; i<list.length;i++){ 
        const date = list[i].date
        hashTable[date] = hashTable[date] || []
        hashTable[date].push({title:date,items:list[i]})
      }
      this.result = hashTable
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
  .detail {
    background-color: rgb(241,242,246);
  }
  .content {
    overflow: hidden;
    /* height: calc(100% - 49px); */
    overflow: auto;
  }
</style>