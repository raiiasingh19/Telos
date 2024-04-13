import React, { useState, useEffect } from 'react'
import leftarrow from './left-arrow.svg'
import rightarrow from './right-arrow.svg'

const Carousel = (props) => {
    const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

// Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
      if (currentIndex < (length - 1)) {
          setCurrentIndex(prevState => prevState + 1)
      }
    }
  
    const prev = () => {
        if (currentIndex >= 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
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
                
                  <div className="carousel-content-wrapper">
                  </div>

                {
                    currentIndex < (length - 1) &&
                    <button onClick={next} className="right-arrow">
                    <img src={rightarrow} />
                    </button>
                }  
            </div>
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
        </div>
    )
}

export default Carousel