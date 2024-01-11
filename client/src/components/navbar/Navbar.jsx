import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../form/Form.jsx";
import Profile from "../profile/Profile.jsx";
import '../../App.css';

export default function Navbar({ user, handleLogout }) {
    const [isUploadClicked, setIsUploadClicked] = useState(false)

    const ToggleSidebar = () => {
        setIsUploadClicked(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <span className="logo">TELOS ART</span>
            <Link to="/" className="nav-link"><span className="nav-text">HOME</span></Link>
            <Link to="/gallery" className="nav-link"><span className="nav-text">GALLERY</span></Link>
            <Link to="/contact" className="nav-link"><span className="nav-text">CONTACT</span></Link>
            <span className="nav-text"><Profile handleLogout={handleLogout} user={user} /></span>
            {user?.email === "f20210274@goa.bits-pilani.ac.in" ? (
                <span className="nav-text" id="upload" onClick={ToggleSidebar}>+</span>
            ) : null}
            <Form isUploadClicked={isUploadClicked} setIsUploadClicked={setIsUploadClicked} ToggleSidebar={ToggleSidebar} />
        </nav>
    )
}
