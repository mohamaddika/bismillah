import axios from "axios";

export default {
    namespaced: true,
    state: {
        siswa: [],
        singlesiswa:[],
    },
    getters: {
        getsiswa: state => state.siswa,
        getsiswaid: state => state.singlesiswa
    },
    actions: {
        async fetchsiswa({ commit }) {
            try {
                const datasiswa = await axios.get("https://beckendsaya.000webhostapp.com/public/api/siswa")
                commit('SET_siswa', datasiswa.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchsiswaid({ commit },id) {
            try {
                console.log(id)
                const datasiswa = await axios.get(`https://beckendsaya.000webhostapp.com/public/api/siswa/${id}`)
                commit('SET_SINGLE_SISWA', datasiswa.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchsiswaadd({ commit },data) {
            try {
                console.log(data)
                const datasiswa = await axios.post("https://beckendsaya.000webhostapp.com/public/api/siswa",data , {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                })
                commit('SET_siswa', datasiswa.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }finally{
                window.location.href = '/admin/siswa';
            }
        },
        async fectsiswadelete({ commit , getters },id) {
            try {
                const datasiswa = await axios.post(`https://beckendsaya.000webhostapp.com/public/api/siswa/delete/${id}`)
                commit('SET_siswa', datasiswa)
            } catch (error) {
                alert("id ini mempunyai relasi");
                console.log(error);
            }finally{
                location.reload()
            }
        },


        async fecteditsiswa({ commit ,getters},data) {
            try {
                const datasiswa = await axios.post(`https://beckendsaya.000webhostapp.com/public/api/siswa/update/${getters.getsiswaid.id}`,data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                })
                commit('SET_siswa', datasiswa.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }finally{
                window.location.href = '/admin/siswa';
            }
        },

    },
    mutations: {
        SET_siswa(state, siswa) {
            state.siswa = siswa
        },
        SET_SINGLE_SISWA(state, siswa) {
            state.singlesiswa = siswa
        }
        
    }
}