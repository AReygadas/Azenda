<style>
    header{
        background: transparent;
        position: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        z-index: 2000;
    }
    nav{
      margin-top: -2rem;
        width: 90vw;
    }
    .🎶{
      height: 10vh;
      margin-top: 1rem;
    }
    .mm1{
     margin-top: 5rem;
     z-index: 2000;
    }
</style>
<template>
    <header >
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
              <RouterLink to="/">
                    <span class="sr-only">Azenda</span>
                    <img :src="Logo" class="🎶" />
                  </RouterLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton class="flex items-center gap-x-1 text-sm font-sans leading-6 text-gray-900 font-black">
              Propiedades
              <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                  <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div class="flex-auto">
                      <a :href="item.href" class="block font-sans text-gray-900 font-black">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-sans leading-6 text-gray-900 hover:bg-gray-100">
                    <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
  
          <RouterLink to=""> <a class="text-sm font-sans leading-6 text-gray-900 font-black">Gestoría</a></RouterLink>
          <RouterLink to=""> <a class="text-sm font-sans leading-6 text-gray-900 font-black">Servicios Juridicos</a></RouterLink>
          <RouterLink to=""> <a class="text-sm font-sans leading-6 text-gray-900 font-black">Socios</a></RouterLink>
          <RouterLink to="/Contact"> <a class="text-sm font-sans leading-6 text-gray-900 font-black">Contáctanos</a></RouterLink>

        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <RouterLink to="/singin">
            <a class="text-sm font-sans leading-6 text-gray-900">Inicia sesión<span aria-hidden="true">&rarr;</span></a>
          </RouterLink>
        </div>
      </nav>
      
      <Dialog as="div" class="lg:hidden " @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10 " />
        <DialogPanel class=" mm1 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Azenda</span>
              <img :src="Logo.src">
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Cerrar</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-sans leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-sans leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-sans leading-7 text-gray-900 hover:bg-gray-50">Gestoria</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-sans leading-7 text-gray-900 hover:bg-gray-50">Servicios Juridicos</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-sans leading-7 text-gray-900 hover:bg-gray-50">Socios</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-sans leading-7 text-gray-900 hover:bg-gray-50">Contactanos</a>
                
              </div>
              <div class="py-6">
                <a href="/singin" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-sans leading-7 text-gray-900 hover:bg-gray-50">Inicia Sesion</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  <script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import Logo from '@/assets/logo.png'

  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    HomeIcon ,
    StarIcon ,
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'Todas las propiedades', description: 'Encuentra tu mejor opcion', href: '#', icon: HomeIcon  },
    { name: 'Exclusivas', description: 'Propedades en ventra exclusivas de Azenda', href: '#', icon: StarIcon },
  ]
  const callsToAction = [
    { name: 'Conoce Mas', href: '#', icon: PlayCircleIcon },
    { name: 'Contactanos', href: '#', icon: PhoneIcon },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>
   