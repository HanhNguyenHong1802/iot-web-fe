import { useEffect, useState } from "react"
import { getUserInfo } from "../services/authenService"

const useAuthen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    setLoading(true)
    getUserInfo()
      .then((res) => {
        if (Object.keys(res).length !== 0 && res.constructor === Object) {
          setIsAuthenticated(true)
          setUsername(res?.username)
        }
        else{
          setIsAuthenticated(false)
        }
      })
      .catch((error) => {
        console.log(`error`, error)
        setIsAuthenticated(false)
      })
      .finally(() =>
        setLoading(false))
  }, [isAuthenticated])
  console.log(`isAuthenticated`, isAuthenticated)
  return { isAuthenticated, loading, username }
}
export default useAuthen