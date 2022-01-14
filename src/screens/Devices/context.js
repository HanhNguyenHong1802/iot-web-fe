import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { deleteDeviceById, getUserDevices } from "../../services/devicesServices";

//context
export const DevicesContext = createContext({})

//hook
export const useDevicesContext = () => useContext(DevicesContext)

//provider
export const DevicesContextProvider = ({ children }) => {
  const [listDevices, setListDevices] = useState([])

  useEffect(() => {
    getListDevices()
  }, [])
  const getListDevices = async () => {
    const res = await getUserDevices()
    setListDevices(res?.devices)
  }

  const deleteDevice = async (id) => {
    const res = await deleteDeviceById(id)
  }

  const value = useMemo(() => ({
    listDevices, getListDevices, deleteDevice
  }),
    // eslint-disable-next-line no-sequences
    [listDevices])
  return (
    <DevicesContext.Provider value={value}>
      {children}
    </DevicesContext.Provider>
  )
}