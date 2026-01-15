<template>
    <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <!-- Header Section -->
        <div class="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-md">
            <div class="max-w-6xl mx-auto px-4 py-8">
                <div class="flex justify-between items-start gap-6">
                    <div class="flex items-start gap-6">
                        <!-- Organization Avatar -->
                        <div
                            class="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            {{ organization.acronym }}
                        </div>
                        <!-- Organization Info -->
                        <div>
                            <h1 class="text-3xl font-bold text-gray-800 dark:text-white">{{ organization.name }}</h1>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">{{ organization.short_description }}</p>
                            <div class="flex gap-6 mt-4 text-sm">
                                <span class="text-gray-600 dark:text-gray-400">
                                    <strong class="text-gray-800 dark:text-white">Categoría:</strong> {{
                                    organization.category }}
                                </span>
                                <span class="text-gray-600 dark:text-gray-400">
                                    <strong class="text-gray-800 dark:text-white">País:</strong> {{ organization.country
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Status Badge -->
                    <div class="mt-4">
                        <span :class="[
                            'inline-block px-4 py-2 rounded-full text-sm font-bold',
                            organization.is_public
                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                        ]">
                            {{ organization.is_public ? '🌐 Pública' : '🔒 Privada' }}
                        </span>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex gap-2">
                        <button
                            class="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition">
                            Editar
                        </button>
                        <button
                            class="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition">
                            ⋮
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-6xl mx-auto px-4 py-12">
            <!-- Statistics Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div
                    class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-slate-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Exámenes</p>
                            <p class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mt-2">{{
                                organization.examsCount }}</p>
                        </div>
                        <div
                            class="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-slate-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Miembros</p>
                            <p class="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">{{
                                organization.membersCount }}</p>
                        </div>
                        <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 19H9a6 6 0 016-6v0a6 6 0 016 6v1"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-slate-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Tu Rol</p>
                            <p class="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">{{
                                organization.userRole }}</p>
                        </div>
                        <div
                            class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                            <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs Navigation -->
            <div
                class="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 mb-8">
                <div class="flex border-b border-gray-200 dark:border-slate-700">
                    <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
                        'flex-1 py-4 px-6 font-semibold text-center transition',
                        activeTab === tab.id
                            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
                    ]">
                        {{ tab.name }}
                    </button>
                </div>
            </div>

            <!-- Tab Content -->
            <div>
                <!-- Descripción Tab -->
                <div v-if="activeTab === 'description'"
                    class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-slate-700">
                    <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Descripción</h2>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ organization.description }}</p>

                    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4">Información de Contacto</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p class="text-gray-600 dark:text-gray-400 text-sm mb-1">Email</p>
                                <p class="text-gray-800 dark:text-white font-semibold">{{ organization.email }}</p>
                            </div>
                            <div>
                                <p class="text-gray-600 dark:text-gray-400 text-sm mb-1">Teléfono</p>
                                <p class="text-gray-800 dark:text-white font-semibold">{{ organization.phone }}</p>
                            </div>
                            <div>
                                <p class="text-gray-600 dark:text-gray-400 text-sm mb-1">Sitio Web</p>
                                <a :href="organization.website" target="_blank"
                                    class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                                    {{ organization.website }}
                                </a>
                            </div>
                            <div>
                                <p class="text-gray-600 dark:text-gray-400 text-sm mb-1">Ubicación</p>
                                <p class="text-gray-800 dark:text-white font-semibold">{{ organization.city }}, {{
                                    organization.country }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Exámenes Tab -->
                <div v-if="activeTab === 'exams'" class="space-y-6">
                    <div class="flex justify-between items-center">
                        <h2 class="text-xl font-bold text-gray-800 dark:text-white">Exámenes de la Organización</h2>
                        <button
                            class="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                            + Nuevo Examen
                        </button>
                    </div>

                    <div v-if="organization.exams && organization.exams.length > 0"
                        class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div v-for="exam in organization.exams" :key="exam.id"
                            class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="font-bold text-lg text-gray-800 dark:text-white">{{ exam.title }}</h3>
                                <span
                                    class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full font-semibold">
                                    {{ exam.questions }} preguntas
                                </span>
                            </div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ exam.description }}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xs text-gray-500 dark:text-gray-400">{{ exam.attempts }}
                                    intentos</span>
                                <button
                                    class="px-3 py-1 bg-indigo-600 dark:bg-indigo-700 text-white text-sm rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">
                                    Ver
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-else
                        class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-12 text-center border border-gray-200 dark:border-slate-700">
                        <p class="text-gray-500 dark:text-gray-400 text-lg mb-4">No hay exámenes aún</p>
                        <button
                            class="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition inline-flex items-center gap-2">
                            <span>+</span>
                            Crear Primer Examen
                        </button>
                    </div>
                </div>

                <!-- Miembros Tab -->
                <div v-if="activeTab === 'members'" class="space-y-6">
                    <div class="flex justify-between items-center">
                        <h2 class="text-xl font-bold text-gray-800 dark:text-white">Miembros de la Organización</h2>
                        <button @click="showAddMemberModal = true"
                            class="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2">
                            <span>+</span>
                            Agregar Miembro
                        </button>
                    </div>

                    <div v-if="organization.members && organization.members.length > 0"
                        class="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-slate-700">
                        <table class="w-full">
                            <thead class="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                                <tr>
                                    <th
                                        class="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Nombre</th>
                                    <th
                                        class="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Email</th>
                                    <th
                                        class="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Rol</th>
                                    <th
                                        class="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Unido</th>
                                    <th
                                        class="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="member in organization.members" :key="member.id"
                                    class="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div
                                                class="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-700 text-white flex items-center justify-center font-bold">
                                                {{ member.name.charAt(0).toUpperCase() }}
                                            </div>
                                            <span class="font-semibold text-gray-800 dark:text-white">{{ member.name
                                                }}</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-gray-600 dark:text-gray-400">{{ member.email }}</td>
                                    <td class="px-6 py-4">
                                        <span :class="[
                                            'px-3 py-1 rounded-full text-sm font-semibold',
                                            member.role === 'Admin' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                        ]">
                                            {{ member.role }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm">{{ member.joinedDate
                                        }}</td>
                                    <td class="px-6 py-4 text-center">
                                        <button v-if="organization.userRole === 'Admin'"
                                            class="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition">
                                            ✕
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-else
                        class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-12 text-center border border-gray-200 dark:border-slate-700">
                        <p class="text-gray-500 dark:text-gray-400 text-lg mb-4">No hay miembros en esta organización
                        </p>
                        <button @click="showAddMemberModal = true"
                            class="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition inline-flex items-center gap-2">
                            <span>+</span>
                            Agregar Primer Miembro
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Member Modal -->
        <div v-if="showAddMemberModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
                class="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full p-8 border border-gray-200 dark:border-slate-700">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Agregar Miembro</h2>

                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Email del Miembro *
                        </label>
                        <input v-model="newMember.email" type="email" placeholder="miembro@ejemplo.com"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Rol *
                        </label>
                        <select v-model="newMember.role"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                            <option value="">Selecciona un rol</option>
                            <option value="Admin">Admin</option>
                            <option value="Miembro">Miembro</option>
                            <option value="Revisor">Revisor</option>
                        </select>
                    </div>
                </div>

                <div class="flex gap-4 mt-8">
                    <button @click="showAddMemberModal = false"
                        class="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                        Cancelar
                    </button>
                    <button @click="addMember"
                        class="flex-1 px-4 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Member {
    id: string
    name: string
    email: string
    role: string
    joinedDate: string
}

