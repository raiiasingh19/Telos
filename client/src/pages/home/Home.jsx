import React from 'react'
import Carousel from '../../components/carousel/Carousel'

const Home = () => { // { user }

 

  return (
    <div>
      <p>Welcome Home</p>
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        </Carousel>
      </div>
    </div>
  )
}

export default Home

