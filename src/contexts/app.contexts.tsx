import React, { createContext, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessTokenFromLS, getProfileFromLs } from 'src/utils/auth'

interface AppContextInterFace {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}
const initialAppContext: AppContextInterFace = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLs(),
  setProfile: () => null
}
export const AppContext = createContext<AppContextInterFace>(initialAppContext)

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
