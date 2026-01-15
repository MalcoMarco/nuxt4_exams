<template>
  <div>
    <nav class="bg-white shadow-sm sticky top-0 z-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                    <span class="text-2xl font-bold text-blue-600">TestMaster</span>
                </div>
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="#funcionalidades" class="hover:text-blue-600 transition text-gray-600 dark:text-gray-300">Funcionalidades</a>
                    <a href="#como-funciona" class="hover:text-blue-600 transition dark:text-gray-300">¿Cómo funciona?</a>
                    <UColorModeButton />
                    <nuxt-link to="/login" class="text-gray-600 font-medium dark:text-gray-300">Iniciar Sesión</nuxt-link>
                    <a href="#" class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Probar Gratis</a>
                </div>
            </div>
        </div>
    </nav>

    <header class="relative bg-white py-16 lg:py-24 dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-10 lg:mb-0">
                <h1 class="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight dark:text-white">
                    Crea exámenes en <span class="text-blue-600">segundos</span>, califica en un clic.
                </h1>
                <p class="mt-6 text-xl text-gray-600 dark:text-gray-300">
                    La plataforma definitiva para docentes y empresas que buscan evaluar conocimientos de forma rápida, segura y profesional.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row gap-4">
                    <a href="#" class="bg-blue-600 text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition dark:shadow-none dark:hover:bg-blue-500">
                        Empezar a Crear
                    </a>
                    <a href="#" class="border-2 border-gray-200 text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition dark:border-gray-700 dark:hover:bg-gray-800">
                        Ver Demostración
                    </a>
                </div>
            </div>
            <div class="lg:w-1/2 px-4">
                <div class="bg-blue-100 rounded-2xl p-4 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000" alt="Dashboard de Exámenes" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </header>

    <section id="funcionalidades" class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Todo lo que necesitas para evaluar</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition dark:border-gray-700 dark:bg-gray-900">
                    <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-magic text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3 ">Generación con IA</h3>
                    <p class="text-gray-600 dark:text-gray-300">Sube un texto o PDF y deja que nuestra IA genere preguntas de opción múltiple automáticamente.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition dark:border-gray-700 dark:bg-gray-900">
                    <div class="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-shield-alt text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Modo Seguro</h3>
                    <p class="text-gray-600 dark:text-gray-300">Evita el plagio con nuestro sistema de bloqueo de pestañas y aleatoriedad de preguntas.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition dark:border-gray-700 dark:bg-gray-900">
                    <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-chart-line text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Reportes en Vivo</h3>
                    <p class="text-gray-600 dark:text-gray-300">Observa el progreso de los estudiantes en tiempo real y obtén estadísticas de dificultad.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-blue-600 py-16">
        <div class="max-w-5xl mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Únete a los miles de educadores que ya están ahorrando tiempo.</h2>
            <button class="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                Registrarse Gratis
            </button>
        </div>
    </section>

    <footer class="bg-gray-900 text-gray-400 py-12">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="mb-4">© 2024 TestMaster. Todos los derechos reservados.</p>
            <div class="flex justify-center space-x-6">
                <a href="#" class="hover:text-white transition"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:text-white transition"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="hover:text-white transition"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </footer>
  </div>
</template>
