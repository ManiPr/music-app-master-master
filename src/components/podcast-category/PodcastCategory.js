import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import bgimage from '../../assets/images/STORIES.png'
import './PodcastCategory.css'
import {podcastCategory} from '../../datas'

export default function PodcastCategory() {
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
  const slides = podcastCategory.map((podcastCategory, index) => (
    <div  key={podcastCategory.Id} className='podcast-category'>
    <img className='podcast-category__image' src={bgimage} />
    </div>
  ));
  return (
    <>
    {podcastCategory.length === 0 ? (
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

    