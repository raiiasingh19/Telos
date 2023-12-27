import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </div>
)


