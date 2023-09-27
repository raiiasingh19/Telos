import { useState, useEffect } from 'react';
// import Painting from './components/paintings/Painting';
// import UploadForm from './components/upload/Upload';
import axios from 'axios';
// import gg from './images/1695796179730_1.png'

function App() {
  
  const [painting, setPainting] = useState([])

  const getPaintings = async () => {
    const result = await axios.get("http://localhost:8000/api/gallery");
    setPainting(result.data)
    // console.log(result.data)
  }
  useEffect(() => {
    getPaintings()
  }, [])

  // console.log(painting)
  // console.log(gg)
    const paintings = painting?.reverse()?.map(item => {

        // const string = item.image.data.data.toString('base64');
        // const imageString = btoa(String.fromCharCode(...new Uint8Array(string)));
      
      
        //  console.log(item)

        return (
          // <Painting
          //   key={item._id}
          //   image={item.image}
          //   dimensions={item.dimensions}
          //   medium={item.medium}
          //   title={item.title}
          //   text={item.text}
          //   width={item.width}
          //   height={item.height}
          // />
          <div className="painting" key={item._id}>
                <h1>{item.title}</h1>
                
                <div className="image"><img src={`/src/images/${item.image}`} alt={item.title} style={{ width: `${item.width}rem`, height: `${item.height}rem` }} /> </div>
                    <div className="text">
                        <span>{item.dimensions}</span>
                        <span>{item.medium}</span>
                        <p>{item.text}</p>
                    </div>
            </div>   
        );
        });

  return (
    <div className='app'>
      
      <div className="container">
        {paintings}
      </div>
    </div>
  );
}

export default App;