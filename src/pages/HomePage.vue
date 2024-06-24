<template>
    <HomeTitle></HomeTitle>
    <BlogsList>
        <BlogItem :blogPost="blogPost" :theme="i % 2 == 0 ? theme : null" v-for="i in 10" @click="showModel = true">
        </BlogItem>
    </BlogsList>
    
    <TheModel :isShow="showModel" @close-model="showModel = false">
        <div>
            <BlogContent :markdown="markdown"></BlogContent>
        </div>
    </TheModel>
</template>

<script setup>
import HomeTitle from '../components/HomeTitle.vue';
import BlogsList from "../components/BlogsList.vue";
import BlogItem from "../components/BlogItem.vue";
import TheModel from '../components/TheModel.vue';
import BlogContent from "../components/BlogContent.vue";
import { ref } from 'vue';

const blogPost = ref({
    title: 'Vue3全栈',
    techStack: 'Vue3',
    summary: '经验分享',
    date: '2024-01-01'
});
const theme = ref('dark');
const showModel = ref(false);
const markdown = ref(`
# 哈哈哈
## 哈哈哈
### 哈哈哈
#### 哈哈哈
`);



</script>

<style></style>
