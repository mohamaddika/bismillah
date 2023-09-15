<template>
  <div class="p-4 sm:ml-64 container-mx-auto"><br><br><br>
        <div class="grid  grid-cols-2 gap-4 mb-4">
           <div class="flex items-center justify-center h-24  rounded shadow bg-white bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl pl-4 container text-gray-400 dark:text-gray-500">
                ᴛᴏᴛᴀʟ ᴛᴀʙᴜɴɢᴀɴ : 5.000.000
              </p>
           </div>
           <div class="flex items-center justify-center h-24 rounded shadow bg-white bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl pl-4 container text-gray-400 dark:text-gray-500">
                ᴊᴜᴍʟᴀʜ sɪsᴡᴀ : 30
              </p>
           </div>
        </div>
     </div>
</template>
<script>
import { ref } from "vue";
import { onMounted } from "vue";
export default {
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
