<template>
    <Teleport to="body" v-if="isShow">
        <Transition name="slide-fade">
            <div class="body-modal">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="content-info">
                        <div class="info-title">
                            <p>标题文字</p>
                        </div>
                        <div class="info-lbl">
                            <span>
                                标签文标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字标签文字
                            </span>
                        </div>
                        <div class="info-tag">
                            <p>技术栈</p>
                            <p>2024-06-24</p>
                            <p>yhq</p>
                        </div>
                        <div class="btn-close">
                            <TheIcon class="btn-close-icon" @click="$emit('closeModel')" icon="close" fill="black" />
                        </div>
                    </div>
                    <div class="slot">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Transition>
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
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

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
    background: #FFFFFF;
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
    height: 100px;
}

.content-info {
    margin-left: 2rem
}

.info-title p {
    font-size: 1.8rem;
    margin: 0px;
    margin-top: 1.5rem;
    color: #007BFF;
    font-family: "HarmonyOS_Sans_SC_Bold", sans-serif;
    margin-bottom: 0.8rem
}

.info-lbl {
    margin: 0px;
    font-size: 1.2rem;
    font-family: "HarmonyOS_Sans_SC_Medium", sans-serif;
    margin-bottom: 0.8rem
}

.info-lbl span {
    margin: 0px;
}

.info-tag {
    font-family: "HarmonyOS_Sans_SC_Medium", sans-serif;
    font-size: 1rem;
    display: flex;
}

.info-tag p {
    margin: 0px;
}

.info-tag p {
    margin-right: 5px;
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
