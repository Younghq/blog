<template>
  <div class="container">
    <div class="left">
      <p class="title"><span>欢迎。</span><span>来到我的技术博客，希望在这里能对你有所帮助。</span></p>
    </div>
    <div class="right">
      <p>认为有所帮助?可以分享给他人，捐赠会提高创作的动力</p>
      <div class="button-group">
        <TheButton>分享</TheButton>
        <TheButton>捐赠</TheButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheButton from './TheButton.vue';
</script>

<style scoped>
/* 总容器 */
.container {
  /* 布局 */
  display: grid;
  grid-template-columns: 1015px 425fr;
  /* 宽高 */
  height: 320px;
  width: 100%;
}

.left {
  /* 文字垂直居中 */
  display: flex;
  align-items: center;
}

/* 文字大小字体样式 */
.title span:nth-child(1) {
  color: #FCFCFF;
  font-family: 'HarmonyOS_Sans_SC_Medium', sans-serif;
  font-size: 48px;
  font-style: normal;

  line-height: normal;
  white-space: nowrap;
}

.title span:nth-child(2) {
  color: #99999F;
  font-family: 'HarmonyOS_Sans_SC_Medium', sans-serif;
  font-size: 48px;
  font-style: normal;

  line-height: normal;

}

.right {
  display: grid;
  grid-template-rows: 150px 45px;
}

.right p {
  /* 布局 */
  margin-top: 100px;
  margin-left: 72px;
  width: 288px;
  /* 主题 */
  color: #FFF;

  font-size: 16px;
  font-style: normal;
  font-family: 'HarmonyOS_Sans_SC_Light', sans-serif;
  line-height: normal;
}

.button-group {
  /* 布局 */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* 宽高 */
  width: 170px;
  height: 45px;
  /* 边距与间距 */
  padding: 7px;
  gap: 16px;
  margin-left: 58px;
  /*  */
  flex-shrink: 0;
}

.button-group button {
  /* 结构 */
  width: 70px;
  height: 30px;
  border-radius: 30px;
  border: none;

  color: #FFFFFF;
  background: #007bff;


  /* 字体样式 */

  font-size: 16px;
  font-style: normal;

  line-height: normal;
}
</style>