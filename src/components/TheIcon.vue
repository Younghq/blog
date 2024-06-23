<template>
    <svg :class="svgClass" :viewBox="viewBox" preserveAspectRatio="xMidYMid meet">
        <!-- 拼接use显示的svg文件路径，注意fill为动态设置填充图标颜色，stroke为设置图标边框线 -->
        <use :href="`${sprite}#icon-${icon}`" :fill="fill" :stroke="stroke"></use>
    </svg>
</template>

<script setup>
import sprite from "../assets/icons/sprite.svg";

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    fill: {
        type: String,
        default: 'none',
    },
    stroke: {
        type: String,
        default: '#000000',
    },
    viewBox: {
        type: String,
        default: '0 0 53 53',
    }
});
</script>

<style scoped>
svg {
    width: 1em;
    height: 1em;
}

/* use {
    fill: var(--icon-fill, none);
    stroke: var(--icon-stroke, #000);
} */
</style>