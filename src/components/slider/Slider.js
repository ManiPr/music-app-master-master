// import React, { useState, useRef, useEffect } from 'react';
// import './Slider.css';

// const Slider = ({ slides }) => {
//   const [slidePosition, setSlidePosition] = useState(0);
//   const slideRef = useRef(null);
//   const slideWidth = useRef(0);
//   const maxSlidePosition = -(slides.length - 1) * slideWidth.current;

//   useEffect(() => {
//     slideWidth.current = slideRef.current.clientWidth;
//   }, []);

//   const goToNextSlide = () => {
//     const slideWidth = slideRef.current.clientWidth;
//     if (slidePosition === maxSlidePosition) {
//       setSlidePosition(0);
//     } else {
//       setSlidePosition(slidePosition - slideWidth);
//     }
//   };

//   const goToPreviousSlide = () => {
//     const slideWidth = slideRef.current.clientWidth;
//     if (slidePosition === 0) {
//       setSlidePosition(maxSlidePosition);
//     } else {
//       setSlidePosition(slidePosition + slideWidth);
//     }
//   };

//   return (
//     <div className="slider">
//       <div
//         className="slides"
//         style={{
//           transform: `translateX(${slidePosition}px)`,
//           transition: 'transform 0.5s ease-in-out',
//         }}
//         ref={slideRef}
//       >
//         {slides.map((slide, index) => (
//           <div className="slide center" key={index}>
//             {slide}
//           </div>
//         ))}
//       </div>
//       <div className="slider-controls">
//         <button className="prev-button" onClick={goToPreviousSlide}>
//           Previous
//         </button>
//         <button className="next-button" onClick={goToNextSlide}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Slider;