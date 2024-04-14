import React, { useState, useEffect } from 'react'
import leftarrow from './left-arrow.svg'
import rightarrow from './right-arrow.svg'

const Carousel = ({ children }) => {
    // , leftArrowClick, setLeftArrowClick, rightArrowClick, setRightArrowClick, homeIndex, setHomeIndex
    // const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const [length, setLength] = useState(children.length)

// Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
      if (currentIndex < (length - 1)) {
          setCurrentIndex(prevState => prevState + 1)
        //   setHomeIndex(prevState => prevState + 1)
      }
    //   setRightArrowClick(!rightArrowClick)
    //   setTimeout(() => {
    //     setRightArrowClick(!rightArrowClick)
    //   }, 100);
    }
  
    const prev = () => {
        if (currentIndex >= 0) {
            setCurrentIndex(prevState => prevState - 1)
            // setHomeIndex(prevState => prevState - 1)
        }
        // setLeftArrowClick(!leftArrowClick)
        // setTimeout(() => {
        //     setLeftArrowClick(!leftArrowClick)
        // }, 100);
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                    <img src={leftarrow} />
                    </button>
                }
                
                  <div className="carousel-content-wrapper" />

                {
                    currentIndex < (length - 1) &&
                    <button onClick={next} className="right-arrow">
                    <img src={rightarrow} />
                    </button>
                }  
            </div>
                    <div className='carousel-content' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
        </div>
    )
}

export default Carousel