import { z } from 'zod'

// Schema para Login
export const loginSchema = z.object({
  email: z
    .string()
    .email('El email debe ser válido')
    .min(1, 'El email es requerido'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .min(1, 'La contraseña es requerida')
})

export type LoginForm = z.infer<typeof loginSchema>

// Schema para Register
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .min(1, 'El nombre es requerido'),
  email: z
    .string()
    .email('El email debe ser válido')
    .min(1, 'El email es requerido'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .min(1, 'La contraseña es requerida'),
  confirmPassword: z
    .string()
    .min(1, 'Confirmar contraseña es requerido')
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  }
)

export type RegisterForm = z.infer<typeof registerSchema>

// Función helper para validar
export const validateForm = <T,>(schema: z.ZodSchema<T>, data: unknown) => {
  try {
    const validated = schema.parse(data)
    return {
      success: true,
      data: validated,
      errors: {} as Record<string, string>
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.issues.forEach((err) => {
        const path = err.path.join('.')
        errors[path] = err.message
      })
      return {
        success: false,
        data: null,
        errors
      }
    }
    return {
      success: false,
      data: null,
      errors: { general: 'Error al validar el formulario' }
    }
  }
}
