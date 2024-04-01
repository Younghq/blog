<template>
    <TheModel>
        <div class="card-section">
            <div class="blog-info">
                <p class="blog-info-item">博客标题</p>
                <p class="blog-info-item">简略</p>
                <p class="blog-info-item">技术栈</p>
                <p class="blog-info-item">2024-01-01</p>
            </div>
            <div class="blog-content">
                <BlogEditor></BlogEditor>
            </div>
        </div>
    </TheModel>
</template>
<script setup>
import TheModel from './TheModel.vue';
import BlogEditor from './BlogEditor.vue'
</script>

<style scoped>
.card-section {
    width: 1440px;
}

.blog-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 150px;
}

.blog-content {
    height: 800px;
}
</style>
