import React from 'react'
import bgimage from '../../assets/images/HIP - HOP.png'
import './Category.css'
import {categoryData} from '../../datas'
export default function Category() {
  return (
   
    <>
    {categoryData.length === 0 ? (
      <p>No artist data available.</p>
    ) : (
      categoryData.map((category,index) => (
        <div  key={index} className='category'>
        <img className='category__image' src={bgimage} />
      </div>
      ))
    )}
    </>
    
    )
}

