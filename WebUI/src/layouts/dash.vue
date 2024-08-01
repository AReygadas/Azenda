<style scoped>
.🍉 {
    min-height: 100vh;
}

.🍒 {
    border: none;
    box-shadow: 4px 5px 19px 0px rgba(85, 85, 85, 0.75);
    -webkit-box-shadow: 4px 5px 19px 0px rgba(85, 85, 85, 0.75);
    -moz-box-shadow: 4px 5px 19px 0px rgba(85, 85, 85, 0.75);
    background-color: #012d52;
}

.☕ {
    margin: 1rem;
}
</style>
<template>
    <v-app>
        <v-main>
            <v-card>
                <v-layout class="🍉">
                    <!--  image="https://static.vecteezy.com/system/resources/previews/005/912/823/original/abstract-vertical-background-with-a-combination-of-light-blue-and-dark-blue-gradient-colors-free-vector.jpg"  -->
                    <v-navigation-drawer class="🍒" v-model="drawer" :rail="rail" permanent theme="dark  "
                        expand-on-hover>
                        <!-- @click="rail = false" 
                        https://spng.pngfind.com/pngs/s/16-168087_wikipedia-user-icon-bynightsight-user-image-icon-png.png 
                    -->
                        <v-list-item
                        prepend-avatar="https://spng.pngfind.com/pngs/s/16-168087_wikipedia-user-icon-bynightsight-user-image-icon-png.png"
                        :title="userData.mail" nav>
                    <template v-slot:append>
                        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                    </template>
                    </v-list-item>
                        <v-divider></v-divider>
                        <v-list density="compact" nav>
                            <RouterLink to="/dash">
                                <v-list-item prepend-icon="mdi-home-city" title="Propiedades" value="propiedades">
                                </v-list-item>
                            </RouterLink>

                            <RouterLink to="/dash/users"><v-list-item prepend-icon="mdi-account" title="My Account"
                                    value="account"></v-list-item></RouterLink>

                            <RouterLink to="/dash/properties"><v-list-item prepend-icon="mdi-account-group-outline"
                                    title="Users" value="users"></v-list-item></RouterLink>
                                </v-list>
                                
                                <v-divider class="border-opacity-75"></v-divider>
                                <v-list-item title="Catalogos"></v-list-item>
                        
                                <v-divider class="border-opacity-75"></v-divider>
                                <v-list-item prepend-icon="mdi-exit-to-app" title="Salir" value="exit"
                                    @click="logout"></v-list-item>
                    </v-navigation-drawer>
                    <v-main class="☕">
                        <router-view />
                    </v-main>
                </v-layout>
            </v-card>
        </v-main>
    </v-app>
</template>

<script setup>
import { useJwt } from '@/Helpers/useJWT';
import { useRouter } from 'vue-router';
import { ref, onBeforeMount, reactive } from 'vue'

const { decodedToken, isAuthenticated } = useJwt();
const { clearToken } = useJwt();
const router = useRouter();
const userData = reactive({
    mail: ''
})
const logout = () => {
    clearToken();
    router.push('/');
    // Realizar otras acciones de cierre de sesión
};
onBeforeMount(() => {
    console.log(decodedToken.value);
    const m = decodedToken.value;
    userData.mail = m.username
})
const drawer = ref(true)
const rail = ref(true)


</script>