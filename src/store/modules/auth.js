import axios from "axios";
const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    userdata: [],
  },
  getters: {
    isAuthenticated: (state) => !!state.token && state.token != "undefined",
  },

  actions: {
    async login({commit}, credentials) {
        try {
            const response = await axios.post(
                "https://beckendsaya.000webhostapp.com/public/api/auth/login",
                 credentials , {
                     headers: {  'content-type': 'application/x-www-form-urlencoded' }
                 }
            );
            const token = response.data.access_token;
            localStorage.setItem("token", token);
            commit("SET_TOKEN", token);
            return true
        } catch (error) {
            console.log(error)
        }
    },
    logout({commit}){
      try{
       const token = localStorage.getItem('token');
       localStorage.removeItem('token');
       commit("SET_TOKEN", token)
      }catch(err){
        alert(err)
      }
       finally{
           location.reload()
       }

   }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_TOKEN_user(state, token) {
      state.userdata = token;
    },
  },
};

export default auth;