<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="./assets/img/首页 (1).svg" alt="">
        <div>首页</div>
        </tab-bar-item>
      <tab-bar-item path='/category'><img src="./assets/img/类目 品类 分类 类别 (1).svg" alt="">
        <div>分类</div></tab-bar-item>
      <tab-bar-item path='/cart'><img src="./assets/img/购物车 (1).svg" alt="">
        <div>购物车</div></tab-bar-item>
      <tab-bar-item path='/porfile'><img src="./assets/img/用户 (1).svg" alt="">
        <div>我的</div></tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
import TabBarItem from "./components/TabBar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
