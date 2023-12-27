import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ handleLogout }) {

  return (
    <div className="signOut">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
