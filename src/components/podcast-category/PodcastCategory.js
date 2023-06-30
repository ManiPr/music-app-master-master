import React from 'react'
import bgimage from '../../assets/images/STORIES.png'
import './PodcastCategory.css'
import {podcastCategory} from '../../datas'

export default function PodcastCategory() {
  return (
    <>
    {podcastCategory.length === 0 ? (
      <p>No artist data available.</p>
    ) : (
      podcastCategory.map((category,index) => (
        <div  key={index} className='podcast-category'>
        <img className='podcast-category__image' src={bgimage} />
        </div>
      ))
    )}
    </>
  )
}

    