import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import NoUser from "./components/nouser/NoUser";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {  
      fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get("http://localhost:8000/auth/login/success", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        setUser(null);
        console.log(err.response);
      });
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/auth/logout", {
        withCredentials: true,
      });
      setUser(undefined);
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  

  console.log(user);

  return (
    <React.Fragment>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <NoUser />}
        />
        <Route
          exact
          path="/shop"
          element={user ? <Shop user={user} /> : <NoUser />}
        />
        <Route
          exact
          path="/gallery"
          element={user ? <Gallery user={user} /> : <NoUser />}
        />
        <Route
          exact
          path="/contact"
          element={user ? <Contact user={user} /> : <NoUser />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;