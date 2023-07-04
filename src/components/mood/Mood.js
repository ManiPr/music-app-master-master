import React from 'react'
import bgimage from '../../assets/images/PARTY.png'
import './Mood.css'
import {moodsData} from '../../datas'

export default function Mood() {
  return (
    <>
    {moodsData.length === 0 ? (
      <p>No artist data available.</p>
    ) : (
      moodsData.map((category, index) => (
        <div className='mood'>
        <img className='mood__image' src={bgimage} />
        </div>
      ))
     
    )}
    </>
  )
}
