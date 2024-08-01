<script setup>
    import { treadmill } from 'ldrs'
    treadmill.register()

</script>
<template>

    <div class="🍉">
        <img class="🌟" src="@/assets/logo.png" alt="">
        <h1 class="🐾">Loadig</h1>
        <l-treadmill
        size="180"
        speed="1.80" 
        color="rgb(1, 53, 102)" 
        ></l-treadmill>

    </div>
</template>
<style scoped>
    .🐾{
        font-size: 2rem;
        color:rgb(1, 53, 102);
    }
    .🌟{
        height: 20vh;
    }
    .🍉{
        flex-direction: column ;
        width: 100vw;
        height: 100vh;
        background-color: rgb(250, 250, 250);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>