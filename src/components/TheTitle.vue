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

.title span:nth-child(1) {
    color: #FCFCFF;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.title span:nth-child(2) {
    color: #99999F;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>