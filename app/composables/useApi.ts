import { API_ENDPOINTS} from '~/constants/api'

interface RequestOptions {
  method?: string
  headers?: Record<string, string>
  body?: any
}

interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: number | null
}

export const useApi = () => {
  const config = useRuntimeConfig()
  const token = useCookie('auth_token')

  /**
   * Construye la URL completa del API
   */
  const getApiUrl = (endpoint: string): string => {
    return `${config.public.apiBaseUrl}${endpoint}`
  }

  /**
   * Realiza una petición HTTP a la API
   */
  const request = async <T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const url = `${config.public.apiBaseUrl}${endpoint}`

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...options.headers
      }

      // Agregar token si existe
      if (token.value) {
        headers['Authorization'] = `Bearer ${token.value}`
      }

      const response = await fetch(url, {
        method: options.method || 'GET',
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined
      })

      // Si el token expiró
      if (response.status === 401) {
        // Limpiar token
        token.value = null
        // Redirigir a login si es necesario
        navigateTo('/login')
      }

      const data = await response.json()

      if (!response.ok) {
        return {
          data: null,
          error: data.message || 'Error en la petición',
          status: response.status
        }
      }

      return {
        data,
        error: null,
        status: response.status
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
      return {
        data: null,
        error: errorMessage,
        status: null
      }
    }
  }

  /**
   * GET request
   */
  const get = <T = any>(endpoint: string, headers?: Record<string, string>) => {
    return request<T>(endpoint, { method: 'GET', headers })
  }

  /**
   * POST request
   */
  const post = <T = any>(
    endpoint: string,
    body: any,
    headers?: Record<string, string>
  ) => {
    return request<T>(endpoint, { method: 'POST', headers, body })
  }

  /**
   * PUT request
   */
  const put = <T = any>(
    endpoint: string,
    body: any,
    headers?: Record<string, string>
  ) => {
    return request<T>(endpoint, { method: 'PUT', headers, body })
  }

  /**
   * DELETE request
   */
  const del = <T = any>(endpoint: string, headers?: Record<string, string>) => {
    return request<T>(endpoint, { method: 'DELETE', headers })
  }

  /**
   * Login
   */
  const login = async (email: string, password: string) => {
    const { data, error, status } = await post(API_ENDPOINTS.LOGIN, {
      email,
      password
    })

    if (data && data.token) {
      token.value = data.token
    }

    return { data, error, status }
  }

  /**
   * Register
   */
  const register = async (
    email: string,
    password: string,
    name: string
  ) => {
    return post(API_ENDPOINTS.REGISTER, {
      email,
      password,
      name
    })
  }

  /**
   * Logout
   */
  const logout = () => {
    token.value = null
    navigateTo('/login')
  }

  return {
    request,
    getApiUrl,
    get,
    post,
    put,
    del,
    login,
    register,
    logout
  }
}
