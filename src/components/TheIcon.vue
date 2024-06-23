<template>
    <svg>
        <use :href="iconPath"></use>
    </svg>
</template>

<script setup>
import { computed } from 'vue'; // 从 Vue 中导入 computed

// 接收外部传入的icon名
const props = defineProps({
    iconName: {
        type: String,
        required: true,
    }
})

// 构造图标路径
const iconPath = computed(() => `../assets/icons/${props.iconName}.svg`)
</script>

<style scoped></style>
