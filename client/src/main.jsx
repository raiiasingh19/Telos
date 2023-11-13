import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/shop/Shop.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/gallery",
    element: <App />,
  },
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  
    
    <Navbar />
    <RouterProvider router={router} />
    
  </div>
)


