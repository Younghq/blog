<template>
    <nav>
        <div class="title">
            <p>YoungBlogs</p>
        </div>
        <div class="link">
            <router-link class="link-home" to="/">
                <p>主页</p>
            </router-link>
            <router-link class="link-history" to="/history">
                <p>归档</p>
            </router-link>
            <router-link class="link-author" to="/author">
                <p>我的</p>
            </router-link>
        </div>
    </nav>
</template>

<script setup>
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
    /* font-style: italic; */
    font-weight: 300;
    line-height: normal;
}

/*  */
.link {
    display: inline-flex;
    padding: 13px 55px 14px 59px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 33px;

}

.link p {
    color: #F8F8F8;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
</style>