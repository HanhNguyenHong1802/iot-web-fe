import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { getUserInfo } from "../services/authenService"

const useAuthen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['userid']);
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    setLoading(true)
    getUserInfo()
      .then((res) => {
        if (Object.keys(res).length !== 0 && res.constructor === Object) {
          setIsAuthenticated(true)
          setUsername(res?.username)
          setCookie("userid", res?._id)
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

  return { isAuthenticated, loading, username }
}
export default useAuthen