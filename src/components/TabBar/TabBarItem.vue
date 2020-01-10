<template>
    <div class="tab-bar-item" @click="itemclick">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  /* display: inline-block; */
  width: 24px;
  height: 24px;
  margin-top: 2px;
}
</style>


