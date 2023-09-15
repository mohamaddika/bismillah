<template>
      <Navbar  v-if="idMenu != 0 "></Navbar>
      <SeedbarComponent v-if="idMenu != 0 " :id-menu="idMenu " :key="idMenu"></SeedbarComponent>
   
      <div class="flex-grow flex-shrink">
        <RouterView @id-menu="setMenu($event)"></RouterView>
      </div>
</template>


<script>
// import 'flowbite/dist/flowbite'
// import { Modal } from 'flowbite'
import { ref } from "vue";
import Navbar from './components/Navbar.vue';
import SeedbarComponent from "./components/SeedbarComponent.vue";

export default {
  components: {
    Navbar,
    SeedbarComponent
  },
  setup() {
    const idMenu = ref(0);

    function setMenu(id) {
      idMenu.value = id;
    }
    return {
      idMenu,
      setMenu
    }
  }
}
</script>
