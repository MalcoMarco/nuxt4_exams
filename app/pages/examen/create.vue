<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
    <!-- Header Section -->
    <div class="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex items-center gap-4 mb-2">
          <a href="/examen" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition">
            ← Volver
          </a>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Crear Nuevo Examen</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">Completa los detalles y agrega preguntas para tu examen</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <form @submit.prevent="handleSubmit" class="space-y-8">
        <!-- Información del Examen -->
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-slate-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Información del Examen</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Title -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Título del Examen *
              </label>
              <input
                v-model="examForm.title"
                type="text"
                placeholder="ej: Cálculo Diferencial"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>

            <!-- Category -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Categoría *
              </label>
              <select
                v-model="examForm.category"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              >
                <option value="">Selecciona una categoría</option>
                <option value="mathematics">Matemáticas</option>
                <option value="science">Ciencias</option>
                <option value="history">Historia</option>
                <option value="language">Lenguaje</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Descripción del Examen
            </label>
            <textarea
              v-model="examForm.description"
              placeholder="Describe brevemente el contenido y objetivos del examen..."
              rows="4"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
            ></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Difficulty -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Dificultad *
              </label>
              <select
                v-model="examForm.difficulty"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              >
                <option value="">Selecciona dificultad</option>
                <option value="easy">Fácil</option>
                <option value="medium">Medio</option>
                <option value="hard">Difícil</option>
              </select>
            </div>

            <!-- Duration -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Duración (minutos) *
              </label>
              <input
                v-model.number="examForm.duration"
                type="number"
                placeholder="90"
                min="1"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>

            <!-- Passing Score -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Calificación Mínima (%) *
              </label>
              <input
                v-model.number="examForm.passingScore"
                type="number"
                placeholder="60"
                min="0"
                max="100"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
          </div>
        </div>

        <!-- Questions Section -->
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-slate-700">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white">Preguntas</h2>
            <button
              type="button"
              @click="addQuestion"
              class="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2"
            >
              <span>+</span>
              Agregar Pregunta
            </button>
          </div>

          <div v-if="questions.length === 0" class="text-center py-12">
            <p class="text-gray-500 dark:text-gray-400 mb-4">Aún no hay preguntas. Agrega la primera pregunta.</p>
          </div>

          <div v-for="(question, index) in questions" :key="question.id" class="mb-8 p-6 border-2 border-gray-200 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-700">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">Pregunta {{ index + 1 }}</h3>
              <button
                type="button"
                @click="removeQuestion(index)"
                class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition font-bold"
              >
                ✕
              </button>
            </div>

            <!-- Question Text Editor -->
            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Enunciado de la Pregunta *
              </label>
              <textarea
                v-model="question.text"
                placeholder="Escribe la pregunta aquí..."
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-white dark:text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                required
              ></textarea>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Puedes usar texto sin formato. Para editor rico, edita después</p>
            </div>

            <!-- Question Type -->
            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Pregunta *
              </label>
              <select
                v-model="question.type"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              >
                <option value="multiple_choice">Opción Múltiple</option>
                <option value="true_false">Verdadero/Falso</option>
                <option value="short_answer">Respuesta Corta</option>
              </select>
            </div>

            <!-- Options/Alternatives -->
            <div v-if="question.type !== 'short_answer'" class="mb-6">
              <div class="flex justify-between items-center mb-4">
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Alternativas *
                </label>
                <button
                  type="button"
                  @click="addOption(index)"
                  class="text-sm px-3 py-1 bg-indigo-600 dark:bg-indigo-700 text-white rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
                >
                  + Opción
                </button>
              </div>

              <div v-for="(option, optionIndex) in question.options" :key="option.id" class="mb-3 p-3 bg-white dark:bg-slate-800 rounded border border-gray-300 dark:border-slate-600">
                <div class="flex gap-3">
                  <!-- Correct Answer Checkbox -->
                  <div class="flex items-center">
                    <input
                      :id="`correct-${question.id}-${option.id}`"
                      v-model="option.isCorrect"
                      type="checkbox"
                      class="w-4 h-4 rounded cursor-pointer accent-green-600"
                    />
                  </div>

                  <!-- Option Text -->
                  <div class="flex-1">
                    <input
                      v-model="option.text"
                      type="text"
                      placeholder="Escribe la alternativa..."
                      class="w-full px-3 py-2 rounded border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </div>

                  <!-- Remove Option -->
                  <button
                    type="button"
                    @click="removeOption(index, optionIndex)"
                    class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Marca la alternativa correcta con el checkbox</p>
            </div>

            <!-- Correct Answer for True/False -->
            <div v-if="question.type === 'true_false'" class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Respuesta Correcta *
              </label>
              <select
                v-model="question.correctAnswer"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              >
                <option value="">Selecciona la respuesta correcta</option>
                <option value="true">Verdadero</option>
                <option value="false">Falso</option>
              </select>
            </div>

            <!-- Explanation -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Explicación (Opcional)
              </label>
              <textarea
                v-model="question.explanation"
                placeholder="Proporciona una explicación de la respuesta correcta..."
                rows="3"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-white dark:text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Submit Buttons -->
        <div class="flex gap-4 justify-end">
          <a
            href="/examen"
            class="px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition"
          >
            Cancelar
          </a>
          <button
            type="submit"
            class="px-8 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Crear Examen
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  id: string
  text: string
  isCorrect: boolean
}

