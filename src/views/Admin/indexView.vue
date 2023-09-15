<template>
    <div class="p-2 sm:ml-64 container-mx-auto"><br><br><br>
    <div role="alert">
        <div class="bg-gray-500 text-white font-bold rounded-t px-4 py-4 text-center text-2xl">
            Selamat datang
       </div>
    </div>
    </div>
  <div class="p-5 sm:ml-64 container-mx-auto"><br>
        <div class="grid  grid-cols-2 gap-4 mb-4">
           <div class="flex items-center justify-center h-24  rounded shadow bg-white bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl pl-4 container text-gray-400 dark:text-gray-500">
                <b>ᴛᴏᴛᴀʟ ᴛᴀʙᴜɴɢᴀɴ : 1.000.000 </b>
              </p>
           </div>
           <div class="flex items-center justify-center h-24 rounded shadow bg-white bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl pl-4 container text-gray-400 dark:text-gray-500">
                <b>ᴊᴜᴍʟᴀʜ sɪsᴡᴀ : {{ siswa.length }}</b> 
              </p>
           </div>
        </div>
     </div>
</template>
<script>
import { ref } from "vue";
import { onMounted } from "vue";
import { mapActions, mapState } from 'vuex'
export default {
  computed:{
    ...mapState('tabungan',['tabungan']),
    ...mapState('siswa',['siswa'])
  },
  mounted() {
        this.$store.dispatch("siswa/fetchsiswa")
        this.$store.dispatch("tabungan/fetchtabungan")
  },
  setup(props, context) {
      onMounted(() => {
          try {
              context.emit("id-menu", 1)
          } catch (error) {
              console.log(error)
          }
      })
  }

}
</script>
