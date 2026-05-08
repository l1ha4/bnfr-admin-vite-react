const normalizeApiUrl = (url: string): string => url.replace(/\/+$/, '')

const isLoopbackHost = (hostname: string): boolean =>
  hostname === 'localhost' || hostname === '127.0.0.1'

const getDevProxyApiUrl = (apiUrl?: string): string | null => {
  if (typeof window === 'undefined' || !import.meta.env.DEV) {
    return null
  }

  if (!isLoopbackHost(window.location.hostname)) {
    return null
  }

  if (!apiUrl) {
    return '/api'
  }

  const isAbsoluteHttpUrl = /^https?:\/\//i.test(apiUrl)

  if (!isAbsoluteHttpUrl) {
    return null
  }

  const parsedApiUrl = new URL(apiUrl)

  if (!isLoopbackHost(parsedApiUrl.hostname)) {
    return '/api'
  }

  return null
}

const rawApiUrl = import.meta.env.VITE_API_URL?.trim()
const devProxyApiUrl = getDevProxyApiUrl(rawApiUrl)

if (!rawApiUrl && !devProxyApiUrl) {
  throw new Error('VITE_API_URL is not set')
}

const API_URL = normalizeApiUrl(devProxyApiUrl ?? rawApiUrl ?? '')

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
