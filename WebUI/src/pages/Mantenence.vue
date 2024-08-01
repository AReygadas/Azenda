<script setup>

</script>

<template>
    <div class="centerDiv" >
        <img class="logo" src="@/assets/logo.png" alt="">
        <h1>Sitio en Mantenimiento</h1>
        <div>
            <a 
            href="https://wa.me/+524494417601?text=Bienvenido,%20a%20Azenda" target="_blank" >
                <v-icon class="icon w" icon="mdi-whatsapp"></v-icon>
            </a>
            <a href="https://m.facebook.com/100063841452274/" target="_blank">
                <v-icon class="icon f" icon="mdi-facebook"></v-icon>
             </a>
        </div>
        <img src="@/assets/sm.jpg" alt="">
    </div>
</template>

<style scoped>
    .centerDiv{
        display: grid;
        place-items: center;
    }
    .logo{

        width: auto;
    }
    h1{
        font-size: 5rem;
        color: #0c395c;
    }
    .icon{
        font-size: 4rem;
        
    }
    .w{
        color: #28d147;
    }
    .f{
        color: #0763f7;
    }
    @media(width < 426px){
        h1{
            text-align: center;
            font-size: 2rem;
        }
        .centerDiv{
            height: 100vh;
        }
    }
</style>