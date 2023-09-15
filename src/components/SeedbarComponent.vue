<template>
   <aside style="background: #fbf7ff;"  id="logo-sidebar" :class="navbar == true ? 'fixed  shadow-md top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700' : 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0  shadow-xl border-0' " aria-label="Sidebar">
      
      <div style="background: #fbf7ff;" clas class="h-full px-3 pb-4  overflow-y-auto dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <router-link to="/">
               <li  style="color: black;" :class="setActivedNavClass(rl[1])">
                  <a  style="color: black;" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white-100 dark:hover:bg-gray-700 group">
                     <svg :class="setActivedNavClass(rl[1])" class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                     </svg>
                     <span  style="color: black;" :class="setActivedNavClass(rl[1])" class="ml-3 text-white">Dashboard</span>
                  </a>
               </li>
            </router-link>
            <router-link to="/admin/siswa">
            <li :class="setActivedNavClass(rl[2])">
               <a href="#" style="color: black;" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white-100 dark:hover:bg-gray-700 group">
                  <svg  style="color: black;" :class="setActivedNavClass(rl[2])" class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                     <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                  </svg>
                  <span  style="color: black;" :class="setActivedNavClass(rl[2])" class="flex-1 ml-3 text-white whitespace-nowrap">Siswa</span>
               </a>
            </li>
             </router-link>
            <router-link to="/admin/riwayat_tabungan">
               <li  style="color: black;" :class="setActivedNavClass(rl[3])">
                  <a  href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white-100 dark:hover:bg-gray-700 group">
                     <svg  style="color: black;" :class="setActivedNavClass(rl[3])" class="flex-shrink-0 w-5 h-5 text-dark transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                     </svg>
                     <span  style="color: black;" :class="setActivedNavClass(rl[3])" class="flex-1 ml-3 text-white whitespace-nowrap">Riwayat tabungan</span>
                  </a>
               </li>
            </router-link>
            <router-link to="/admin/riwayat_tabungan">
               <li  style="color: black;" :class="setActivedNavClass(rl[4])">
                  <a  href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white-100 dark:hover:bg-gray-700 group">
                     <svg  style="color: black;" :class="setActivedNavClass(rl[4])" class="flex-shrink-0 w-5 h-5 text-dark transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                     </svg>
                     <span  style="color: black;" :class="setActivedNavClass(rl[4])" class="flex-1 ml-3 text-white whitespace-nowrap">Logout</span>
                  </a>
               </li>
            </router-link>
         </ul>
      </div>
   </aside>
</template>
<script>
import { ref } from "vue";
import { mapState } from 'vuex'
   export default {
      computed:{
         ...mapState('navbar',['navbar'])
      },
    props: {
        idMenu: Number
    },
    setup(props) {
        const rl = ref([
            false,
            false,
            false,
            false,
        ]);

        if (props.idMenu == 0) {
            rl.value[0] = true;
        }
        if (props.idMenu == 1) {
            rl.value[1] = true;
        }
        if (props.idMenu == 2) {
            rl.value[2] = true;
        }
        if (props.idMenu == 3) {
            rl.value[3] = true;
        }
        return {
            rl
        }
    },
    data() {
        return {
            setActivedNavClass(e) {
                let txtClass = '';
                try {
                    if (e) {
                        txtClass = "bg-white rounded text-black text-black-500";
                    } else {
                        txtClass = "";
                    }
                }
                catch (err) {
                    console.log(err);
                    return 0;
                }
                finally {
                    return txtClass;
                }
            }
            
        }
    }
}

</script>