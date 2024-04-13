import React from 'react'
import { Link } from "react-router-dom";
import Carousel from '../../components/carousel/Carousel'
import img1 from '../../components/carousel/1695998230383_Parisian_Monks.png'
import img2 from '../../components/carousel/1696240889373_Rhetorical_Flourish.png'
import img3 from '../../components/carousel/1696243305016_Hues_Of_A_Raging_Storm.png'

const Home = () => { // { user }

 

  return (
    <div className='home-wrapper'>
      <div className='home-panel'>
        <p className='intro-text'> A self-taught artist, Simrit Siingh’s paintings reflect the triumph of raw talent 
          and passion over schooled ideas and tutored technique. 
          As indeed his canvases, exploding with colour and texture, 
          celebrate the triumph of the human will, over every challenge that destiny and society can offer. 
          Every painting is at once an intensely personal document of the artist’s journey 
          as well as a universal tableau, inviting every viewer to see in it his or her own story.
        </p>
        <img className='intro-img' src="#" alt='pogo'></img>
      </div>
      <div className='carousel-panel'>
      <div className='carousel-title'><p>RECENT WORKS</p></div>
        <Carousel>
          <div className='carousel-image-1-container'>
          <img className='carousel-image-1' src={img1} alt="placeholder" />
          </div>

          <div className='carousel-image-2-container'>
          <img className='carousel-image-2'src={img2} alt="placeholder" />
          </div>

          <div className='carousel-image-3-container'>
          <img className='carousel-image-3'src={img3} alt="placeholder" />
          </div>
        </Carousel>
        <Link to="/gallery"><div className='explore'><p>EXPLORE MORE &gt;</p></div></Link>
      </div>
    </div>
  )
}

export default Home

