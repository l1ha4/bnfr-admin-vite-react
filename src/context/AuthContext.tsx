import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  authApi,
  type LoginDto,
  type RegisterDto,
  type User,
} from '@/features/auth/api/api'

interface AuthContextValue {
  user: User | null
  isAuth: boolean
  isLoading: boolean
  login: (dto: LoginDto) => Promise<void>
  register: (dto: RegisterDto) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const checkAuth = useCallback(async () => {
    try {
      const user = await authApi.me()
      setUser(user)
      console.log('User authenticated:', user)
    } catch {
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = useCallback(async (dto: LoginDto) => {
    const user = await authApi.login(dto)
    setUser(user)
  }, [])

  const register = useCallback(async (dto: RegisterDto) => {
    const user = await authApi.register(dto)
    setUser(user)
  }, [])

  const logout = useCallback(async () => {
    await authApi.logout()
    setUser(null)
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth: Boolean(user),
        isLoading,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
