<template>
  <div>
    <!-- Header Card -->
    <div class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white">¡Bienvenido a Exams App!</h2>
      <p class="text-gray-600 dark:text-gray-400 mt-2">Has iniciado sesión correctamente. Este es tu panel de control.
      </p>
    </div>

    <!-- Cards de estadísticas -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <div class="text-center">
          <p class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Exámenes</p>
          <p class="text-4xl font-bold text-indigo-600 dark:text-indigo-400">0</p>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <div class="text-center">
          <p class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Aprobados</p>
          <p class="text-4xl font-bold text-green-600 dark:text-green-400">0</p>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <div class="text-center">
          <p class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Promedio</p>
          <p class="text-4xl font-bold text-purple-600 dark:text-purple-400">0%</p>
        </div>
      </div>
    </div>

    <!-- Sección de Organizaciones -->
    <div class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Mis Organizaciones</h3>
        <button
          class="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2">
          <span>+</span>
          Nueva Organización
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition p-6 cursor-pointer border border-gray-200 dark:border-slate-700">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h4 class="font-bold text-lg text-gray-800 dark:text-white">{ org.name }</h4>
              <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">{ org.description }</p>
            </div>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
            <div class="flex gap-4">
              <div>
                <p class="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">Exámenes</p>
                <p class="text-xl font-bold text-indigo-600 dark:text-indigo-400">0</p>
              </div>
              <div>
                <p class="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">Miembros</p>
                <p class="text-xl font-bold text-blue-600 dark:text-blue-400">0</p>
              </div>
            </div>
            <button
              class="px-3 py-1 bg-indigo-600 dark:bg-indigo-700 text-white text-sm rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">
              Entrar
            </button>
          </div>
        </div>
      </div>

      <div class="text-center py-12">
        <p class="text-gray-500 dark:text-gray-400 text-lg">No tienes organizaciones aún. ¡Crea una para empezar!</p>
      </div>
    </div>

    <!-- Sección de exámenes disponibles -->
    <div class="mb-8 border-t border-gray-200 dark:border-slate-700 pt-8">
      <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Exámenes Disponibles</h3>

      <div class="text-center py-12">
        <p class="text-gray-500 dark:text-gray-400 text-lg">No hay exámenes disponibles por el momento</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-6 border border-gray-200 dark:border-slate-700">
          <div class="flex justify-between items-start mb-3">
            <h4 class="font-bold text-lg text-gray-800 dark:text-white">{ exam.title }</h4>
            <span
              class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full font-semibold">
              { exam.questions } preguntas
            </span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{ exam.description }</p>
          <div class="flex justify-end">
            <button
              class="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  //middleware: 'auth'
  layout: 'app' // Use no layout for this page
})


</script>