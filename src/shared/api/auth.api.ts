import { API_URL } from './api-url'

type RequestOptions = RequestInit & {
  json?: unknown
}

export async function api<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const { json, headers, ...rest } = options

  const response = await fetch(`${API_URL}${path}`, {
    ...rest,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: json ? JSON.stringify(json) : rest.body,
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}
