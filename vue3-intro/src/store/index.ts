import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            count: 666
        }
    },
    mutations: {
        add(state: any) {
            state.count++
        }
    }
})
export default store