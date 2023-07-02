import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Carousels({slides}) {
  const responsive = {
    
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // const slideItems = slides.map((slide, index) => (
  //   <div className='center' key={index}>{slide}</div>
  // ));
  return (
    <Carousel responsive={responsive}>
      {slides}
  </Carousel>
  )
    
  
}
