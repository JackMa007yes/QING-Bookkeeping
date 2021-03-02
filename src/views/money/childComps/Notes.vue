<template>
  <div class="notes">
    <div class="output">0.00</div>
    <input type="text" placeholder="点击添加备注" class="text">
  </div>
</template>

<script>
export default {
  name:'Notes'
}
</script>

<style scoped>
  .notes {
    height: 14vh;
    background-color: #fff;
    margin: 10px;
    border-radius: 8px;
    /* display: flex; */
  }
  .output {
    border-bottom: 2px solid rgb(241,242,246);
    height: 8vh;
    line-height: 8vh;
    font-size: 22px;
    font-weight: 800;
    color: rgb(195,195,195);
    margin: 0 5px;
    padding: 0 10px;
  }
  .text {
    border: none;
    font-size: 12px;
    padding: 0 10px;
    line-height: 6vh;
  }
</style>