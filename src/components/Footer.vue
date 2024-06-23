<template>
    <footer>
        <p>© 2024 younghq. All Rights Reserved.</p>
    </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    /* 固定在页面底部 */
    bottom: 0;
    /* 距离底部为0 */
    height: 80px;
    background-color: #121212;
    color: #99999F;
    width: 100%;
    margin-top: 85px;
}

footer p {

    text-align: center;
    font-size: 14px;
}
</style>
