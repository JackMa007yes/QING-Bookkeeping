<template>
  <div id="number-pad">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button class="done">完成</button>
    <button>.</button>
    <button>0</button>
    <button>删除</button>
  </div>
</template>

<script>
export default {
  name:'NumberPad'
}
</script>

<style scoped>
  #number-pad {
    margin: 10px;
    /* display: flex; */
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    /* margin-right: -1vw; */
  }
  #number-pad button{
    width: 24%;
    font-size: 20px;
    height: 45px;
    background-color:white;
    border: none;
    border-radius: 4px;
    float: left;
    margin-right: 1%;
    margin-bottom: 5px;
  }
  #number-pad .done {
    height: 95px;
    background-color:var(--color-tint2);
    float: right;
  }
</style>