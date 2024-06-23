<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
button {
    /* 结构 */
    width: 70px;
    height: 30px;
    border-radius: 30px;
    border: none;

    color: #FFFFFF;
    background: #007bff;

    /* 字体样式 */

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>