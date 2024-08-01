<style scoped>
.🍑 {
    width: 80vw;
    height:50vh;
    background-image: url("@/assets/btp.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center ;
    justify-items: center;    
    padding:14rem 10rem;    

    color: aliceblue;
}

.🍣 {
    width: 100vw;
    height: 80vh;
    padding: 5rem 10rem;
}

.🍕 {
    font-size: 2rem;
    font-weight: 700;
}

.tbs {
    font-size:0.9rem;
    width: 30vw;

}

.AAA {
    width: 100%;
    max-height: 3rem;
    margin: 2rem;
    display: flex;
    gap: 1rem;
}
.cccc{
    border: 2px solid #fff;
    padding: 5px 15px;
    background-color: rgb(12, 57, 92);
}
@media(width < 450px){
    .🍑 {
        width: 95vw;
        height: 60vh;
        background-image: url("@/assets/bg22.jpg");        
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;        
        color: aliceblue;
        padding:1rem 1rem;   
        margin-bottom: 2rem;
    }
    .🍣 {
        width: 100vw;
        height: 70vh;
        padding: 5vw;
    }
    .AAA{
        display: flex; gap: 1rem; flex-direction: column;
        margin-left: 0rem;
        width: 90vw;
    }
    .x1, .x2, .x3{width: 90% !important;}
    .tbs{display: flex;
        margin-top: 8.6rem;
        width: 95vw;
    }
    .cccc{width: 30vw;}
    .x3{height: 60vh;}
}

.x1{
    width: 10vw; color:black;
}
.x2{
    width: 15vw; color:black;
}
.x3{
    background-color: aliceblue;width: 30vw; color:black;
}
.mr{margin-top: -1rem}
</style>
<template>
    <v-row class="🍣">
        <v-row>
            <div class="🍑">
                <h1 class="🍕">Busca tu propiedad</h1>
                <h1 class="🍕 mr">en AZENDA</h1>
           
                   <div class="AAA">
                        
                       <select placeholder="En" class="x1" >
                           <option value="venta">Venta</option>
                           <option value="venta">Renta</option>
                           <option value="venta">Todos</option>
                        </select>
                        
                        <select placeholder="Tipo de inmueble" class="x2" >
                            <option value="venta">Casa</option>
                            <option value="venta">Departamento</option>
                            <option value="venta">Condominio</option>
                            <option value="venta">Residencial</option>
                            <option value="venta">Bodega</option>
                            <option value="venta">Terreno</option>
                            <option value="venta">Todos</option>
                            
                        </select>
                        <input placeholder="Buscar por ubicación, dirección o calle" type="text" class="x3" >
                        <button style="color: aliceblue;" class="cccc" >Buscar</button>
                    </div>
                
                <p class="tbs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore odit repellendus quo nulla
                    assumenda laborum sint culpa? Unde mollitia debitis alias. Necessitatibus numquam harum architecto
                    nisi ullam voluptates nam.
                </p>
            </div>
        </v-row>
        <v-row>

        </v-row>
    </v-row>
</template>
<script setup>

</script>
