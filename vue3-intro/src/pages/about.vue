
<template>
    <h1>这是关于页面</h1>
    <Count></Count>
    <button @click="toggle">click</button>
    <transition name="fade">
        <h1 v-if="showTitle">你好 Vue 3</h1>
    </transition>
</template>
<script setup>
import Count from '../components/Count.vue'
import { ref } from 'vue'
let showTitle = ref(true)
function toggle(){
    showTitle.value = !showTitle.value
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
