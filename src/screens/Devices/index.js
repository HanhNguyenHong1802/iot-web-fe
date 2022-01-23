import React, { useState } from 'react'
import tw from 'twin.macro'
import NavTop from '../../layout/components/NavTop/NavTop'
import AddModal from './components/AddModal'
import CardDevice from './components/CardDevice'
import { DevicesContextProvider, useDevicesContext } from './context'


const DevicesImpl = () => {
  const { listDevices, setOpenAddModal, openAddModal } = useDevicesContext()

  const CardContainer = tw.div`flex flex-wrap w-full place-content-center z-50`
  const AddButton = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg border-none float-right mr-5 cursor-pointer`
  return (

    <>
        <img className="sun item-1"
             src="https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/07_sun_smile_happy_emoticon_weather_smiley-512.png"></img>
        <img className="sun item-2"
             src="https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/07_sun_smile_happy_emoticon_weather_smiley-512.png"></img>
        <img className="sun item-3"
             src="https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/07_sun_smile_happy_emoticon_weather_smiley-512.png"></img>
        <NavTop />
      <h1 style={{ marginTop: '8rem' }}>Devices Management</h1>
      <AddButton onClick={() => setOpenAddModal(true)}>+ Add Device</AddButton>
      <CardContainer>
        {listDevices.length > 0 && listDevices?.map((i) => (
          <CardDevice item={i} />
        ))}

      </CardContainer>
      {/* <CardDevice/> */}
      {openAddModal && <AddModal />}
    </>
  )
}
const Devices = () => <DevicesContextProvider><DevicesImpl /></DevicesContextProvider>
export default Devices
