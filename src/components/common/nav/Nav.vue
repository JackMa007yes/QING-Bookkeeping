<template>
  <div class="nav">
    <router-link to="/labels" tag="div" class="item" active-class="selected">
    <i class="iconfont  icon-Label"></i>
    <p>标签</p>
    </router-link>
    <router-link to="/money" tag="div" class="item" active-class="selected">
    <i class="iconfont  icon-money-"></i>
    <p>记一笔</p>
    </router-link>
    <router-link to="/statistics" tag="div" class="item" active-class="selected">
    <i class="iconfont  icon-xiazai7"></i>
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
    /* background-color: rgb(245, 244, 244); */
    height: 49px;
    background-color: #fff;
    align-items: center;
    box-shadow: 0 0 3px rgba(0,0,0,0.08);
    padding-top: 2px;
  }
  .iconfont {
    font-weight: 800;
    font-size: 28px;
    color: grey;
  }
  .item {
    text-align: center;
    width: 20%;
  }
  .item p {
    font-size: 12px;
  }
  .selected {
    color: rgb(246,197,92);
  }
  .selected>i {
    font-weight: 800;
    color: rgb(246,197,92);
  }

</style>