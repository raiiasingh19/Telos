import { useState } from "react";
import Form from "../form/Form.jsx"
import '../../App.css'

export default function Nabvar() {

    const [isUploadClicked, setIsUploadClicked] = useState(false)
    // Define the handleButtonClick function
    const handleUploadClick = () => {
    setIsUploadClicked (!isUploadClicked)
    };

    return (
        <nav className="navbar">
            <span className="logo">TELOS ART</span>
            <span className="nav-text">HOME</span>
            <span className="nav-text">GALLERY</span>
            <span className="nav-text">CONTACT</span>
            <span className="nav-text">SHOP</span>
            <span className="nav-text">SEARCH</span>
            <span className="nav-text"><button className="upload" onClick={handleUploadClick}>+</button>
            {isUploadClicked && (
            <Form />
            )}
            </span>
        </nav>
    )
}