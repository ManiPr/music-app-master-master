import React from 'react'

import playlist from '../../assets/images/PLAYLIST RADIO.png'
import './Music.css'
import heart from '../../assets/images/SVG File/heart.svg'
import more from '../../assets/images/SVG File/more.svg'
import play from '../../assets/images/SVG File/Play.svg'
export default function Music({props}) {
  return (
    <>
      {/* <div className='music__image-container'>
      <img className='music__image' src={playlist} alt='Playlist' />
      </div>
      <p className='music__name'>
        {props.Name}
      </p> */}
       <div className='music center'>
        <div className='music__wrapper'>
            <div className='music__container-image'>
            <img className='music__image' src={playlist} alt='Playlist' />
            </div>
     
        <div className='music__information center'>
        <p className='music__name'>
        David Tennant Does a Podc...
        </p>
        <p className='music__creator'>Like Count</p>
        </div>
        </div>
    
    </div>
    <div className='music__content center'>
        <img className='recently-played__button' src={heart} alt='Heart' />
        <img className='recently-played__button' src={play} alt='Play' />
        <img className='recently-played__button' src={more} alt='More' />
      </div>
    </>
  );
}
