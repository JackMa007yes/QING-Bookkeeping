<template>
  <layout>
    <top-tab-bar @selectType="selectType"/>
    <div class="content">
      <tags :tagList="TagList[type]" :isIncome="type === 'income'" class="tag" @tagChoose='tagChoose'/>
      <number-pad @dateSelect='dateSelect' :DateChoosed="DateChoosed"  @commit="commit" @textContent='textContent' :isIncome="type === 'income'"/>
    </div>
    <datechoose :show="isShow" @dateSelectDone='dateSelectDone' @showPopup='showPopup' @closeDate='closeDate'/>
  </layout>
</template>

<script>
import Layout from '@/components/content/layout.vue'
import TopTabBar from './childComps/TabBar.vue'
import Tags from '@/views/money/childComps/Tags.vue'
import TagList from "@/common/taglist.js"
import NumberPad from './childComps/NumberPad.vue'
import Datechoose from '../../components/common/datechoose.vue'
import {formatDate} from '/src/common/utils.js'

export default {
  name:'Money',
  components:{
    Layout,
    TopTabBar,
    Tags,
    NumberPad,
    Datechoose,
  },
  data(){
    return {
      TagList,
      type:'cost',
      isShow:false,
      date:'',
      DateChoosed:false,
      recordList:JSON.parse(window.localStorage.getItem('recordList') || '[]'),
      records:{'type':'cost',
                    'amount':0,
                    'detail':"其他",
                    'detailIcon':'',
                    'date':{},
                    'text':''
              }
    }
  },
  mounted(){
    this.$store.commit('fetchRecords')
  },
  methods:{
    selectType(type){
      this.type = type
      this.records.type = type
    },
    dateSelect(){
      this.isShow = true
    },
    dateSelectDone(date){
      const a = formatDate(date,'yyyy-MM-dd')
      this.date = a
      this.records.date = a
      this.isShow = false
      this.DateChoosed = true
    },
    closeDate(){
      this.isShow = false
    },
    showPopup(){
      this.isShow = true
    },
    tagChoose(tag){
      this.records.detail = tag.title
      this.records.detailIcon = tag.tag
    },
    textContent(text){
      this.records.text = text
    },
    commit(amount){
      this.records.amount = amount
      const record2 = JSON.parse(JSON.stringify(this.records)) 
      this.recordList.push(record2)
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
      this.$store.commit('addrecord',record2)
      this.$toast.show('已添加新纪录')
      this.DateChoosed = false
    }
  },
}
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(241,242,246);
    /* height: calc(100% - 49px -49px); */
    height: calc(100% - 49px);
  }
  .tag {
    overflow: auto;
  }
</style>