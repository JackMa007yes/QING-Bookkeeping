<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <NavV class="nav"/>
  </div>
</template>

<script>
export default {
  name:'Layout',
  mounted(){
    const wrapper = document.getElementsByClassName("nav-wrapper")[0];
    const height = window.innerHeight;
    wrapper.style.height = height +('px'); 
  }
}
</script>

<style scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
  }
  .content {
    flex:1;
    overflow: auto;
  } 
  /* .nav{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  } */
</style>