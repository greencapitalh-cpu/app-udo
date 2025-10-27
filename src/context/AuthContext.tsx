import { createContext, useContext, useState, ReactNode } from 'react'

type User = { id?: string; email?: string; name?: string }
type AuthContextType = {
  user: User | null
  setUser: (u: User | null) => void
  token: string | null
  setToken: (t: string | null) => void
}
const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }){
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth(){
  const ctx = useContext(AuthContext)
  if(!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
