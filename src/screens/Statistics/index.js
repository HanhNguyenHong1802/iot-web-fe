import React, { memo } from 'react'
import LineChart from './components/LineChart'
import { StatisticsContextProvider, useStatisticsContext } from './context'
import NavTop from '../../layout/components/NavTop/NavTop';
import BarChart from './components/BarChart';
const StatisticsImpl = () => {
  const { deviceItem } = useStatisticsContext()
  return (
    <>
      <NavTop />
      <div style={{marginTop:'80px'}}>
        {/* <LineChart deviceItem={deviceItem} /> */}
        <BarChart deviceItem={deviceItem} />
      </div>

    </>
  )
}
const Statistics = () => <StatisticsContextProvider><StatisticsImpl /></StatisticsContextProvider>
export default Statistics