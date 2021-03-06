import { ref, onMounted, onUnmounted } from 'vue';
export function useMouse() {
    const x = ref(0)
    const y = ref(0)
    function undate(e) {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', undate)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', undate)
    })
    return { x, y }
}