<template>
    <div class="TheTablePag">
        <TheButton @click="prevPage" :disabled="currentPage === 1">上一页</TheButton>
        <span>第 {{ currentPage }} 页</span>
        <TheButton @click="nextPage" :disabled="currentPage === totalPages">下一页</TheButton>
    </div>
</template>

<script setup>
import TheButton from './TheButton.vue'
import { ref, watch } from 'vue'

const props = defineProps({
    totalItems: {
        type: Number,
        required: true
    },
    itemsPerPage: {
        type: Number,
        default: 5
    }
})

const emit = defineEmits(['update:currentPage'])

const currentPage = ref(1)
const totalPages = ref(Math.ceil(props.totalItems / props.itemsPerPage))

watch(
    () => props.totalItems,
    (newVal) => {
        totalPages.value = Math.ceil(newVal / props.itemsPerPage)
    }
)

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        emit('update:currentPage', currentPage.value)
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        emit('update:currentPage', currentPage.value)
    }
}
</script>

<style scoped>
.TheTablePag {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

button {
    margin: 0 10px;
    padding: 5px 10px;
}

.TheTablePag span {
    color: #F5F5F7;
}
</style>
