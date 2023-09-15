// import axios from "axios";
export default {
    namespaced: true,
    state: {
        navbar: false,
    },
    getters: {
        getNavbar: state => state.navbar
    },
    actions: {
        async fetchnavbar({ commit }, data) {
            try {
                commit('SET_NAVBAR',data)
            } catch (error) {
                alert(error)
            }
        },
    },
    mutations: {
        SET_NAVBAR(state, navbar) {
            state.navbar = navbar
        },
    }
}