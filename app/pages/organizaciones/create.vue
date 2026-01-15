<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
    <!-- Header Section -->
    <div class="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="flex items-center gap-4 mb-2">
          <a href="/organizaciones" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition">
            ← Volver
          </a>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Crear Nueva Organización</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">Completa los detalles para crear tu organización</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <form @submit.prevent="handleSubmit" class="space-y-8">
        <!-- Información Básica -->
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-slate-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Información Básica</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Name -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Nombre de la Organización *
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="ej: Matemáticas Avanzada"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Máximo 100 caracteres</p>
            </div>

            <!-- Acronym -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Acrónimo *
              </label>
              <input
                v-model="form.acronym"
                type="text"
                placeholder="ej: MAV"
                maxlength="10"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition uppercase"
                required
              />
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Se usa en el icono de la organización</p>
            </div>
          </div>

          <!-- Short Description -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Descripción Corta *
            </label>
            <input
              v-model="form.short_description"
              type="text"
              placeholder="Una frase breve que describa tu organización"
              maxlength="150"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ form.short_description.length }}/150 caracteres</p>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Descripción Detallada *
            </label>
            <textarea
              v-model="form.description"
              placeholder="Cuéntanos más sobre tu organización, su misión y objetivos..."
              rows="5"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              required
            ></textarea>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ form.description.length }}/500 caracteres</p>
          </div>
        </div>

        <!-- Información de Contacto -->
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-slate-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Información de Contacto</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Email -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="contacto@organizacion.com"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Teléfono
              </label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <!-- Website -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Sitio Web
              </label>
              <input
                v-model="form.website"
                type="url"
                placeholder="https://www.ejemplo.com"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <!-- Category -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Categoría *
              </label>
              <select
                v-model="form.category"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
                aria-label="categoria"
              >
                <option value="">Selecciona una categoría</option>
                <option value="education">Educación</option>
                <option value="corporate">Corporativa</option>
                <option value="nonprofit">Sin Fines de Lucro</option>
                <option value="community">Comunitaria</option>
                <option value="research">Investigación</option>
                <option value="training">Capacitación</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Información Adicional -->
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-slate-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Información Adicional</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Location -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                País
              </label>
              <input
                v-model="form.country"
                type="text"
                placeholder="ej: México"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <!-- City -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Ciudad
              </label>
              <input
                v-model="form.city"
                type="text"
                placeholder="ej: Ciudad de México"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>

          <!-- Photo Upload -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Foto/Logo de la Organización
            </label>
            <div class="flex items-center gap-6">
              <div v-if="photoPreview" class="w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-slate-600">
                <img :src="photoPreview" alt="Preview" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  aria-label="foto"
                  @change="handlePhotoUpload"
                  class="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 dark:file:bg-blue-700 file:text-white hover:file:bg-blue-700 dark:hover:file:bg-blue-600 cursor-pointer"
                />
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">PNG, JPG, GIF hasta 5MB</p>
              </div>
            </div>
          </div>

          <!-- Is Public Toggle -->
          <div class="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-slate-700">
            <div>
              <p class="font-semibold text-gray-700 dark:text-white">Organización Pública</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Permite que otros usuarios descubran tu organización</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                v-model="form.is_public"
                type="checkbox"
                class="sr-only peer"
                aria-label="is_public"
              />
              <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <!-- Submit Buttons -->
        <div class="flex gap-4 justify-end">
          <a
            href="/organizaciones"
            class="px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition"
          >
            Cancelar
          </a>
          <button
            type="submit"
            class="px-8 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Crear Organización
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface OrganizationForm {
  name: string
  acronym: string
  short_description: string
  description: string
  email: string
  phone: string
  website: string
  category: string
  country: string
  city: string
  photo: File | null
  is_public: boolean
}

const form = ref<OrganizationForm>({
  name: '',
  acronym: '',
  short_description: '',
  description: '',
  email: '',
  phone: '',
  website: '',
  category: '',
  country: '',
  city: '',
  photo: null,
  is_public: true
})

const photoPreview = ref<string>('')

const handlePhotoUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    form.value.photo = file
    const reader = new FileReader()
    reader.onload = (e) => {
      photoPreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const handleSubmit = async () => {
  try {
    // Aquí conectar con tu API
    console.log('Enviando datos:', form.value)
    
    // Validación básica
    if (!form.value.name || !form.value.acronym || !form.value.short_description || !form.value.description) {
      alert('Por favor completa todos los campos requeridos')
      return
    }

    // Simular envío
    alert('Organización creada exitosamente')
    // Redirigir a la lista de organizaciones
    // await navigateTo('/organizaciones')
  } catch (error) {
    console.error('Error al crear organización:', error)
    alert('Error al crear la organización')
  }
}

definePageMeta({
  layout: 'app'
})
</script>