import {} from 'react'
import './logo.css'
import { LoaderPinwheel } from 'lucide-react';

function Logo() {
  return (
    <div className="logo">
      <LoaderPinwheel className="primary logo_icons"/>
      <h1>now<span className='primary'>Pay</span></h1>
    </div>
  )
}

export default Logo