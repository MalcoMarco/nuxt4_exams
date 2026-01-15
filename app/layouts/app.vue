<template>
    <div class="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <!-- Navbar -->
        <nav
            class="bg-white shadow-md sticky top-0 z-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        <nuxt-link to="home">Exams App</nuxt-link>
                    </h1>
                    <div class="flex items-center gap-4">
                        <nuxt-link to="/examen">Banco de Exámenes</nuxt-link>
                        <nuxt-link to="/organizaciones">Organizaciones</nuxt-link>
                        <UColorModeButton />

                        <UDropdownMenu :items="items" :popper="{ placement: 'bottom-start' }">
                            <UUser name="John Doe" description="Software Engineer" trailing-icon="i-lucide-chevron-down"
                                :avatar="{
                                    src: 'https://i.pravatar.cc/150?u=john-doe',
                                    icon: 'i-lucide-image'
                                }" />
                        </UDropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Contenido principal -->
        <div class="max-w-6xl mx-auto px-4 py-12">
            <slot />
        </div>

    </div>
</template>
<script setup lang="ts">

import type { DropdownMenuItem } from '@nuxt/ui'
const handleLogout = () => {
    // Implementar lógica de cerrar sesión
    console.log('Cerrar sesión')
}
const items = ref<DropdownMenuItem[][]>([
    [{
        label: 'Profile',
        icon: 'i-lucide-user',
        to: '/profile'
    },
    {
        label: 'Settings',
        icon: 'i-lucide-settings',
        to: '/settings'
    }
    ],
    [{
        label: 'Logout',
        icon: 'i-lucide-log-out',
        onSelect: handleLogout
    }]
])
</script>