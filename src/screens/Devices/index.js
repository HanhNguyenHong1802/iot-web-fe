import React, { useState } from 'react'
import tw from 'twin.macro'
import NavTop from '../../layout/components/NavTop/NavTop'
import CardDevice from './components/CardDevice'
import { DevicesContextProvider, useDevicesContext } from './context'


const AddDevices = tw.button`bg-primary-1000 hover:bg-primary-1300 text-white font-bold py-2 px-4 rounded-lg float-right mr-8 border-none cursor-pointer`

const DevicesImpl = () => {
  const [showFormAdd, setShowFormAdd] = useState(false)
  const { listDevices } = useDevicesContext()


  const CardContainer = tw.div`flex flex-wrap w-full place-content-center`
  return (
    <>
      <NavTop />
      <h1 style={{marginTop:'8rem'}}>Devices Management</h1>
      <CardContainer>
        {listDevices.length > 0 && listDevices?.map((i) => (
          <CardDevice item={i} />
        ))}

      </CardContainer>
      {/* <CardDevice/> */}
    </>
  )
}
const Devices = () => <DevicesContextProvider><DevicesImpl /></DevicesContextProvider>
export default Devices
