import { useState } from "react";
import Form from "../form/Form.jsx";
import Profile from "../profile/Profile.jsx";
import '../../App.css'

export default function Navbar() {

    const [isUploadClicked, setIsUploadClicked] = useState(false)

    const ToggleSidebar = () => {
        isUploadClicked === true ? setIsUploadClicked(false) : setIsUploadClicked(true);
    };

    return (
        <nav className="navbar">
            
                <span className="logo">TELOS ART</span>
            
           
                <a href="http://localhost:5173/"><span className="nav-text">HOME</span></a>
                <a href="http://localhost:5173/gallery"><span className="nav-text">GALLERY</span></a>
                <a href="http://localhost:5173/contact"><span className="nav-text">CONTACT</span></a>
               
                <span className="nav-text"><Profile /></span>
                {localStorage.getItem("email")==="raiia.singh1@gmail.com"  ? 
                <span className="nav-text" id="upload" onClick={ToggleSidebar}>+</span> : null }
                <Form isUploadClicked={isUploadClicked} setIsUploadClicked={setIsUploadClicked} ToggleSidebar={ToggleSidebar} />
        </nav>
    )
}
// <a href="http://localhost:5173/shop"><span className="nav-text">SHOP</span></a>
// <span className="nav-text">SEARCH</span>
