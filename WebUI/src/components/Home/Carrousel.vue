<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'

    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite();
    })
</script>
<template>
    <div class="👣">
        <div class="🌟">
            <div id="carousel" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative overflow-hidden rounded-lg md:h-96 clld ">
                    <!-- Item 1 --> 
                    <div class="hidden duration-700 ease-in-out res" data-carousel-item>
                        <img src="@/assets/Slide1.png"
                            class="ee absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="...">
                        <div class="imgg">
                            <h2 class="AB">Servicio</h2>
                            <h2 class="AC">JURIDICO</h2>
                            <p class="AD">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button class="AA">Ver mas</button>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out res" data-carousel-item>
                        <img src="@/assets/Slide2.png"
                             class="ee absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                             <div class="imgg">
                                <h2 class="AB">Servicio de</h2>
                                <h2 class="AC">GESTORÍA</h2>
                                <p class="AD">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <button class="AA">Ver mas</button>
                            </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out res" data-carousel-item>
                        <img src="@/assets/Slide3.png"
                            class="ee absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                            <div class="imgg">
                                <h2 class="AB">Propiedades</h2>
                                <h2 class="AC">VENTA</h2>
                                <p class="AD">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <button class="AA">Ver mas</button>
                            </div>
                    </div>
                </div>
                <!-- Slider indicators -->
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                        data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                        data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                        data-carousel-slide-to="2"></button>
                </div>
                <!-- Slider controls -->
                <button type="button"
                    class="resP absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="resP absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
     .days-one-regular {
        font-size: 2rem;
     
    }
    .AB{

    }
    .AC{
        font-family: "Days One", sans-serif;
        font-size: 2rem;
        font-style: normal;
    }
    .AD{  }
    .AA{
        margin-top: 1rem;
        border-radius: 7px;
        border: solid 2px;
        padding: 0.2rem 2rem;
    }
    .clld{
        height: 70vh;
    }
    .ee{
        width: 80%;        
    }
    .imgg{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        margin-top: 7%;
        width: 20%;
        height: 70%;
        position: absolute;
        right: 0;
        background-image: url("@/assets/card.png");
        background-size: cover;
        border-radius: 10px;
        color: aliceblue;
    }
    .🌟 {
        width: 80vw;
        min-height:90vh;
    }
    .👣 {
        min-height:100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    .card {
        width: 300px;
        height: 200px;
    }
    @media(width < 450px){
        .resP{
            margin-top: -6.2rem;            
        }

        .res{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            justify-items: center;

        }
        .ee{
            width: 100%;            
            margin-top: 12vh;
            position: absolute;
            top: 0;
        }
        .imgg{
            position: absolute;
            width: 100%;

            height: 35vh;        
        }
        .clld{
            height:75vh;
        }
    }
</style>