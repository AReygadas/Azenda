<script setup>

</script>

<template>
    <div class="A1">
        <img class="imgL" src="@/assets/log2.svg" alt="">
        <h1 class="A2"><span>404</span>Pagina no encontrada</h1>
        <v-btn>Ir al inicio</v-btn>
    </div>
</template>

<style scoped>
.imgL{
    width: 30vw;
}
.A1{
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
}
.A2{
    display: flex;
}
h1{
    font-size: 10vh;
}
span{
    font-weight: bold;
}
</style>