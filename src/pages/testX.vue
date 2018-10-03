<!--登陆弹层-->
<style>
html, body {
  height: 100%;
}
.p-test {
  margin: 0 auto;
  width: 3000px;
  height: 100%;
  font-size: 0;
}
.left {
  display: inline-block;
  width: 500px;
  height: 100%;
  background-color: #56B962;
}
.right {
  vertical-align: top;
  position: relative;
  display: inline-block;
  height: 100%;
  width: 2000px;
}
.sticky-content {
  height: 50px;
  width: 300px;
  background-color: red;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  background-color: yellow;
}

</style>
<template>
  <div class="p-test">
    <div class="left">主页简介</div>
    <sticky-box left="-10px" class="top">
      <div class="sticky-content">目录</div>
    </sticky-box>
    <div class="right">
      <div class="content">主体内容</div>
    </div>
  </div>
</template>
<script>
import StickyBox from '../components/sticky-box'

export default {
  components: {
    StickyBox,
  },
}
</script>
