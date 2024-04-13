<!-- 遮罩层构建 -->
<template>
    <Teleport to="body" v-if="isShow">
        <div class="body-modal">
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <div class="content-btns">
                    <p class="content-title"></p>
                    <p class="content-time"></p>
                    <p class="content-author"></p>
                    <button class="btns-close" @click="$emit('close-model')">
                        ×
                    </button>
                </div>
                <div class="slot">
                    <slot></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
const props = defineProps({
    isShow: Boolean,
});
const emits = defineEmits(['closeModel'])
</script>

<style scoped>
.body-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    left: 0;
    top: 0;
    display: grid;
    place-items: center;
}

.modal-backdrop {
    background: rgba(0, 0, 0, 0.56);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

.modal-content {
    position: relative;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    width: 90vw;
    height: 85%;
    overflow-y: auto;
}

/* 滚动条样式 */
.modal-content::-webkit-scrollbar {
    width: 8px;
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: #6a6a6a;
    /* 滚动条滑块的颜色 */
    border-radius: 6px;
    /* 滑块的边角弧度 */
}

.modal-content::-webkit-scrollbar-track {
    /* 滚动条轨道的颜色 */
    border-radius: 6px;
    /* 轨道的边角弧度 */
}

.btns-close {
    position: fixed;
    background: none;
    border: none;
    font-size: 30px;
    right: 8vw;
    top: 9%;
    z-index: 1000;
}

.slot {
    padding: 1rem;
    margin-top: 3rem;
}
</style>