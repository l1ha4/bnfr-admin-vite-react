const normalizeApiUrl = (url: string): string => url.replace(/\/+$/, '')

const rawApiUrl = import.meta.env.VITE_API_URL?.trim()

if (!rawApiUrl) {
  throw new Error('VITE_API_URL is not set')
}

const API_URL = normalizeApiUrl(rawApiUrl)

if (typeof window !== 'undefined') {
  const isHttpsPage = window.location.protocol === 'https:'
  const isHttpApi = API_URL.startsWith('http://')

  if (isHttpsPage && isHttpApi) {
    throw new Error(
      'Invalid API URL: HTTPS frontend cannot use HTTP API with cookie auth. Use HTTPS API URL in VITE_API_URL.',
    )
  }
}

export { API_URL }
