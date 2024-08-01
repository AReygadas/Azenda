<template>
    <div style="background-color: white;">
        <v-row class="ss " >
            <div class="grid grid-cols-3 grid-rows-1 gap-1 px-60 resp  ">
                <div class="tjs">
                    <img src="@/assets/logo2.png" alt="" class="img1">
                    <span class="varela-round-regular t1 fnt2">MISIÓN</span>
                    <p class="hh" >
                        Brindar un servicio profesional y responsable de intermediacion en la compra, venta y alquiler
                        de inmuebles, buscado satisfacer al cliente atendiendo, comprendiendo y trabajando sobre sus
                        necesidades inmobiliarias especificas, y aprotando valor a los inversores en bienes raíces.
                    </p>
                </div>
                <div class="tjs">
                    <img src="@/assets/logo2.png" alt="" class="img1">
                    <span class="varela-round-regular fnt2">VISIÓN</span>
                    <p class="hh">
                        Ser una empresa lider en servicios inmobiliarios, referente absoluto de profecionalismo y
                        atencion personalizada.
                    </p>
                </div>
                <div class="tjs">
                    <img src="@/assets/logo2.png" alt="" class="img1">
                    <span class="varela-round-regular fnt2">VALORES</span>
                    <p class="hh">
                        Brindar un servicio profesional y responsable de intemediacion en la compra:
                    </p>
                    <ul class="hh">
                        <li>- Compromiso</li>
                        <li>- Integridaad</li>
                        <li>- Profecionalismo</li>
                        <li>- Responsabilidad</li>
                        <li>- Ética</li>
                    </ul>
                </div>
            </div>

        
        </v-row>

    </div>
</template>

<style scoped>
@media(width < 450px) {
    .img1 {
        width: 50vw;
    
    }
    .resp{
        display: flex;
        flex-direction: column;
    }
    .tjs{
        width: 100vw;
    }
    .som2{
       display: flex; 
       flex-direction: column;
       align-items: center;
       justify-content: center;
       width: 100vw;
       padding: 0;
       margin-left: 300px;

    }
    
    .col2{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        text-align:justify;
        padding-right:1rem;
    }
    
}


.🧊{
    color: rgb(255, 255, 255);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: rgb(214, 171, 86);
}
.col2{
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align:justify;
    padding-right: 20vw;
}
.col1{
    width: 50vw;
    display: flex;
    justify-content: end;
    padding: 2rem
}
.img003{
    height: 40vw;
}
.som2 {
    display: flex;
}

.varela-round-regular {

    font-size: 2rem;
}

.hh {
    font-family: "Varela Round", sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
}

.tjs {
    padding: 2rem;
}

.img1 {
    width: 200px;

}

svg {
    width: 10wv;
}

.imgsvg {
    width: 10vw;
}
</style>