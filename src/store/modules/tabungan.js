import axios from "axios";

export default {
    namespaced: true,
    state: {
        tabungan: [],
        tabungansiswa: [],
    },
    getters: {
        gettabunganall: state => state.tabungan,
        gettabungansiswa: state => state.tabungansiswa,
    },
    actions: {
        async fetchtabungan({ commit }) {
            try {
                const datatabungan = await axios.get('https://beckendsaya.000webhostapp.com/public/api/tabungan')
                commit('SET_tabungan', datatabungan.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchtabungasiswa({ commit}, id) {
            try {
                console.log(id)
                const datatabungansiswa = await axios.get(`http://localhost:8000/api/detail/tabungan/siswa`)
                commit('SET_tabungan_siswa', datatabungansiswa.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fecttabungan({ commit}, id) {
            try {
                console.log(id)
                const datatabungansiswa = await axios.get(`https://beckendsaya.000webhostapp.com/public/api/tabungan`)
                commit('SET_tabungan_siswa', datatabungansiswa.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
    },
    mutations: {
        SET_tabungan(state, tabungan) {
            state.tabungan = tabungan
        },
        SET_tabungan_siswa(state, tabungan) {
            state.tabungansiswa = tabungan
        },
        
    }
}