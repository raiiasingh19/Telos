import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import useAuth from "./useAuth";
import Shop from "./pages/shop/Shop";
import Gallery from "./pages/gallery/Gallery";

function App() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<div>Home</div>} />
          <Route
            path="/shop"
            element={<Shop />}
          />
          <Route path="/gallery" element={<Gallery user={user} />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;