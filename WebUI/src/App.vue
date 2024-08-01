<template>
  <v-app>
    <v-main>
      <!-- <Mantenence /> -->
      <loader2  v-if="isLoading"/>
      <router-view v-if="!isLoading" />
    </v-main>
  </v-app>
</template>

<script setup>
  //
  import {ref} from 'vue'
  import Loading from '@/pages/Loading.vue'
  import loader2 from '@/components/loader2.vue'

  import Mantenence from './pages/Mantenence.vue';
  const isLoading = ref(true)
  setTimeout(()=>{
     isLoading.value=false
  },"3000");
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .fnt1 {
      font-family: "Varela Round", sans-serif;
      font-weight: 400;
      font-style: normal;
  }
  .fnt2 {
      font-family: "Days One", sans-serif;
      font-style: normal;
  }
</style>