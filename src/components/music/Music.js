import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import playlist from '../../assets/images/PLAYLIST RADIO.png'
import './Music.css'
import heart from '../../assets/images/SVG File/heart.svg'
import more from '../../assets/images/SVG File/more.svg'
import play from '../../assets/images/SVG File/Play.svg'
import {MusicData} from '../../datas'
export default function Music() {
  const responsive = {
    
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  const slides = MusicData.map((music, index) => (
    <div key={index} className='music'>
      <img className='music__image' src={playlist} alt='Playlist' />
      <p className='music__name'>{music.Name}</p>
      <div className='music__content center'>
        <img className='recently-played__button' src={heart} alt='Heart' />
        <img className='recently-played__button' src={play} alt='Play' />
        <img className='recently-played__button' src={more} alt='More' />
      </div>
    </div>
  ));

  return (
    <>
    <div>
      {console.log(slides)}
    <Carousel responsive={responsive}>
      {slides}
      </Carousel>
    </div>
      
    </>
  );
}
