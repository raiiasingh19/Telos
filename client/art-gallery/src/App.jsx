import { useState, useEffect } from 'react';
import Painting from './components/paintings/Painting';
import UploadForm from './components/upload/Upload';
import axios from 'axios';


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
    const paintings = painting?.map(item => {
        // const string = item.image.data.data.toString('base64');
        // const imageString = btoa(String.fromCharCode(...new Uint8Array(string)));
       

        return (
          <Painting
            key={item._id}
            image={item.image}
            dimensions={item.dimensions}
            medium={item.medium}
            title={item.title}
            text={item.text}
            width={item.width}
            height={item.height}
          />
        );
        });

  return (
    <div className='app'>
      
      <div className="container">
      <UploadForm />
        {paintings}
      </div>
    </div>
  );
}

export default App;