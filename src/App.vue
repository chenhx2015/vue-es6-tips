<template>
  <div id="app">
    <!-- 路由设定 -->
    <div class="main-tabs">
      <ul class="tabs">
        <li>
          <router-link to="/tip">工具</router-link>
        </li>
        <li>
          <router-link to="/components">组件</router-link>
        </li>
        <li>
          <router-link to="/my">es6</router-link>
        </li>
      </ul>
    </div>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
.main-tabs {
  position: fixed;
  width: 100%;
  bottom: 0;
}
.tabs {
  display: flex;
  justify-content: space-around;
  background: #eee;
}
li {
  list-style: none;
  height: 45px;
  line-height: 45px;;
}
li a {
  color: #000;
  /* 去除下划线 */
  text-decoration: none;
}
.router-link-active {
  color: green;
}
</style>
