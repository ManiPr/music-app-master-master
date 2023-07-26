import React from 'react'
import './Music.css'

import heart from '../../assets/images/SVG File/heart.svg'
import more from '../../assets/images/SVG File/more.svg'
import play from '../../assets/images/SVG File/Play.svg'
export default function Music({props}) {
  import React from 'react'
import './Music.css'

import heart from '../../assets/images/SVG File/heart.svg'
import more from '../../assets/images/SVG File/more.svg'
import play from '../../assets/images/SVG File/Play.svg'
export default function Music({props}) {
{console.log(require('../../assets/images/Musics/LP5.png'));}
  return (
    <>
       <div className='music center'>
        <div className='music__wrapper'>
            <div className='music__container-image'>
            <img className='music__image'  src={require(`../../assets/images/Musics/${props.Image}`)} alt='Playlist' />
            </div>
     
        <div className='music__information center'>
        <p className='music__name'>
        {props.Name}
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

}
