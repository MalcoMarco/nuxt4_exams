<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
    <!-- Header Section -->
    <div class="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Mis Organizaciones</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1">Gestiona y crea tus organizaciones</p>
          </div>
          <nuxt-link to="/organizaciones/create" class="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2">
            <span class="text-xl">+</span>
            Nueva Organización
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar organizaciones..."
            class="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
          <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <!-- Organizations Grid -->
      <div v-if="filteredOrganizations.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="org in filteredOrganizations"
          :key="org.id"
          class="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition p-6 border border-gray-200 dark:border-slate-700 cursor-pointer group"
        >
          <!-- Organization Header -->
          <div class="mb-4">
            <div class="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold mb-3">
              {{ org.name.charAt(0).toUpperCase() }}
            </div>
            <nuxtLink :to="'/organizaciones/' + org.id">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {{ org.name }}
                </h3>
            </nuxtLink>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ org.description }}</p>
          </div>

          <!-- Organization Stats -->
          <div class="grid grid-cols-2 gap-4 py-4 border-y border-gray-200 dark:border-slate-700">
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">Exámenes</p>
              <p class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{{ org.examsCount }}</p>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">Miembros</p>
              <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ org.membersCount }}</p>
            </div>
          </div>

          <!-- Organization Footer -->
          <div class="flex gap-2 mt-4">
            <nuxtLink :to="'/organizaciones/' + org.id" class="flex-1 px-3 py-2 bg-indigo-600 dark:bg-indigo-700 text-white text-sm font-semibold rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">
              Entrar
            </nuxtLink>
            <UDropdownMenu v-if="org.role == 'Admin'" :items="orgItems(org)" :popper="{ placement: 'bottom-start' }">
                <button class="px-3 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded hover:bg-gray-200 dark:hover:bg-slate-600 transition">
                    ⋮
                </button>
            </UDropdownMenu>
          </div>

          <!-- Organization Role -->
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700">
            <span class="text-xs font-semibold text-gray-600 dark:text-gray-400">Rol: <span class="text-blue-600 dark:text-blue-400">{{ org.role }}</span></span>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m3.419 0H15m0 0h2m-2 0h2"></path>
        </svg>
        <h3 class="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
          {{ searchQuery ? 'No se encontraron organizaciones' : 'Sin organizaciones' }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          {{ searchQuery ? 'Intenta con otro término de búsqueda' : 'Crea una nueva organización para comenzar' }}
        </p>
        <button class="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition inline-flex items-center gap-2">
          <span>+</span>
          Nueva Organización
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Types
interface Organization {
  id: string
  name: string
  description: string
  examsCount: number
  membersCount: number
  role: string
}

// Data
const searchQuery = ref('')

// Mock data - reemplazar con datos reales desde API
const organizations = ref<Organization[]>([
  {
    id: '1',
    name: 'Matemáticas Avanzadas',
    description: 'Organizacion para exámenes de matemáticas',
    examsCount: 5,
    membersCount: 12,
    role: 'Admin'
  },
  {
    id: '2',
    name: 'Física General',
    description: 'Exámenes de física para estudiantes',
    examsCount: 3,
    membersCount: 8,
    role: 'Miembro'
  },
  {
    id: '3',
    name: 'Historia Mundial',
    description: 'Evaluaciones de historia mundial',
    examsCount: 7,
    membersCount: 15,
    role: 'Admin',
  }
])

const orgItems = (org: Organization) => {
  return [
    {
      label: 'Editar Organización',
      icon: 'i-lucide-edit',
      to: `/organizaciones/${org.id}/edit`
    },
    {
      label: 'Eliminar Organización',
      icon: 'i-lucide-trash',
      hidden: org.role !== 'Admin',
      onSelect: () => {
        // Lógica para eliminar organización
        console.log(`Eliminar organización ${org.id}`)
      }
    }
  ]
}
// Computed
const filteredOrganizations = computed(() => {
  if (!searchQuery.value) return organizations.value

  const query = searchQuery.value.toLowerCase()
  return organizations.value.filter(org =>
    org.name.toLowerCase().includes(query) ||
    org.description.toLowerCase().includes(query)
  )
})

definePageMeta({
  layout: 'app'
})
</script>