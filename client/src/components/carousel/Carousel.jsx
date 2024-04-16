// import React, { useState, useEffect } from 'react'
// import leftarrow from './left-arrow.svg'
// import rightarrow from './right-arrow.svg'

// const Carousel = ({ children }) => {
//     // , leftArrowClick, setLeftArrowClick, rightArrowClick, setRightArrowClick, homeIndex, setHomeIndex
//     // const {children} = props;

//     const [currentIndex, setCurrentIndex] = useState(0)
    
//     const [length, setLength] = useState(children.length)

// // Set the length to match current children from props
//     useEffect(() => {
//         setLength(children.length)
//     }, [children])

//     const next = () => {
//       if (currentIndex < (length - 1)) {
//           setCurrentIndex(prevState => prevState + 1)
//         //   setHomeIndex(prevState => prevState + 1)
//       }
//     //   setRightArrowClick(!rightArrowClick)
//     //   setTimeout(() => {
//     //     setRightArrowClick(!rightArrowClick)
//     //   }, 100);
//     }
  
//     const prev = () => {
//         if (currentIndex >= 0) {
//             setCurrentIndex(prevState => prevState - 1)
//             // setHomeIndex(prevState => prevState - 1)
//         }
//         // setLeftArrowClick(!leftArrowClick)
//         // setTimeout(() => {
//         //     setLeftArrowClick(!leftArrowClick)
//         // }, 100);
//     }

//     return (
//         <div className="carousel-container">
//             <div className="carousel-wrapper">
//                 {
//                     currentIndex > 0 &&
//                     <button onClick={prev} className="left-arrow">
//                     <img src={leftarrow} />
//                     </button>
//                 }
                
//                   <div className="carousel-content-wrapper" />

//                 {
//                     currentIndex < (length - 1) &&
//                     <button onClick={next} className="right-arrow">
//                     <img src={rightarrow} />
//                     </button>
//                 }  
//             </div>
//                     <div className='carousel-content' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                         {children}
//                     </div>
//         </div>
//     )
// }

// export default Carousel


import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "react-router-dom";

import img1 from './1695998230383_Parisian_Monks.png'
import img2 from './1696240889373_Rhetorical_Flourish.png'
import img3 from './1696243305016_Hues_Of_A_Raging_Storm.png'


const Carousel = () => {

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        // centerPadding: '35rem',
      };


  return (
<div className='carousel-container'>
    <div className='carousel-title'><p>RECENT WORKS</p></div>
      <Slider className='slide-item' {...settings}>
        <div className='carousel-image-1-container'>
        <img className='carousel-image-1' src={img1} alt="placeholder" />
        </div>
        <div className='carousel-image-2-container'>
        <img className='carousel-image-2' src={img2} alt="placeholder" />
        </div>
        <div className='carousel-image-3-container'>
        <img className='carousel-image-3' src={img3} alt="placeholder" />
        </div>
      </Slider>
      <Link to="/gallery"><div className='explore'><p>EXPLORE MORE &gt;</p></div></Link>
</div>
  )
}

export default Carousel

