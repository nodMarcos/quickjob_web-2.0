import axios from 'axios'
import { parseCookies } from 'nookies'

const getTokenFromCookies = () => {
  const cookies = parseCookies()
  return cookies.token || null
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    cache: 'no-cache',
  },
})

apiClient.interceptors.request.use((config) => {
  const token = getTokenFromCookies()

  if (token) {
    config.headers.Authorization = token
  }
  return config
})

export default apiClient