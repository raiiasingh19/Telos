import { useState, useEffect } from 'react';
import Logout from '../../components/logout/Logout'
import userIcon from '../../assets/usericon.png'
import Login from '../login/Login';
// import Login from '../../components/login/Login'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

function Profile() {

  const [profilePicture, setProfilePicture] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    
    if(localStorage.getItem("name") && localStorage.getItem("email") && localStorage.getItem("profilePic")) {
      setProfilePicture(localStorage.getItem("profilePic"))
    } else {
      setProfilePicture(userIcon)
    }
  }, []);

  return (
    <div style={{ display: "flex", width: "1rem", justifyContent: "center" }}>
    <img id="profilePic" src={profilePicture} onClick={handleProfileClick} /> 
    {isDropdownOpen && (
      <div className="dropdown">
      {localStorage.getItem("name") && localStorage.getItem("email") && localStorage.getItem("profilePic") ? 
      (<Logout />): 
      (<Login />)}
      </div>
    )}
    </div>
  );
}

export default Profile;