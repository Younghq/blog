<template>
    <nav>
        <div class="title">
            <p>YoungBlogs</p>
        </div>
        <div class="link">
            <router-link class="link-item" to="/" exact-active-class="active-link">
                <TheIcon icon="home" fill="white" />
                <p>主页</p>
            </router-link>
            <router-link class="link-item" to="/history" exact-active-class="active-link">
                <TheIcon icon="history" fill="white" />
                <p>归档</p>
            </router-link>
            <router-link class="link-item" to="/author" exact-active-class="active-link">
                <TheIcon icon="user" fill="white" />
                <p>我的</p>
            </router-link>
        </div>
    </nav>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue"
</script>

<style scoped>
/* 网格布局 */
nav {
    /* 布局 */
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* 宽高 */
    width: 100%;
    height: 80px;
    /* 背景色与字体颜色 */
    background-color: #202022;
    color: #F8F8F8;
}

.title {
    /* 布局 */
    display: flex;
    align-items: center;
    margin-left: 50px;
}

.title p {
    color: #FFF;
    font-size: 24px;
    font-family: "HarmonyOS_Sans_SC_Light", sans-serif;
    line-height: normal;
}

.link {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
    gap: 8px;
}


.link-item {
    display: flex;
    /*垂直居中*/
    align-items: center;
    gap: 8px;
    text-decoration: none;
    padding: 12px;
    border-radius: 7px;
}

.link-item:hover {
    background-color: #121212;
}

.link-item p {
    color: #F8F8F8;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "HarmonyOS_Sans_SC_Light", sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin: 0;
}

/* 高亮当前活动链接 */
.active-link {
    background-color: #000000a0;
}
</style>
