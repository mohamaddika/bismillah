<template>
  <div class="p-4 sm:ml-64">
    <br /><br /><br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li>
               <button  class="mr-4 hover:underline md:mr-6  font-bold">Tambah Data Siswa</button>
        </li>
      </ul>
    </div>

 <br>
    <div class="card shadow-md pl-4 pr-4"><br>
      <form @submit.prevent="addsiswa" class="pl-4 pr-4" method="post">
        <div>
          <label
            for="email"
            class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Masukan Nama</label
          >
          <input type="text" v-model="addsiswas.nama"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
      </div>
      <div>
        <label
          for="email"
          class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Masukan kelas</label
        >
        <input type="text" v-model="addsiswas.kelas"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
    </div>
    <div>
      <label
        for="email"
        class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Masukan alamat</label
      >
      <input type="text" v-model="addsiswas.alamat"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
  </div>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Simpan Data
  </button>
  <br><br>
    </form>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { mapActions } from 'vuex';
export default {

  data(){
      return{
        addsiswas:{
          nama:null,
          kelas:null,
          alamat:null,
          add:null
        }
      }
  },
  methods:{   
    ...mapActions('siswa',['fetchsiswaadd']),
      addsiswa(){
            this.fetchsiswaadd(this.addsiswas)
      }
  },

  setup(props, context) {
  onMounted(() => {
    try {
      context.emit("id-menu", 2);
    } catch (error) {
      console.log(error);
    }
  });
},
}
</script>
