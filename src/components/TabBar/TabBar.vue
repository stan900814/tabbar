<template>
    <div class="tabbar">
        <slot></slot> 
    </div>
</template>
<script>
export default {
  name: "TabBar",
  components: {}
};
</script>
<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.05);
}
</style>

