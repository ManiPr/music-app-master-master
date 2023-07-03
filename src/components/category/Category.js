import React from 'react'
import bgimage from '../../assets/images/HIP - HOP.png'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import './Category.css'
import {categoryData} from '../../datas'
export default function Category() {
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
  const slides = categoryData.map((category, index) => (
    <div  key={category.Id} className='category'>
    <img className='category__image' src={bgimage} />
  </div>
  ));
  return (
   
    <>
    {categoryData.length === 0 ? (
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

