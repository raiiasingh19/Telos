import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Gallery from "./pages/gallery/Gallery";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/auth/login/success", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => console.log(err.response));
  }, []);
  
  if(user) {
    localStorage.setItem("user", user);
  } else {
    return null;
  }

  console.log("USER: ", user)

  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={user ? <Home user={user} /> : <Navigate to="/" />} />
        <Route exact path="/shop" element={user ? <Shop user={user} /> : <Navigate to="/" />} />
        <Route exact path="/gallery" element={user ? <Gallery user={user} /> : <Navigate to="/" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;