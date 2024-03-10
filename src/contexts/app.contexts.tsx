import React, { createContext, useState } from 'react'
import { getAccessTokenFromLS } from 'src/utils/auth'

interface AppContextInterFace {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}
const initialAppContext: AppContextInterFace = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null
}
export const AppContext = createContext<AppContextInterFace>(initialAppContext)

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AppContext.Provider>
}
