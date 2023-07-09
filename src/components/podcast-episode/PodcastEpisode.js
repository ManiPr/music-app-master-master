import React from 'react'
import img from '../../assets/images/Podcast Episode.png'
import './PodcastEpisode.css'
export default function PodcastEpisode() {
  return (
    <>
        <div className='podcast-episode'>
            <div className='podcast-episode__wrapper center'>
                <img className='podcast-episode__image' src={img} alt='Not found' />
                <div className='podcast-episode__content'>
                    <h4 className='podcast-episode__title'>We're Losing Our Jobs? - Dude Soup #212</h4>
                    <p className='podcast-episode__caption'>I see the crotch of a polygon man</p>
                </div>
            </div>
        </div>
    </>
  )
}
