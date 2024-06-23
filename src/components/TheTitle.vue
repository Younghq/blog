<template>
    <div class="title">
        <span>{{ title1 }}</span>
        <span>{{ title2 }}</span>
    </div>
</template>
<script setup>
defineProps(['title1', 'title2']);
</script>
<style scoped>
.title {
    padding: 10px;
}

.title span {
    font-family: 'HarmonyOS_Sans_SC_Medium', sans-serif;
}

.title span:nth-child(1) {
    color: #FCFCFF;
    font-size: 34px;
    font-style: normal;

    line-height: normal;
}

.title span:nth-child(2) {
    color: #99999F;
    font-size: 32px;
    font-style: normal;

    line-height: normal;
}
</style>