import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";

// const router = createBrowserRouter([
//   {
//     path: "/gallery",
//     element: <App />,
//   },
//   {
//     path: "/",
//     element: <div>Home</div>,
//   },
//   {
//     path: "/shop",
//     element: <Shop />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </div>
)


