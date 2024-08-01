<template>
    <div class="🍉">        
            <Carrousel />
            <MisionVisionValores></MisionVisionValores>            
            <Somos />
            <Propiedades />
            <Valuaciones />

    </div>
    </template>

<script setup>
    import Carrousel from '@/components/Home/Carrousel.vue'
    import MisionVisionValores from './../components/Home/MisionVisionValores.vue'
    import Propiedades from '@/components/Home/Propiedades.vue'
    import Valuaciones from '@/components/Home/Valuaciones.vue'
    import Somos from '@/components/Home/Somos.vue'
</script>
<style scoped>
.🍉{
    min-height:15rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
<!-- Haz lo que puedas donde estes con lo que tienes y no te preocupes por el resto  -->