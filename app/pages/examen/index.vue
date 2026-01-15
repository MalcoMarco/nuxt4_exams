<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
    <!-- Header Section -->
    <div class="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Mis Exámenes</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1">Accede a tus exámenes y realiza evaluaciones</p>
          </div>
          
          <nuxt-link to="/examen/create">
            <button class="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2">
              <span class="text-xl">+</span>
              Nuevo Examen
            </button>
          </nuxt-link> 
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <!-- Filters Section -->
      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-slate-700 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Buscar</label>
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Buscar por título..."
                class="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Categoría</label>
            <select
              v-model="selectedCategory"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
              <option value="">Todas las categorías</option>
              <option value="mathematics">Matemáticas</option>
              <option value="science">Ciencias</option>
              <option value="history">Historia</option>
              <option value="language">Lenguaje</option>
            </select>
          </div>

          <!-- Difficulty Filter -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Dificultad</label>
            <select
              v-model="selectedDifficulty"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
              <option value="">Todas las dificultades</option>
              <option value="easy">Fácil</option>
              <option value="medium">Medio</option>
              <option value="hard">Difícil</option>
            </select>
          </div>

          <!-- Sort -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Ordenar por</label>
            <select
              v-model="sortBy"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
              <option value="recent">Más Recientes</option>
              <option value="name">Nombre (A-Z)</option>
              <option value="difficulty">Dificultad</option>
              <option value="attempts">Más Intentados</option>
            </select>
          </div>
        </div>

        <!-- Clear Filters -->
        <div class="mt-4 flex gap-2">
          <button
            @click="clearFilters"
            class="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition"
          >
            Limpiar Filtros
          </button>
          <span class="text-sm text-gray-600 dark:text-gray-400 flex items-center">
            {{ filteredExams.length }} exámenes encontrados
          </span>
        </div>
      </div>

      <!-- Exams Grid -->
      <div v-if="filteredExams.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="exam in filteredExams"
          :key="exam.id"
          class="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition p-6 border border-gray-200 dark:border-slate-700 cursor-pointer group"
        >
          <!-- Header -->
          <div class="mb-4">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition flex-1">
                {{ exam.title }}
              </h3>
              <span :class="[
                'text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2',
                exam.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                exam.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              ]">
                {{ getDifficultyLabel(exam.difficulty) }}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ exam.description }}</p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3 py-4 border-y border-gray-200 dark:border-slate-700 mb-4">
            <div class="text-center">
              <p class="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">Preguntas</p>
              <p class="text-xl font-bold text-indigo-600 dark:text-indigo-400">{{ exam.questions }}</p>
            </div>
            <div class="text-center">
              <p class="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">Duración</p>
              <p class="text-xl font-bold text-blue-600 dark:text-blue-400">{{ exam.duration }}m</p>
            </div>
            <div class="text-center">
              <p class="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">Intentos</p>
              <p class="text-xl font-bold text-purple-600 dark:text-purple-400">{{ exam.attempts }}</p>
            </div>
          </div>

          <!-- Category and Status -->
          <div class="mb-4 space-y-2">
            <div class="flex items-center gap-2">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-semibold">
                {{ exam.category }}
              </span>
            </div>
            <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
              <span v-if="exam.completed" class="flex items-center gap-1">
                <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Completado
              </span>
              <span v-else class="text-gray-500 dark:text-gray-400">Aún no completado</span>
              <span>Por: {{ exam.organization }}</span>
            </div>
          </div>

          <!-- Action Button -->
          <button class="w-full px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
            {{ exam.completed ? 'Ver Resultado' : 'Comenzar' }}
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <h3 class="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
          {{ searchQuery || selectedCategory || selectedDifficulty ? 'No se encontraron exámenes' : 'Sin exámenes disponibles' }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          {{ searchQuery || selectedCategory || selectedDifficulty ? 'Intenta con otros filtros' : 'Pronto habrá exámenes disponibles' }}
        </p>
        <button
          @click="clearFilters"
          v-if="searchQuery || selectedCategory || selectedDifficulty"
          class="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Exam {
  id: string
  title: string
  description: string
  category: string
  difficulty: string
  questions: number
  duration: number
  attempts: number
  completed: boolean
  organization: string
  createdDate: string
}

