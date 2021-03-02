<template>
  <layout>
    <top-tab-bar @selectType="selectType"/>
    <div class="content">
      <tags :tagList="TagList[type]" class="tag"/>
      <div class="bottom">
        <notes/>
        <number-pad/>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '@/components/content/layout.vue'
import TopTabBar from './childComps/TabBar.vue'
import Tags from '@/views/money/childComps/Tags.vue'
import Notes from './childComps/Notes.vue'

import TagList from "@/assets/taglist.js"
import NumberPad from './childComps/NumberPad.vue'

export default {
  name:'Money',
  components:{
    Layout,
    TopTabBar,
    Tags,
    Notes,
    NumberPad,
  },
  data(){
    return {
      TagList,
      type:'cost'
    }
  },
  methods:{
    selectType(type){
      this.type = type
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