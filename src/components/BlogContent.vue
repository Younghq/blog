<template>
    <!-- 提供对markdown的渲染 -->
    <div v-html="renderedMarkdown"></div>
</template>

<script setup>
import markdownIt from 'markdown-it'

const props = defineProps({
    markdown: {
        type: String,
        required: true
    }
})

const md = markdownIt()
const renderedMarkdown = md.render(props.markdown)
</script>

<style></style>
