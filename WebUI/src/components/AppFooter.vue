<template>
  <v-footer class="🥑" style="m-5">
    <v-row class="🥩">
      <div class="🍃 nn">
       <h1 class="🍕 days-one-regular res">CONTACTO</h1>
      </div>
      <div class="🍂">
        <img src="@/assets/logo.png" alt="" class="🥥 nn">
        <v-icon icon="mdi-phone" class="🍣" ></v-icon><span class="fnt2">449 441 7601</span>
        <br/>
        <v-icon icon="mdi-email" class="🍣"></v-icon><span class="fnt2" >info@azenda.mx</span><br/>
        <v-icon icon="mdi-map-marker" class="🍣"></v-icon>
        <span class="fnt2" >C. Parras 243 Fracc. Parras</span><br/>
        <span class="🍙 fnt2" >Aguascalientes</span><br/>
        <span class="🍙 fnt2" >México</span>
        <br/>
        <img src="@/assets/logo.png" alt="" class="nnn">
        
        <p>Todas las medidas enunciadas son meramente orientativas, 
          las medidas exactas serán las que se expresen en el titulo 
          de propiedad de cada inmueble. Todas las fotos, imagenes y
          videos son meramente ilustrativos y no contractuales. Los 
           precios enunciados son normalmente orientativos y no contractuales
        </p>
        <br/>
          <div class="line"></div>
        <p> ©2024 Azenda Bienes Raizes y Gestoria</p>

      </div>
    </v-row>
  </v-footer>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
  .days-one-regular {
    font-family: "Days One", sans-serif;
    font-size: 2rem;
    font-style: normal;
  }
.🍙{
  margin-left: 2.3rem;
}
.🍣{
  color: rgb(214, 171, 86);
  margin-right: 1rem;
}
p{
  font-size: 0.8rem;
}
.line{
  height: 1px;
  background-color: darkolivegreen;
}
.🍔{
  margin-left: 2rem;
}
.🥥{
  position: absolute;
  margin-left: 57%;
  width: 8rem;
}
.🥑{
 max-width: 100vw;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 5rem;
 background-color: transparent;

}
.🥩{
  background-color: rgb(255, 255, 255);
  width: 80vw;
  padding: 2rem;
}
  .🍕 {
    margin-left: 2rem;
    transform: rotate(-90deg);   
    color: rgb(223, 223, 223);

  }  
  /* Estilo adicional para asegurar la legibilidad en el ejemplo */
  .🍃 {
    display: flex;
    justify-content: right;
    align-items: center;    
  }
 .🍂{width:60%;}
  .nnn{display: none;}
  @media(width < 450px){
    .nn{display: none !important;}
    .🥩{width: 95vw !important; padding: 0.2rem;}
    .🥑{padding: 1.3rem;}
    .🍂{width:100%;}
    .nnn{display: flex;height: 3.5rem; margin: 1rem; }

  }
  
</style>
