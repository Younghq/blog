<template>
    <HomeTitle></HomeTitle>
    <BlogsList>
        <BlogItem :blogPost="blogPost" :theme="i % 2 == 0 ? theme : null" v-for="i in 10"></BlogItem>
    </BlogsList>
    <TechStackFilter></TechStackFilter>
    <!-- <BlogCard></BlogCard> -->
</template>

<script setup>
import HomeTitle from '../components/HomeTitle.vue';
import BlogsList from "../components/BlogsList.vue";
import BlogItem from "../components/BlogItem.vue";
import TechStackFilter from "../components/TechStackFilter.vue";
// import BlogCard from '../components/BlogCard.vue';
import { ref } from 'vue';

const blogPost = ref({
    title: 'Vue3全栈',
    techStack: 'Vue3',
    summary: '经验分享',
    date: '2024-01-01'
});
const theme = ref('dark');
</script>

<style>
/* 暂时替代遮罩防止滚动效果 */
body {
    /* overflow: hidden; */
}
</style>