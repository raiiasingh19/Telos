import { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import { gapi } from "gapi-script";

const clientId = "700787076231-l74feafbp5ud34g109d9k8vf8uvfhn4g.apps.googleusercontent.com";

function App() {
  
  const [painting, setPainting] = useState([])

  const getPaintings = async () => {
    const result = await axios.get("http://localhost:8000/api/gallery");
    setPainting(result.data)
  }
  useEffect(() => {
    getPaintings()
  }, [])

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: " " //different for other apis
      })
    }

    gapi.load('client:auth2', start)
  }, [])
 
  // var accessToken = gapi.auth.getToken().access_token;
  
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
          // <div className="painting" >
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
          //</div>   
        );
        });

  return (
    <div>
    <div className='login'>
    <Login />
    <Logout />
    </div>
    <div className='app'>
        {paintings}
    </div>
    </div>
  );
}

export default App;

