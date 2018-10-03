<!--登陆弹层-->
<style scoped>
.p-test {
  margin: 0 auto;
  width: 800px;
  font-size: 0;
}
h1 {
  margin-bottom: 30px;
}
.top, .left, .sticky-content {
  padding: 30px;
  font-size: 20px;
  line-height: 40px;
  box-sizing: border-box;
}
.top {
  height: 300px;
  background-color: #54C0DC;
}
.left {
  display: inline-block;
  width: 600px;
  height: 2000px;
  background-color: #56B962;
}
.right {
  vertical-align: top;
  display: inline-block;
}
.sticky-content {
  width: 200px;
  height: 500px;
  background-color: #F66F2C;
}
</style>
<template>
  <div class="p-test">
    <div class="top">
      <h1>简介</h1>
      <div>
        《万万没想到》是2015年叫兽易小星执导的奇幻喜剧电影，由黄建新监制，韩寒任艺术指导，杨子姗、白客、陈柏霖、马天宇、刘循子墨等出演。
        该片讲述自诩为本地妖王的小妖王大锤遇到唐僧师徒后，发生的一系列冒险故事。影片于2015年12月18日在中国大陆上映 [1]  。
      </div>
    </div>
    <div class="left">
      <h1>主体内容</h1>
      <div>
        小妖怪王大锤（白客饰）法力低微却怀揣着英雄梦，尽管整天都活在别人的质疑声中，他仍自诩为本地妖王。但万万没想到的是，小镇上看似平静的生活突如其来地被搅乱了，在遇到唐僧（陈柏霖饰）师徒后，王大锤的命运也发生了逆转，他和小美（杨子姗饰）帮助丢了法力的孙悟空找回真气，联手与妖怪战斗，开启了一段前所未见的冒险 [2-4
        小妖怪王大锤（白客饰）法力低微却怀揣着英雄梦，尽管整天都活在别人的质疑声中，他仍自诩为本地妖王。但万万没想到的是，小镇上看似平静的生活突如其来地被搅乱了，在遇到唐僧（陈柏霖饰）师徒后，王大锤的命运也发生了逆转，他和小美（杨子姗饰）帮助丢了法力的孙悟空找回真气，联手与妖怪战斗，开启了一段前所未见的冒险 [2-4
        小妖怪王大锤（白客饰）法力低微却怀揣着英雄梦，尽管整天都活在别人的质疑声中，他仍自诩为本地妖王。但万万没想到的是，小镇上看似平静的生活突如其来地被搅乱了，在遇到唐僧（陈柏霖饰）师徒后，王大锤的命运也发生了逆转，他和小美（杨子姗饰）帮助丢了法力的孙悟空找回真气，联手与妖怪战斗，开启了一段前所未见的冒险 [2-4
        小妖怪王大锤（白客饰）法力低微却怀揣着英雄梦，尽管整天都活在别人的质疑声中，他仍自诩为本地妖王。但万万没想到的是，小镇上看似平静的生活突如其来地被搅乱了，在遇到唐僧（陈柏霖饰）师徒后，王大锤的命运也发生了逆转，他和小美（杨子姗饰）帮助丢了法力的孙悟空找回真气，联手与妖怪战斗，开启了一段前所未见的冒险 [2-4
      </div>
    </div>
    <sticky-box top="0px" class="right">
      <div class="sticky-content">
        <h1>演职员表</h1>
        <div>
          演员表
          杨子姗
          白客
          陈柏霖
          马天宇
          刘循子墨
          曾志伟
          贾玲
          孔连顺
          小爱
          张本煜
          柯达
        </div>
      </div>
    </sticky-box>
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
