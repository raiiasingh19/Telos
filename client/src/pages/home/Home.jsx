import React from 'react'
import { Link } from "react-router-dom";
// import { useState } from 'react'
import Carousel from '../../components/carousel/Carousel'
import img1 from '../../components/carousel/1695998230383_Parisian_Monks.png'
import img2 from '../../components/carousel/1696240889373_Rhetorical_Flourish.png'
import img3 from '../../components/carousel/1696243305016_Hues_Of_A_Raging_Storm.png'
import pogoimg from './daddy.jpg'

const Home = () => { // { user }

  // const [homeIndex, setHomeIndex] = useState(0)
  // const [leftArrowClick, setLeftArrowClick] = useState(false)
  // const [rightArrowClick, setRightArrowClick] = useState(false)

  return (
    <div className='home-wrapper'>
      <div className='home-panel'>
        <p className='intro-text'> <p className='intro-lines'>A Greek term that means one's ultimate purpose, or the fulfilment of a goal, telos perfectly expresses Simrit Siingh's compulsive need to paint. </p>
        <p className='intro-lines'>As a self-taught artist, his paintings reflect the triumph of raw talent and passion over schooled ideas and tutored technique. </p>
        <p className='intro-lines'>As indeed his canvases, exploding with colour and texture, celebrate the triumph of the human will, over every challenge that destiny and society can offer. </p>
        <p className='intro-lines'>Every painting is at once an intensely personal document of the artist’s journey as well as a universal tableau, inviting every viewer to see in it his or her own story.</p>
        </p>
        <img className='intro-img' src={pogoimg} alt='pogo'></img>
      </div>
      <div className='carousel-panel'>
      <div className='carousel-title'><p>RECENT WORKS</p></div>
        <Carousel>
        {/* homeIndex={homeIndex} setHomeIndex={setHomeIndex} leftArrowClick={leftArrowClick} setLeftArrowClick={setLeftArrowClick} rightArrowClick={rightArrowClick} rightLeftArrowClick={setRightArrowClick} */}
          <div className='carousel-image-1-container'> 
          {/* {
            homeIndex===0 && rightArrowClick &&
            <img className='fade-out carousel-image-1' src={img1} alt="placeholder" />
          }
          {
            homeIndex===0 && leftArrowClick &&
            <img className='fade-in carousel-image-1' src={img1} alt="placeholder" />
          } */}

          <img className='carousel-image-1' src={img1} alt="placeholder" />          
          </div>

          <div className='carousel-image-2-container'>

          {/* {
            homeIndex===0 && rightArrowClick &&
            <img className='fade-out carousel-image-2' src={img2} alt="placeholder" />
          }
          {
            homeIndex===0 && leftArrowClick &&
            <img className='fade-in carousel-image-2' src={img2} alt="placeholder" />
          } */}

          <img className='carousel-image-2' src={img2} alt="placeholder" />
          </div>

          <div className='carousel-image-3-container'>
          {/* 
          {
            homeIndex===0 && rightArrowClick &&
            <img className='fade-out carousel-image-3' src={img3} alt="placeholder" />
          }
          {
            homeIndex===0 && leftArrowClick &&
            <img className='fade-in carousel-image-3' src={img3} alt="placeholder" />
          } */}
          <img className='carousel-image-3' src={img3} alt="placeholder" />
          </div>
        </Carousel>
        <Link to="/gallery"><div className='explore'><p>EXPLORE MORE &gt;</p></div></Link>
      </div>
    </div>
  )
}

export default Home

