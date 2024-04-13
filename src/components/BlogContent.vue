<template>
    <MdPreview :editorId="id" :modelValue="markdown" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const props = defineProps({
    markdown: {
        type: String,
        required: true
    }
});
</script>
