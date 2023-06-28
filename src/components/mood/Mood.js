import React from 'react'
import bgimage from '../../assets/images/PARTY.png'
import './Mood.css'
export default function Mood() {
  return (
    <div className='mood'>
    <img className='mood__image' src={bgimage} />
    </div>
  )
}
