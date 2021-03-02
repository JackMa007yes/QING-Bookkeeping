<template>
  <div class="nav">
    <router-link to="/money" tag="div" class="item">
    <i class="iconfont  icon-money-"></i>
    <p>记账</p>
    </router-link>
    <router-link to="/labels" tag="div" class="item">
    <i class="iconfont  icon-Label"></i>
    <p>标签</p>
    </router-link>
    <router-link to="/statistics" tag="div" class="item">
    <i class="iconfont  icon-tongji5"></i>
    <p>统计</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'Nav'
}
</script>

<style scoped>
  .nav {
    display: flex;
    justify-content: space-around;
    /* background-color:rgb(246,197,92); */
    height: 49px;
    align-items: center;
    box-shadow: 0 0 3px rgba(0,0,0,0.08);
    padding-top: 2px;
  }
  .iconfont {
    font-weight: 1000;
    font-size: 25px;
    color: rgb(246,197,92);
  }
  .item {
    text-align: center;
    width: 33%;
  }
  .item p {
    font-size: 13px;
  }
</style>