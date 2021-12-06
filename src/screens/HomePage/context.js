import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getListCities, getSpecializedCity } from "../../services/airVisualService";

//context
export const MapContext = createContext({})

//hook
export const useMapContext = () => useContext(MapContext)

//provider
export const MapContextProvider = ({ children }) => {
  const [geocodingCity, setGeocodingCity] = useState([])
  const getCitiesLocation = async () => {
    let listInfoCity = await getListCities("Hanoi", "Vietnam") || []

    let promise = listInfoCity?.map((item) => getSpecializedCity(item?.city, "Hanoi", "Vietnam"))

    let tmpParam = await Promise.all(promise)
    setGeocodingCity(tmpParam)
  }

  useEffect(() => {
    const fetchData = async () => {
      getCitiesLocation()
    }
    fetchData()
  }, [])

  const value = useMemo(() => ({
    geocodingCity
  }),
    [geocodingCity])
  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  )
}