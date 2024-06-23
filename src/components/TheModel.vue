<template>
    <Teleport to="body" v-if="isShow">
        <div class="body-modal">
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <div class="content-info">
                    <div class="info-title">
                        <p>标题文字</p>
                    </div>
                    <div class="info-tag">
                        <p>标签文字</p>
                    </div>
                    <div class="info-techStack">
                        <p>技术栈</p>
                    </div>
                    <div class="info-created">
                        <div>
                            <span>@yhq发布于2024-06-24</span>
                        </div>
                    </div>
                    <div class="btn-close">
                        <TheIcon class="btn-close-icon" @click="$emit('closeModel')" icon="close" fill="white" />
                    </div>
                </div>
                <div class="slot">
                    <slot></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import TheIcon from '../components/TheIcon.vue';

const props = defineProps({
    isShow: Boolean,
});

const emits = defineEmits(['closeModel']);
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

.modal-content::-webkit-scrollbar {
    width: 8px;
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: #6a6a6a;
    border-radius: 6px;
}

.modal-content::-webkit-scrollbar-track {
    border-radius: 6px;
}

.content-info {
    margin: 0;
    padding: 1rem;
    height: 200px;
    background-color: #202022;
    border-bottom: 2px solid #0F0F10;
}

.info-title p {
    color: #FCFCFF;
    font-size: 1.5rem;
    font-family: "HarmonyOS_Sans_SC_Medium", sans-serif;
}

.info-tag p,
.info-techStack p,
.info-created div {
    margin: 1;
    color: #FCFCFF;
    font-family: "HarmonyOS_Sans_SC_Light", sans-serif;
}

.btn-close {
    position: absolute;
    background: none;
    border: none;
    right: 14px;
    top: 10px;
}

.btn-close svg {
    width: 32px;
    height: 32px;
}


.slot {
    padding: 1rem;
    margin-top: 3rem;
}
</style>
