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
  background-color: #54C0DC;
}
.left, .right, .other {
  font-size: 30px;
  line-height: 50px;
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
}
.sticky-content {
  height: 50px;
  width: 300px;
  background-color: #F66F2C;
}
.other {
  vertical-align: top;
  padding-top: 50px;
  display: inline-block;
}
</style>
<template>
  <div class="p-test">
    <div class="left">侧边栏</div>
    <sticky-box left="0" class="right">
      <div class="sticky-content">顶部栏</div>
    </sticky-box>
    <div class="other">主体内容</div>
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
