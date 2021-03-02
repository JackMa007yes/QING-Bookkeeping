<template>
  <div class="tags">
    <div v-for="(item, index) in tagList" 
      :key="index" 
      class="tag-item"
      :class="{selected:isSelect === index}"
      @click="select(index)">
      <div class="tag-wrapper">
        <i class="iconfont"  :class="item.tag"></i>
      </div>
      <div class="text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Tags',
  props:{
    tagList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isSelect:0,
    }
  },
  methods:{
    select(index){
      this.isSelect = index
    }
  }
}
</script>

<style scoped>
  .tags {
    /* background-color: rgb(241,242,246); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .tag-item {
    width: 12vw;
    margin: 4vw;
    text-align: center;
    /* padding: 10px ; */
    position: relative;
  }

  .tag-wrapper {
    width: 12vw;
    height: 12vw;
    /* background-color: var(--color-tint2); */
    border-radius: 50%;
    text-align: center;
    line-height: 12vw;
  }
  .tag-item> .text {
    font-size: 12px;
    margin-top: 2px;
  }
  .iconfont {
    font-size: 7vw;
    left: 50%;
    font-weight: 500;
  }
  .selected .tag-wrapper{
    background-color: var(--color-tint2);
  }
  .selected .iconfont{
    color: white;
  }
</style>