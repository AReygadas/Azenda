<script setup>
  import Card from '@/components/Card/card.vue';

</script>
<style scoped>
  .container{
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.3rem;
    min-height: 90vh;
  }
</style>
<template>
    <div class="container">
        <Card module="Propiedades" route="/dash/properties" subtitle="Gestiona Propiedades"  image="p1.jpg" />
        <Card module="Usuarios" route="/dash/users" image="p2.png"    subtitle="Administra usuarios" />
        <Card module="Mensajes" route="/dash/messages" image="p3.png"    subtitle="Mensajeria"  />
        <Card module="Catalogos" route="/dash/catalogs" image="catalogos.png"    subtitle="Categorias, Renapo, configuraciones"  />
    </div>
  </template>
