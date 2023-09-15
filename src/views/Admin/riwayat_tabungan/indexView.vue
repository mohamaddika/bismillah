<template>
  <div class="p-4 sm:ml-64 mt-8"> <br>
        <h1 class="mt-5 font-semibold text-2xl">Tabungan Siswa </h1> <br>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <a  @click="create_siswa" class="float-right bg-gray-500 hover:bg-dark-700 text-white font-bold py-2 px-4 rounded btn-sm">Nambah Tabungan</a> &nbsp;
    <table class="w-full text-sm text-left text-gray-400 dark:text-gray-400 mt-2">
        <thead class="text-xs text-gray-700 uppercase bg-gray-40 dark:bg-gray-600 dark:text-gray-400">
          <tr>
                  <th scope="col" class="px-6 py-3">
                    No
                  </th>
                    <th scope="col" class="px-6 py-3">
                        Nama
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Kelas
                  </th>
                    <th scope="col" class="px-6 py-3">
                        Uang Masuk
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Uang Keluar
                    </th>
                </tr>
        </thead>
        <tbody>
              <tr v-for="(item,index) in tabungan" :key="item.id">
                <td class="px-6 py-4">
                    {{ index+1 }}
                </td>
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100">
                       <!-- {{ item.siswa.nama }} -->
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100">
                    <!-- {{ item.siswa.kelas }} -->
               </th>
                  <td class="px-6 py-4">
                    {{ item.uang_masuk }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.uang_keluar }}
                  </td>
              </tr> 
            </tbody>
    </table>
</div>
{{ console.log(siswa) }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { onMounted } from "vue";
export default{
  computed:{
    ...mapState('tabungan',['tabungan'])
  },
  mounted() {
        this.$store.dispatch("tabungan/fetchtabungan")
  },
  setup(props, context) {
      onMounted(() => {
        try {
          context.emit("id-menu", 3);
        } catch (error) {
          console.log(error);
        }
      });
    },
}
</script>