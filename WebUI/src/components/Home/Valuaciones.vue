<script setup>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
.varela-round-regular {
    font-family: "Varela Round", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
    @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
    .days-one-regular {
        font-family: "Days One", sans-serif;
        font-size: 2rem;
        font-style: normal;
    }
    .gg{
        color: rgb(255, 255, 255);
        padding: 0.5rem 1rem;
        border-radius: 5px;
        background-color: rgb(214, 171, 86);
        text-transform: capitalize;
    }
</style>
<template>
 <v-container>
    <v-row>
    <v-col>
        <h1 class="days-one-regular">VALUACIONES</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ut provident architecto eum impedit nostrum repudiandae ex maiores, voluptatum, in iste culpa quia assumenda eaque esse quis eius, modi facilis.</p>
    </v-col>
    <v-col>
        <v-text-field label="Nombre" variant="solo-filled"></v-text-field>
        <v-text-field label="Celular" variant="solo-filled"></v-text-field>
        <v-text-field label="Email" variant="solo-filled"></v-text-field>
        <v-textarea label="Descripción del inmueble" variant="solo-filled"></v-textarea>
        <v-btn variant="tonal" class="gg varela-round-regular">
            Gestoría
          </v-btn>
    </v-col>
</v-row>
 </v-container>
</template>