<template>
  <center>
    <br />
    <br /><br />
    <div class="container justify-center items-center">
      <div
        class="max-w-sm p-12 justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="head">
          <i style="font-size: 50px" class="bi bi-person-circle"></i>
          <br />
          <span>LOGIN UNTUK MENGAKSES HALAMAN ADMIN</span>
        </div>
        <br />
        <hr />
        <br />
        <div class="form">
          <form @submit.prevent="performLogin">
            <div>
              <label
                for="email"
                class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Masukan email</label
              >
              <input
                type="email"
                name="email"
                v-model="email"
                id="email"
                class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="email@contoh.com"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                class="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="........."
                required
              />
            </div>
            <button
              style="width: 100%"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async performLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      const success = await this.login(credentials);
      if (success) {
        this.$router.push('/admin/dashboard');
      } else {
        alert("Login Failed");
      }
    },
  },
};
</script>