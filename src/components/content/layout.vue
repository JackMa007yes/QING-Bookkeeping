<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <NavV/>
  </div>
</template>

<script>
export default {
  name:'Layout',
  components: {
    
  },
}
</script>

<style>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    flex:1;
    overflow: auto;
  }
</style>