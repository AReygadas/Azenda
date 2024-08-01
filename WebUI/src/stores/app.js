// Utilities
import { defineStore } from 'pinia'
import {ref, reactive } from 'vue'
export const useAppStore = defineStore('app', () =>{
  const UserInfo = ref({});
  function ChangeUserInfo(val){
    UserInfo.value = val;
  }
  return {
    UserInfo,
    ChangeUserInfo
  }
})
