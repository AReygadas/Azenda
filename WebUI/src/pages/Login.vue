<script setup>
  import {ref,reactive, inject, computed } from 'vue';
  import { useJwt } from '@/Helpers/useJWT'
  import { useRouter } from 'vue-router';
  import loader2 from '@/components/loader2.vue'
  
  const isLoader = ref(false);
  const { setToken, isAuthenticated} = useJwt();
  const router = useRouter();
  const P = inject('Post');
  const validation = ref('')
  const user = ref(null);
  const data = reactive({
    email:'',
    password:''
  })
  

  const handleLogin =()=>{
    isLoader.value = true;
    P('user/singin',data).then(res=>{
      if(res==null){
        console.error('error de usuario')
        validation.value = 'Usuario o contraseña incorrecto'       
      }else{
        setToken(res)
        console.log(res)
      
         
      
        
        router.push('/dash');
      }
      isLoader.value = false;
    }).catch(()=>{
      console.error('Error al iniciar session')
       validation.value = 'Error al iniciar session'
      isLoader.value = false;
     })
  }


</script>

<template>
<div v-if="isLoader" class="🍆">
  <loader2  />   
</div>
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
     <a href="/"> <img class="mx-auto h-35 w-auto" src="@/assets/logo.png"></a>
      <h2 class="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicia Sesion</h2>
    </div>
  
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
          <div class="mt-2">
            <input v-model="data.email" id="email" name="email" type="email" autocomplete="email" required class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
      
          </div>
          <div class="mt-2">
            <input 
            v-model="data.password"
            id="password" 
            name="password" 
            type="password" 
            autocomplete="current-password" 
            required 
            class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="text-sm " style="color:red">
          {{ validation }}
        </div>
        <div class="text-sm">
          <a href="/Administracion" class="font-semibold text-sky-700 hover:text-yellow-500">Perdiste tu contraseña?</a>
        </div>
        <div>
          <button 
               @click="handleLogin"
              class="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
         </div>
      <!-- <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
      </p> -->
    </div>
  </div>
  
</template>

<style scoped>
  .🍆{
    min-height: 100%;
    min-width: 100vw;
    position: absolute;
    margin: auto;
    background-color: rgba(250, 250, 250, .50);
  }
</style>