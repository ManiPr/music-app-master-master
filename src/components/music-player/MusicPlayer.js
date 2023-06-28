import React from 'react'
import plus from '../../assets/images/SVG File/Plus.svg'
import addtofavorite from '../../assets/images/SVG File/Add to Favorite.svg'
import shuffle from '../../assets/images/SVG File/Shuffle 18.svg'
import repeat from '../../assets/images/SVG File/Repeat 18.svg'
import prevmusic from '../../assets/images/SVG File/prevmusic.svg'
import nextmusic from '../../assets/images/SVG File/nextmusic.svg'
import pause from '../../assets/images/SVG File/Pause.svg'
import volume from '../../assets/images/SVG File/Volume.svg'
import queue from '../../assets/images/SVG File/Queue.svg'
import bgimage from '../../assets/images/Image 59.png'
import './MusicPlayer.css'
export default function PlayMusic() {
  return (
    <div className='playerwrapper'>
   <div className='music-player center'>
    <div className='music-player__information center'>
      <img className='music-player__image' src={bgimage} />
      <div className='music-player__titles'>
        <p className='music-player__title'>Rebel Rebel</p>
        <p className='music-player__title music-player__icon--singer'>David Bowei</p>
      </div>
      <div className='music-player__icons center'>
        <img className='music-player__icon' src={addtofavorite} />
        <img className='music-player__icon' src={plus} />
      </div>
    </div>
    <div className='music-player__player center'>
      <div className='music-player__play center'>
        <img className='music-player__icon' src={shuffle} />
        <img className='music-player__icon' src={prevmusic} />
        <img className='music-player__icon' src={pause} />
        <img className='music-player__icon' src={nextmusic} />
        <img className='music-player__icon' src={repeat} />
      </div>
      <div className='music-player__times center'>
        <p className='music-player__time'>3:43</p>
        <p className='music-player__timeline'>This is Time line create with js</p>
        <p className='muisc-player__time'>1:34</p>
      </div>
    </div>
    <div className='music-player__setting center'>
      <img className='music-player__setting-icon' src={queue} />
      <div className='music-player__sound center'>
      <img className='music-player__setting-icon' src={volume} />
      <p className='music-player__sound-timeline'>This is progress create with js</p>
      </div>
    </div>
   </div>
   </div>
  )
}
