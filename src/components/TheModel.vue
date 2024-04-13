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
    border-radius: 52px;
    overflow: hidden;
    width: 90vw;
    height: 85%;
}

.btns-close {
    position: absolute;
    background: none;
    border: none;
    right: 20px;
    top: 20px;

    font-size: 30px;
}

.slot {
    padding: 1rem;
    margin-top: 3rem;
}
</style>