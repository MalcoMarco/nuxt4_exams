const domain = useRuntimeConfig().public.apiBaseUrl

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${domain}/auth/login`,
  REGISTER: `${domain}/auth/register`,
  LOGOUT: `${domain}/auth/logout`,
  REFRESH_TOKEN: `${domain}/auth/refresh`,

  // Users
  USERS: '/users',
  USER_PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile/update',

  // Exams
  EXAMS: '/exams',
  EXAM_DETAIL: (id: string) => `/exams/${id}`,
  SUBMIT_EXAM: (id: string) => `/exams/${id}/submit`,
}

// Ejemplo de uso en un composable:
// const { getApiUrl } = useApi()
// const loginUrl = getApiUrl(API_ENDPOINTS.LOGIN)
      