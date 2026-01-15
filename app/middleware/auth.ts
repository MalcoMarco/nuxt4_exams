export default defineRouteMiddleware((to, from) => {
  const token = useCookie('auth_token')

  // Si no hay token y no estamos en login/register, redirigir a login
  if (!token.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }

  // Si hay token y tratamos de acceder a login, redirigir a home
  if (token.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/home')
  }
})
