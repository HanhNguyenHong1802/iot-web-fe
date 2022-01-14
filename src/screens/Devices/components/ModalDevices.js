import React from 'react'
import { Edit2, X } from 'react-feather'
import tw from 'twin.macro'
import '../style.css'

const LabelText = tw.label`float-left mb-3`
const InputToggle = tw.input`sr-only`
const LineInput = tw.div`w-10 h-4 bg-gray-400 rounded-full shadow-inner`
const DotStyle = tw.div`divide-dotted absolute w-6 h-6 bg-white rounded-full shadow-default transition-default`

const ModalDevices = ({item}) => {
  return (
    <>
      <div className="containerDevice">
        <div className="interior">
          <a className="btn" href="#open-modal"><Edit2 /></a>
        </div>
      </div>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close"><X /></a>
          <h1>Device</h1><br />
          <LabelText>Device Name</LabelText>
          <input type="text" className='inputdevice' placeholder='Device Name' />
          <LabelText>Device State</LabelText>
          <InputToggle id="toogleA" type="checkbox" className="sr-only" checked={item?.connectState === 'ON'} />
          <LineInput />
          <DotStyle style={{ left: '-0.25rem', top: '-0.25rem' }} className='dot' />
          <div><small>Check out</small></div>
          <a href="https://aminoeditor.com" target="_blank">👉 Amino: Live CSS Editor for Chrome</a>
        </div>
      </div>
    </>
  )
}
export default ModalDevices
