<template>
    <div class="author-page">
        <div class="author-info">
            <img alt="作者头像" class="avatar" src="https://via.placeholder.com/150" />
            <h1 class="info-name">杨厚奇</h1>
            <p class="info-bio">全栈开发工程师</p>
            <div class="info-links">
                <a href="https://blog.csdn.net" class="contact-link" target="_blank">博客</a>
                <a href="https://github.com" class="contact-link" target="_blank">GitHub</a>
                <a href="mailto:your.email@example.com" class="contact-link">邮箱</a>
            </div>
        </div>
        <div class="author-content">
            <span>不积跬步，无以至千里。</span><br>
            <span>我是Yok1,一个有梦想程序猿！</span>
        </div>
    </div>

</template>

<script setup>
</script>

<style scoped>
.author-page {
    font-family: Inter;
    max-width: 800px;
    margin: auto;
    padding: 20px;
    margin-top: 190px;
    margin-bottom: 250px;
}

.author-info {
    text-align: center;
    margin-bottom: 20px;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    border: 5px solid #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.info-name {
    font-size: 28px;
    margin: 10px 0;
    color: #F5F5F7;
}

.info-bio {
    /* font-style: italic; */
    color: #666;
    margin-bottom: 20px;
}

.info-links {
    margin-bottom: 20px;
}

.contact-link {
    margin-right: 20px;
    color: #007bff;
    /* color: #4694FF; */
    text-decoration: none;
    font-weight: bold;
}

.contact-link:hover {
    text-decoration: underline;
}

.author-content {
    line-height: 1.6;
    text-align: center;
}

.author-content span {
    margin-left: 12px;
    color: #FFFFFF;
}
</style>