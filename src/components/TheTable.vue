<template>
    <div class="history-div">
        <div class="history-table" v-for="item in paginatedItems" :key="item.id">
            <div class="history-item">
                <p>{{ item.title }}</p>
                <p>{{ item.subtitle }}</p>
                <p>{{ item.category }}</p>
                <p>{{ item.date }}</p>
            </div>
        </div>
        <TheTablePag :totalItems="items.length" :itemsPerPage="itemsPerPage" @update:currentPage="updateCurrentPage" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TheTablePag from './TheTablePag.vue'

// 后端外部传入
const items = ref([
    { id: 1, title: '文章标题1', subtitle: '小文字1', category: '分类1', date: '日期1' },
    { id: 2, title: '文章标题2', subtitle: '小文字2', category: '分类2', date: '日期2' },
    { id: 3, title: '文章标题3', subtitle: '小文字3', category: '分类3', date: '日期3' },
    { id: 4, title: '文章标题4', subtitle: '小文字4', category: '分类4', date: '日期4' },
    { id: 5, title: '文章标题5', subtitle: '小文字5', category: '分类5', date: '日期5' },
    { id: 6, title: '文章标题6', subtitle: '小文字6', category: '分类6', date: '日期6' },
    { id: 7, title: '文章标题7', subtitle: '小文字7', category: '分类7', date: '日期7' },
    { id: 8, title: '文章标题8', subtitle: '小文字8', category: '分类8', date: '日期8' },
    { id: 9, title: '文章标题9', subtitle: '小文字9', category: '分类9', date: '日期9' },
    { id: 10, title: '文章标题10', subtitle: '小文字10', category: '分类10', date: '日期10' },
])

const itemsPerPage = 10
const currentPage = ref(1)

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return items.value.slice(start, end)
})

const updateCurrentPage = (newPage) => {
    currentPage.value = newPage
}

</script>

<style scoped>
.history-div {
    margin-top: 3vw
}

.history-table {

    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.history-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.history-item p {
    flex: 1;
    margin: 0 10px;
    text-align: center;
    color: #F5F5F7;
    font-family: "HarmonyOS_Sans_SC_Regular", sans-serif;
}

.history-item p:first-child {
    margin-left: 0;
}

.history-item p:last-child {
    margin-right: 0;
}
</style>