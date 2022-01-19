import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getDeviceById } from "../../services/devicesServices";

//context
export const StatisticsContext = createContext({})

//hook
export const useStatisticsContext = () => useContext(StatisticsContext)

//provider
export const StatisticsContextProvider = ({ children }) => {
  const [deviceItem, setDeviceItem] = useState()
  const [label, setLabel] = useState([])
  const [co2, setCo2] = useState([])

  useEffect(() => {
    getDeviceItemById()
    deviceItem?.stateHistory?.forEach((e) => {
      setLabel([...label, ...e?.at])
      setCo2([...co2, ...e?.co2])
    })
  }, [])

  const getDeviceItemById = async () => {

    try {
      if (window) var id = window.location.pathname.split('/')
      let tmp = await getDeviceById(id[2])
      if (tmp?.device) setDeviceItem(tmp?.device)
    } catch (error) {
      console.log(`error`, error)
    }

  }



  const value = useMemo(() => ({
    deviceItem, label, co2
  }),
    // eslint-disable-next-line no-sequences
    [deviceItem, label, co2])
  return (
    <StatisticsContext.Provider value={value}>
      {children}
    </StatisticsContext.Provider>
  )
}