// src/composables/useJwt.js
import {jwtDecode} from 'jwt-decode';
import { ref, computed } from 'vue';

export function useJwt() {
  const token = ref(localStorage.getItem('jwt_token'));

  const decodedToken = computed(() => {
    if (token.value) {
      try {
        return jwtDecode(token.value);
      } catch (e) {
        console.error('Error decoding token:', e);
        return null;
      }
    }
    return null;
  });

  const isAuthenticated = computed(() => {
    return !!token.value && decodedToken.value 
      && decodedToken.value.exp > Date.now() / 1000;
  });

  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem('jwt_token', newToken);
  };

  const clearToken = () => {
    token.value = null;
    localStorage.removeItem('jwt_token');
  };

  return {
    token,
    decodedToken,
    isAuthenticated,
    setToken,
    clearToken
  };
}