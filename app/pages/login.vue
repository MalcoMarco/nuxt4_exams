<template>
  <div class="bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
      <div class="p-8">
        <div class="text-center mb-10">
          <a href="/" class="text-3xl font-bold text-blue-600 dark:text-blue-400">TestMaster</a>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mt-4">¡Bienvenido de nuevo!</h2>
          <p class="text-gray-500 dark:text-gray-400 mt-2">Ingresa a tu cuenta para continuar</p>
        </div>
  
        <button
          class="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-600 transition duration-300 shadow-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4" />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853" />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05" />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335" />
          </svg>
          Continuar con Google
        </button>
  
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200 dark:border-slate-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white dark:bg-slate-800 text-gray-400 dark:text-gray-500">o usa tu correo</span>
          </div>
        </div>
  
        <form v-on:submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
            <input type="email" placeholder="nombre@ejemplo.com"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
          </div>
  
          <div>
            <div class="flex justify-between mb-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
              <a href="#" class="text-sm text-blue-600 dark:text-blue-400 hover:underline">¿La olvidaste?</a>
            </div>
            <input type="password" placeholder="••••••••"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
          </div>
  
          <button type="submit"
            class="w-full bg-blue-600 dark:bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition shadow-lg shadow-blue-200 dark:shadow-blue-900 active:scale-[0.98]">
            Iniciar Sesión
          </button>
        </form>
  
        <p class="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm">
          ¿No tienes una cuenta?
          <a href="#" class="text-blue-600 dark:text-blue-400 font-bold hover:underline">Regístrate gratis</a>
        </p>
      </div>
  
      <div class="bg-gray-50 dark:bg-slate-900 px-8 py-4 border-t border-gray-100 dark:border-slate-700 flex justify-center gap-4 text-xs text-gray-400 dark:text-gray-500">
        <a href="#" class="hover:text-gray-600 dark:hover:text-gray-400 transition">Privacidad</a>
        <span>•</span>
        <a href="#" class="hover:text-gray-600 dark:hover:text-gray-400 transition">Términos</a>
        <span>•</span>
        <a href="#" class="hover:text-gray-600 dark:hover:text-gray-400 transition">Ayuda</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: false
})

const handleLogin = async () => {
  // Add your login logic here
  console.log('Login handler called')
  navigateTo('/home')
}

</script>
