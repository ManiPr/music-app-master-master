import React from 'react'

import playlist from '../../assets/images/PLAYLIST RADIO.png'
import './Music.css'
import heart from '../../assets/images/SVG File/heart.svg'
import more from '../../assets/images/SVG File/more.svg'
import play from '../../assets/images/SVG File/Play.svg'
import {MusicData} from '../../datas'
export default function Music() {

  return (
    <>
    {MusicData.length === 0 ? (
      <p>No music data available.</p>
    ) : (
      MusicData.map((music,index) => (
        <div  key={index} className='music'>
        <img className='music__image' src={playlist}/>
        <p className='music__name'>{music.Name}</p>
        <div className='music__content center'>
          <img className='recently-played__button' src={heart}/>
          <img className='recently-played__button' src={play}/>
          <img className='recently-played__button' src={more}/>
          </div>
    </div>
      ))
    )}
  </>
  )
  
}
