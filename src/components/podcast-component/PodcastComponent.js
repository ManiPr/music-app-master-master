import React from 'react'
import playlist from '../../assets/images/PodCast-Component.png'
import heart from '../../assets/images/SVG File/heart.svg'
import more from '../../assets/images/SVG File/more.svg'
import play from '../../assets/images/SVG File/Play.svg'
import './PodcastComponent.css'
export default function PodcastComponent({props}) {
  return (
    <div className='podcast center'>
        <div className='podcast__wrapper'>
            <div className='podcast__container-image'>
            <img className='podcast__image' src={playlist} alt='Playlist' />
            </div>
     
        <div className='podcast__information center'>
        <p className='podcast__name'>
        David Tennant Does a Podc...
        </p>
        <p className='podcast__creator'>David Tennant </p>
        </div>
      
      <div className='podcast__content center'>
        <img className='recently-played__button' src={heart} alt='Heart' />
        <img className='recently-played__button' src={play} alt='Play' />
        <img className='recently-played__button' src={more} alt='More' />
      </div>
        </div>
    
    </div>
  )
}
