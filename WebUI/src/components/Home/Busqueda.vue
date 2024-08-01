<template>
    <div>
        <h1>Busca tu propiedad en AZENDA</h1>
        <div>
            <div>
                <v-select
                label="Select"
                :items="['Venta','Renta']"
                variant="solo-filled"
                ></v-select>
            </div>
           
            <div>
                <v-autocomplete
                    label="Autocomplete"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="solo-filled"
                ></v-autocomplete>
            </div>
            <div>
                <v-text-field label="Label" variant="solo-filled"></v-text-field>
            </div>
            <div>
                <v-btn>
                  Buscar
                </v-btn>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>