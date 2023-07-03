import React from 'react'
import image from '../../assets/images/Lou Reed.png'
import  './Artist.css'
import {artistData} from '../../datas'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Artist() {
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
  const slides = artistData.map((artist, index) => (
    <div  key={artist.Id} className='artist'>
        <img className='artist__image' src={image} />
        <p className='artist__name'>{artist.Name}</p>
        </div>
  ));
  return (
    <>
    {artistData.length === 0 ? (
      <p>No artist data available.</p>
    ) : (
      <div>
      <Carousel responsive={responsive}>
        {slides}
        </Carousel>
      </div>
    )}
  </>
  )
}

  