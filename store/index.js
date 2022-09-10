import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@nuxtjs/axios'

const store = () => new Vuex.Store({
    state: {
        counter: 0,
        data: []
    },
    mutations: {
        increment(state) {
            state.counter++
        }
    },
    getters: {
        // axios.get('url').then(response => state.data = response.data)
    },
    actions: {

    }
})

export default store