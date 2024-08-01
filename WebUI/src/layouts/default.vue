<template>
  <v-app class="bg001">
    <Menu />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
  //
</script>
<style>
.bg001{
  background-image: url("@/assets/background.png");  
  background-size: cover;
  background-position: center center;
}
</style>