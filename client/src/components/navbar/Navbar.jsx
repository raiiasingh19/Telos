import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../form/Form.jsx";
// import Profile from "../profile/Profile.jsx";
import '../../App.css';

export default function Navbar() {
    const [isUploadClicked, setIsUploadClicked] = useState(false)
    
  
        const [keyPressed, setKeyPressed] = useState('');
        const [lastFourChars, setlastFourChars] = useState('');
        console.log(keyPressed)

        const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

        useEffect(() => {
            const handleKeyDown = (event) => {
                setKeyPressed(keyPressed+event.key);
                if (event.key === 'Enter') {
                  setlastFourChars(keyPressed.slice(-4));
                  console.log("lfc: ", lastFourChars)
                  setKeyPressed('');
                }
                
                if(lastFourChars === 'pogo') {
                  setIsAdminLoggedIn(true);
                  console.log('pogo detected!')
                }
                
            };
            
            // const handleEnterKey = (event) => {
            //   if(event.key === 'Enter' && isAdminLoggedIn) {
            //      // Clear keystrokes after detecting "pogo"
            //   }
              
            // };

            window.addEventListener('keydown', handleKeyDown);        
            // window.addEventListener('keydown', handleEnterKey);
        
            return () => {
              window.removeEventListener('keydown', handleKeyDown);
              // window.removeEventListener('keydown', handleEnterKey);
            };
          

        }, [isAdminLoggedIn, lastFourChars,keyPressed])
        console.log(isAdminLoggedIn)
        

        
    

    

    const ToggleSidebar = () => {
        setIsUploadClicked(prevState => !prevState);
    };

    
    
    return (
        <nav className="navbar">
            <span className="logo">TELOS ART</span>
            <div className="links">
            <Link to="/" className="nav-link"><span className="nav-text">HOME</span></Link>
            <Link to="/gallery" className="nav-link"><span className="nav-text">GALLERY</span></Link>
            <Link to="/contact" className="nav-link"><span className="nav-text">CONTACT</span></Link>
            {/* <span className="nav-text"><Profile handleLogout={handleLogout} user={user} /></span> */}

            
          {isAdminLoggedIn ? (<span className="nav-text" id="upload" onClick={ToggleSidebar}>+</span>) : null}
            </div>
        
          {/* shows when pogo is typed and enter is hit twice */}

            <Form isUploadClicked={isUploadClicked} setIsUploadClicked={setIsUploadClicked} ToggleSidebar={ToggleSidebar} />
        </nav>
    )
}

