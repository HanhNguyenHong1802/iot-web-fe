import React, { useState } from 'react'
import tw from 'twin.macro'
import '../style.css'
import { ChevronRight, Edit2 } from 'react-feather'
import ModalDevices from './ModalDevices'

const ToggleContainer = tw.div`flex items-center justify-center w-full mb-12`
const LabelToggle = tw.label`flex items-center cursor-pointer ml-5`
const InputToggle = tw.input`sr-only`
const LineInput = tw.div`w-10 h-4 bg-gray-400 rounded-full shadow-inner`
const DotStyle = tw.div`divide-dotted absolute w-6 h-6 bg-white rounded-full shadow-default transition-default`
const CardContainer = tw.div`shadow-xl rounded-xl min-w-1/4 m-6`

const CardDevice = ({ item }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <CardContainer>
      <ToggleContainer>
        <div style={{ display: 'block', padding: '1rem' }}>
          <h2>Device's id: {item?._id}</h2>
          <h2>Device's name: {item?.deviceName}</h2>
          <h2>Device's location: {item?.location}</h2>
        </div>
        <LabelToggle
          for="toogleA"
        >
          <div style={{ position: 'relative', display: 'flex', paddingRight: '1rem' }}>
            {/* <InputToggle id="toogleA" type="checkbox" className="sr-only" checked={item?.connectState==='ON'} />
            <LineInput />
            <DotStyle style={{ left: '-0.25rem', top: '-0.25rem' }} className='dot'/> */}

            <ModalDevices item={item} />

          </div>
        </LabelToggle>
        
      </ToggleContainer>

    </CardContainer>
  )
}
export default CardDevice
