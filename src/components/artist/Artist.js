import React from 'react'
import image from '../../assets/images/Lou Reed.png'
import  './Artist.css'
export default function Artist() {
  return (
    <>
    <div className='artist'>
      <img className='artist__image' src={image} />
      <p className='artist__name'>FeradonFrakhzad</p>

    </div>
    </>
  )
}
