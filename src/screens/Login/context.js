import { createContext, useContext, useEffect, useMemo, useState } from "react";


//context
export const LoginContext = createContext({})

//hook
export const useLoginContext = () => useContext(LoginContext)

//provider
export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState([])




  const value = useMemo(() => ({

  }),
    [])
  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )
}
