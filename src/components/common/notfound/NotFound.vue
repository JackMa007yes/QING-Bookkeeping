<template>
  <div class="notfound">
    <div class="text">
    当前页面不存在，请检查网址是否正确
    </div>
    <div class="back">
      <router-link to="/">返回首页</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name:'NotFound'
}
</script>

<style scoped>
  .text {
    margin-top: 30vh;
    text-align: center;
  }
  .back {
    text-align: center;
    margin-top: 15px;
  }
</style>