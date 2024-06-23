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
    font-family: "HarmonyOS_Sans_SC_Regular", sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
}
</style>