import { createStore } from "vuex";
import navbar from "./modules/navbar";
import siswa from "./modules/siswa";
import tabungan from "./modules/tabungan";
import auth from "./modules/auth";

export default createStore({
    modules: {
        navbar,
        siswa,
        tabungan,
        auth
    }
});