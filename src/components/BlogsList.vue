<template>
    <TheTitle title1="最新的。" title2="博客。">
    </TheTitle>
    <div class="blogs-list">
        <slot></slot>
    </div>
</template>

<script setup>
import TheTitle from "./TheTitle.vue";
</script>

<style scoped>
.blogs-list {
    display: flex;
    overflow-x: auto;
    /* 允许横向滚动 */
    gap: 30px;
    margin-top: 20px;
    padding-bottom: 20px;
    /* 防止横向滚动条遮挡内容 */
    margin-bottom: 65px;
}

.blogs-list::-webkit-scrollbar {
    height: 5px;
}

.blogs-list::-webkit-scrollbar-thumb {
    background-color: #6a6a6a;
    /* 滚动条滑块的颜色 */
    border-radius: 6px;
    /* 滑块的边角弧度 */
}

.blogs-list::-webkit-scrollbar-track {

    /* 滚动条轨道的颜色 */
    border-radius: 6px;
    /* 轨道的边角弧度 */
}
</style>