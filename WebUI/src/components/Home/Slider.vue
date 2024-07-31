<script setup>
    import { ref, onMounted, watch } from "vue";
    import Slide1 from  './../../assets/Slide1.jpg'
    import Slide2 from  './../../assets/Slide2.jpg'
    import Slide3 from  './../../assets/Slide3.png'
    import Slide4 from  './../../assets/Slide4.jpg'
    import Card from './../../assets/card.svg'
    const images = ref([
        Slide1,
        Slide2,
        Slide3,
        Slide4
    ]);
    const images0 = ref([
        1,2,3,4
    ]);
    const intervalId = ref(null);
    const val = ref(0);
    const prevVal = ref(0);

    function changeImage() {
        if (val.value == 3) {
            val.value = 0;
        } else {
            val.value = val.value + 1;
        }
        console.log(val.value);
    }
    onMounted(() => {
        intervalId.value = setInterval(() => {
            changeImage();
        }, 8000);
    });
    watch(val, (newValue, oldValue) => {
            prevVal.value = oldValue;
        });
</script>
<template>
    <div class="contenedor">
        <!-- <div class="izquierda">
            <h1 class="🍕">Propiedades</h1>
            <h2 class="🍔">VENTA</h2>
            <p class="🍟">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>      
            <button class="🌭">Ver mas</button>
        </div> -->
        <Transition name="slide-fade" v-for="(image,index) in images" mode="out-in">
            
             <img  v-if="val==index" :src="image.src" alt=""  class="🌱" /> 
             <!-- //  <img :src="images[val].src" class="🌱" :class="{ 'fade-in': val !== prevVal, 'fade-out': val === prevVal }"/>          -->
        </Transition>
    </div>
</template>
<style scoped>

.slide-fade-enter-active {
  transition: opacity 0.5s ease;
  transition-delay: 0.8s;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
  /* transform: translateX(20px); */
  opacity: 0;
}

.fade-in {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }

    .fade-out {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

.🍕{ font-size: 0.7rem;}
.🍔{font-size: 1rem;}
.🍟{font-size: 0.6rem;}
.🌭{
    font-size: 0.8rem;
    border: solid 1px;
    border-radius: 9px;
    padding: 0.2rem 1.5rem;
    transition: all 0.5s;
    box-shadow: 3px 3px 1px rgba(200,200,200,0.5);
}
.🌭:hover{
    background-color: aliceblue;
    color: black;
}
.🌱{
    height: 40vh;
    width: 60vw;
}
    .contenedor {
        width: 60vw;
        margin-bottom: 10vh;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
    .izquierda {
        width: 12rem;
        height: 16rem;
        background-image: url('./../../assets/card.png');
        background-size: cover;
        border-radius: 7px;
        position: fixed;
        margin-right: -70px;
        padding: 2.2rem 1rem;
        box-shadow:  9px 5px 5px rgba(20,20,20,0.6);
        color: aliceblue;
        gap: 0.8rem;
        display: flex;
        flex-direction: column;
    }
    img {
        width: 100%;
        height: 100%;
        box-shadow:  9px 5px 5px rgba(20,20,20,0.6);
        transition-property: opacity, left, top, height;
        transition-duration: 3s, 5s, 3s, 5s;
    }
</style>
