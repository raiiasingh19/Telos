import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [painting, setPainting] = useState([])

  const getPaintings = async () => {
    const result = await axios.get("http://localhost:8000/api/gallery");
    setPainting(result.data)
  }
  useEffect(() => {
    getPaintings()
  }, [])
  
    const paintings = painting?.reverse()?.map(item => {

        return (
          <div className="painting-container" key={item._id}>
            <h1 className="item-title">{item.title}</h1>
                  <div className="image">
                    <img src={`/src/images/${item.image}`} alt={item.title} style={{ width: `${item.width}rem`, height: `${item.height}rem` }} /> 
                  </div>
                  <div className="specs">
                      <span>{item.dimensions}  • </span>
                      <span>{item.medium}</span>
                      <p id="description">{item.text}</p>
                  </div>
          </div>  
        );
        });

  return (
    <div className='app'>
        {paintings}
    </div>
    
  );
}

export default App;

