<style scoped>

</style>
<template>
    <v-container>
        <v-row>      
            <v-col>

                <v-select
                label="Select"
                :items="roles"
                item-title="name"
                item-value="name"
                return-object
                v-model="newUs.roles"
                multiple
                variant="solo-filled"
              ></v-select>
            </v-col>
        </v-row>
        <v-row>
            {{ newUs }}
        </v-row>
    </v-container>
</template>
<script setup>
    import {ref, reactive}  from 'vue'
    const newUs = reactive({
        gid:'',
        roles:[]
    })
    const roles = ref([
        {
            name:"Admin",
            isActive: true
        },{
            name:"User",
            isActive: true
        }
    ])
</script>