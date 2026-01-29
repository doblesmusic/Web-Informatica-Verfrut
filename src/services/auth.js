/**
 * Servicio de autenticación.
 * Ajusta API_BASE y LOGIN_ENDPOINT según tu backend.
 */
const API_BASE = import.meta.env.VITE_API_URL || 'https://api.verfrut.cl'
const LOGIN_ENDPOINT = '/login'

/**
 * Login con email y contraseña.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ token: string, productor: object }>}
 */
export async function login(email, password) {
  const url = `${API_BASE}${LOGIN_ENDPOINT}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const error = new Error('Email o contraseña incorrectos')
    error.status = response.status
    throw error
  }

  const data = await response.json()
  return data
}
