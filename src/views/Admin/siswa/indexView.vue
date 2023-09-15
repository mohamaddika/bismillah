<template>
  <div class="p-4 sm:ml-64 mt-8"> <br>
        <h1 class="mt-5 font-semibold text-2xl">Data Siswa </h1> <br>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <a  @click="create_siswa" class="float-right bg-gray-500 hover:bg-dark-700 text-white font-bold py-2 px-4 rounded btn-sm">Tambah Siswa</a> &nbsp;
    <table class="w-full text-sm text-left text-gray-400 dark:text-gray-400 mt-2">
        <thead class="text-xs text-gray-700 uppercase bg-gray-40 dark:bg-gray-600 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nama Siswa
                </th>
                <th scope="col" class="px-6 py-3">
                    Kelas
                </th>
                <th scope="col" class="px-6 py-3">
                    Alamat
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in siswa" :key="item.id">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-semiboald">
                    {{ item.nama }}
                </th>
                <td class="px-6 py-4">
                    {{ item.kelas }}
                </td>
                <td class="px-6 py-4">
                    {{ item.alamat }}
                </td>
                <td class="px-8 py-4 text-right">
                    <router-link :to="'/admin/siswa/edit/'+ item.id">
                        <a href="#" class="font-medium text-gray-600 dark:text-blue-500 hover:underline">Edit</a>
                      </router-link>
                </td>
                <td>
                    <a href="#" @click="deletes(item.id)" class="font-medium text-gray-600 dark:text-blue-500 hover:underline"  >Hapus</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{ console.log(siswa) }}
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import { mapActions, mapState } from 'vuex';
export default {
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 2);
      } catch (error) {
        console.log(error);
      }
    });
  },

  computed:{
    ...mapState('siswa',['siswa'])
  },
  mounted() {
        this.$store.dispatch("siswa/fetchsiswa")
  },
  methods:{
    ...mapActions('siswa',['fetchsiswaid']),
    ...mapActions('siswa',['fectsiswadelete']),
    create_siswa(){
       this.$router.push('/admin/siswa/create')
     },
     deletes(params){
      this.fectsiswadelete(params)
     },
     details(params){
      this.fetchsiswaid(params)
     },
  }

};
</script>