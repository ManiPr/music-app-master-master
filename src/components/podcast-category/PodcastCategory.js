import React from 'react'
import bgimage from '../../assets/images/STORIES.png'
import './PodcastCategory.css'
export default function PodcastCategory() {
  return (
    <div className='podcast-category'>
    <img className='podcast-category__image' src={bgimage} />
    </div>
  )
}