interface Exam {
    id: string
    title: string
    description: string
    questions: number
    attempts: number
}

interface Organization {
    id: string
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
    examsCount: number
    membersCount: number
    userRole: string
    members: Member[]
    exams: Exam[],
    is_public?: boolean,
}

const activeTab = ref('description')
const showAddMemberModal = ref(false)
const newMember = ref({ email: '', role: '' })

const tabs = [
    { id: 'description', name: 'Descripción' },
    { id: 'exams', name: 'Exámenes' },
    { id: 'members', name: 'Miembros' }
]

// Mock data - reemplazar con datos reales desde API
const organization = ref<Organization>({
    id: '1',
    name: 'Matemáticas Avanzadas',
    acronym: 'MAV',
    short_description: 'Organización para exámenes de matemáticas avanzadas',
    description: 'Somos una organización dedicada a la educación en matemáticas avanzadas. Ofrecemos exámenes de calidad para estudiantes y profesionales que desean evaluar sus conocimientos en cálculo, álgebra lineal y análisis matemático.',
    email: 'contacto@matematicas.com',
    phone: '+52 (555) 123-4567',
    website: 'https://www.matematicas.com',
    category: 'Educación',
    country: 'México',
    city: 'Ciudad de México',
    examsCount: 5,
    membersCount: 12,
    userRole: 'Admin',
    members: [
        { id: '1', name: 'Juan Pérez', email: 'juan@ejemplo.com', role: 'Admin', joinedDate: '2025-01-01' },
        { id: '2', name: 'María García', email: 'maria@ejemplo.com', role: 'Miembro', joinedDate: '2025-01-05' },
        { id: '3', name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Revisor', joinedDate: '2025-01-10' }
    ],
    exams: [
        { id: '1', title: 'Cálculo I', description: 'Examen de cálculo diferencial', questions: 25, attempts: 45 },
        { id: '2', title: 'Álgebra Lineal', description: 'Matrices y sistemas lineales', questions: 20, attempts: 32 }
    ],
    is_public: false,
})

const addMember = () => {
    if (newMember.value.email && newMember.value.role) {
        console.log('Agregando miembro:', newMember.value)
        showAddMemberModal.value = false
        newMember.value = { email: '', role: '' }
        // Aquí conectar con la API para agregar miembro
    }
}

definePageMeta({
    layout: 'app'
})
</script>