// Data
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedDifficulty = ref('')
const sortBy = ref('recent')

// Mock data
const exams = ref<Exam[]>([
  {
    id: '1',
    title: 'Cálculo Diferencial',
    description: 'Examen sobre límites, derivadas e integrales',
    category: 'Matemáticas',
    difficulty: 'hard',
    questions: 25,
    duration: 90,
    attempts: 3,
    completed: true,
    organization: 'Matemáticas Avanzadas',
    createdDate: '2025-01-10'
  },
  {
    id: '2',
    title: 'Biología General',
    description: 'Conceptos fundamentales de biología celular y molecular',
    category: 'Ciencias',
    difficulty: 'medium',
    questions: 30,
    duration: 60,
    attempts: 2,
    completed: false,
    organization: 'Instituto de Ciencias',
    createdDate: '2025-01-09'
  },
  {
    id: '3',
    title: 'Historia de América',
    description: 'Eventos importantes de la historia americana',
    category: 'Historia',
    difficulty: 'medium',
    questions: 20,
    duration: 45,
    attempts: 5,
    completed: true,
    organization: 'Academia de Historia',
    createdDate: '2025-01-08'
  },
  {
    id: '4',
    title: 'Inglés Intermedio',
    description: 'Vocabulario, gramática y comprensión de lectura',
    category: 'Lenguaje',
    difficulty: 'medium',
    questions: 40,
    duration: 75,
    attempts: 1,
    completed: false,
    organization: 'Centro de Idiomas',
    createdDate: '2025-01-07'
  },
  {
    id: '5',
    title: 'Álgebra Lineal',
    description: 'Matrices, determinantes y espacios vectoriales',
    category: 'Matemáticas',
    difficulty: 'hard',
    questions: 22,
    duration: 85,
    attempts: 2,
    completed: false,
    organization: 'Matemáticas Avanzadas',
    createdDate: '2025-01-06'
  },
  {
    id: '6',
    title: 'Química Básica',
    description: 'Estructura atómica, reacciones químicas y estequiometría',
    category: 'Ciencias',
    difficulty: 'easy',
    questions: 15,
    duration: 50,
    attempts: 4,
    completed: true,
    organization: 'Instituto de Ciencias',
    createdDate: '2025-01-05'
  }
])

// Computed
const filteredExams = computed(() => {
  let result = exams.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(exam =>
      exam.title.toLowerCase().includes(query) ||
      exam.description.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (selectedCategory.value) {
    result = result.filter(exam => exam.category === selectedCategory.value)
  }

  // Difficulty filter
  if (selectedDifficulty.value) {
    result = result.filter(exam => exam.difficulty === selectedDifficulty.value)
  }

  // Sort
  const sorted = [...result]
  switch (sortBy.value) {
    case 'name':
      sorted.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'difficulty':
      const difficultyOrder: Record<string, number> = { easy: 1, medium: 2, hard: 3 }
      sorted.sort((a, b) => (difficultyOrder[a.difficulty] ?? 0) - (difficultyOrder[b.difficulty] ?? 0))
      break
    case 'attempts':
      sorted.sort((a, b) => b.attempts - a.attempts)
      break
    case 'recent':
    default:
      sorted.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime())
      break
  }

  return sorted
})

// Methods
const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedDifficulty.value = ''
  sortBy.value = 'recent'
}

const getDifficultyLabel = (difficulty: string) => {
  const labels = {
    easy: 'Fácil',
    medium: 'Medio',
    hard: 'Difícil'
  }
  return labels[difficulty] || difficulty
}

definePageMeta({
  layout: 'app'
})
</script>