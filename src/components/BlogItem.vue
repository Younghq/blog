<template>
    <div class="blog-item" :class="{ 'dark-theme': theme === 'dark' }">
        <div class="blog-info">
            <span class="info-item">{{ blogPost.title }}</span>
            <span class="info-item">{{ blogPost.techStack }}</span>
            <span class="info-item">{{ blogPost.summary }}</span>
            <span class="info-item">{{ blogPost.date }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps(["blogPost", "theme"]);
</script>

<style scoped>
.blog-item {
    flex: 0 0 auto;
    /* 设置为不可伸缩，以保持固定宽度 */
    width: 382px;
    height: 499.9px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 25px;
    padding: 40px;
    box-sizing: border-box;
    position: relative;
}

.info-item {
    position: absolute;
    color: #1D1D1F;

    font-size: 20px;
    font-style: normal;
    line-height: normal;
}

.blog-item.dark-theme {
    background: #000;
}

.blog-item.dark-theme .info-item {
    color: #FFF;
}

.blog-info {
    position: relative;
    height: 100%;
    width: 100%;
}

.info-item:nth-child(1) {
    font-family: "HarmonyOS_Sans_SC_Medium", sans-serif;
    top: 10px;
    left: 0px;
    font-size: 32px;
}

.info-item:nth-child(2) {
    font-family: "HarmonyOS_Sans_SC_Regular", sans-serif;
    top: 17px;
    right: 0px;
}

.info-item:nth-child(3) {
    font-family: "HarmonyOS_Sans_SC_Regular", sans-serif;
    top: 60px;
    left: 0px;
}

.info-item:nth-child(4) {
    font-family: "HarmonyOS_Sans_SC_Regular", sans-serif;
    top: 145px;
}
</style>