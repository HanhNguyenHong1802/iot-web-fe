import React, { memo } from 'react'
import LineChart from './components/LineChart'
import { StatisticsContextProvider, useStatisticsContext } from './context'

const StatisticsImpl = () => {
  const { deviceItem, label, co2 } = useStatisticsContext()
  return (
    <>
      <LineChart label={label} co2={co2} />

    </>
  )
}
const Statistics = () => <StatisticsContextProvider><StatisticsImpl /></StatisticsContextProvider>
export default memo(Statistics)