interface Question {
  id: string
  text: string
  type: string
  options: Option[]
  correctAnswer: string
  explanation: string
}

interface ExamForm {
  title: string
  description: string
  category: string
  difficulty: string
  duration: number | null
  passingScore: number | null
}

const examForm = ref<ExamForm>({
  title: '',
  description: '',
  category: '',
  difficulty: '',
  duration: null,
  passingScore: 60
})

const questions = ref<Question[]>([])

const addQuestion = () => {
  const newQuestion: Question = {
    id: `question-${Date.now()}`,
    text: '',
    type: 'multiple_choice',
    options: [
      { id: `option-${Date.now()}-1`, text: '', isCorrect: false },
      { id: `option-${Date.now()}-2`, text: '', isCorrect: true }
    ],
    correctAnswer: '',
    explanation: ''
  }
  questions.value.push(newQuestion)
}

const removeQuestion = (index: number) => {
  questions.value.splice(index, 1)
}

const addOption = (questionIndex: number) => {
  const question = questions.value[questionIndex]
  if (!question) return
  const newOption: Option = {
    id: `option-${Date.now()}`,
    text: '',
    isCorrect: false
  }
  question.options.push(newOption)
}

const removeOption = (questionIndex: number, optionIndex: number) => {
  const question = questions.value[questionIndex]
  if (!question) return
  if (question.options.length > 2) {
    question.options.splice(optionIndex, 1)
  } else {
    alert('Debe haber al menos 2 alternativas')
  }
}

const handleSubmit = async () => {
  try {
    // Validación
    if (!examForm.value.title || !examForm.value.category || !examForm.value.difficulty) {
      alert('Por favor completa la información básica del examen')
      return
    }

    if (questions.value.length === 0) {
      alert('Debes agregar al menos una pregunta')
      return
    }

    // Validar preguntas
    for (let i = 0; i < questions.value.length; i++) {
      const q = questions.value[i]
      if (!q || !q.text) {
        alert(`La pregunta ${i + 1} debe tener enunciado`)
        return
      }

      if (q.type === 'multiple_choice' || q.type === 'true_false') {
        const hasCorrect = q.type === 'multiple_choice' 
          ? q.options.some(opt => opt.isCorrect)
          : q.correctAnswer !== ''
        
        if (!hasCorrect) {
          alert(`La pregunta ${i + 1} debe tener una respuesta correcta`)
          return
        }
      }

      if ((q.type === 'multiple_choice' || q.type === 'true_false') && q.options.length < 2) {
        alert(`La pregunta ${i + 1} debe tener al menos 2 opciones`)
        return
      }
    }

    console.log('Examen a crear:', {
      exam: examForm.value,
      questions: questions.value
    })

    alert('¡Examen creado exitosamente!')
    // Aquí conectar con API
    // await navigateTo('/examen')
  } catch (error) {
    console.error('Error:', error)
    alert('Error al crear el examen')
  }
}

definePageMeta({
  layout: 'app'
})
</script>