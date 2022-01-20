import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getDeviceById } from "../../services/devicesServices";

//context
export const StatisticsContext = createContext({})

//hook
export const useStatisticsContext = () => useContext(StatisticsContext)

//provider
export const StatisticsContextProvider = ({ children }) => {
  const [deviceItem, setDeviceItem] = useState([])

  useEffect(() => {
    getDeviceItemById()
  }, [])

  const getDeviceItemById = async () => {
    try {
      if (window) var id = window.location.pathname.split('/')
      let tmp = await getDeviceById(id[2])
      setDeviceItem(tmp?.device?.stateHistory || {})
    } catch (error) {
      console.log(`error`, error)
    }

  }



  const value = useMemo(() => ({
    deviceItem
  }),
    // eslint-disable-next-line no-sequences
    [deviceItem])
  return (
    <StatisticsContext.Provider value={value}>
      {children}
    </StatisticsContext.Provider>
  )
}