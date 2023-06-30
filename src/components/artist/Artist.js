import React from 'react'
import image from '../../assets/images/Lou Reed.png'
import  './Artist.css'
import {artistData} from '../../datas'
export default function Artist() {
  return (
    <>
    {artistData.length === 0 ? (
      <p>No artist data available.</p>
    ) : (
      artistData.map((artist) => (
        <div className='artist'>
        <img className='artist__image' src={image} />
        <p className='artist__name'>{artist.Name}</p>
        </div>
      ))
    )}
  </>
  )
}

  