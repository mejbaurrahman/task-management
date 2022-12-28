
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    const [user, setUser] = useState({});


    const auth= {}
  return (
    <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
  )
}
