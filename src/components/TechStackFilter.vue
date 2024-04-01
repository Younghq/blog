<template>
    <TheTitle title1="技术栈。" title2="分类。"></TheTitle>
    <div class="techstackfilter-container">
        <div class="filter-button">
            <p>Vue.js</p>
            <p>Node.js</p>
            <p>Python</p>
            <p>Test</p>
            <p>C/C++</p>
            <p>SQL</p>
        </div>
        <div class="divider"></div>
        <div class="filter-list">
            <div class="list-item" v-for="i in 10">
                <p>标题</p>
                <p>简介</p>
                <p>技术栈</p>
                <p>2024-01-01</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import TheTitle from './TheTitle.vue';
</script>

<style scoped>
.techstackfilter-container {
    border-radius: 25px;
    background: #000;
    height: 700px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
}

.filter-button {
    display: flex;
    padding: 12px 700px 12px 16px;
    align-items: flex-start;
    gap: 73px;
    margin-left: 35px;
}

.filter-button p {
    color: #FFF;
    font-size: 32px;
    font-weight: 400;
}

.divider {
    left: 40px;
    top: 133px;
    background: #FFF;
    width: 95%;
    height: 2px;
    background: #FFF;
    margin: 0 auto;
    /* 居中 */
}

.filter-list {
    color: #FFF;
    display: grid;
    height: 548px;
    overflow: auto;
}

.filter-list::-webkit-scrollbar {
    width: 8px;
}

.filter-list::-webkit-scrollbar-thumb {
    background-color: #6A6A6A;
    border-radius: 6px;
}


.list-item {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
}

.list-item p {
    font-size: 28px;
}

.list-item :nth-child(1) {
    padding-left: 3rem;
}

.list-item :nth-child(3) {
    text-align: center;

}

.list-item :nth-child(4) {
    text-align: center;

}
</style>