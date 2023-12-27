import { useState, useEffect } from 'react';
import Logout from '../../components/logout/Logout'
import userIcon from '../../assets/usericon.png'
import Login from '../login/Login';

function Profile({ user, handleLogout }) {

  const [profilePicture, setProfilePicture] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    
    if(user) {
      setProfilePicture(user.profilePic)
    } else {
      setProfilePicture(userIcon)
    }
  }, []);

  return (
    <div style={{ display: "flex", width: "1rem", justifyContent: "center" }}>
    <img id="profilePic" src={profilePicture} onClick={handleProfileClick} /> 
    {isDropdownOpen && (
      <div className="dropdown">
      {user ? 
      (<Logout handleLogout={() => handleLogout} />): 
      (<Login />)}
      </div>
    )}
    </div>
  );
}

export default Profile;