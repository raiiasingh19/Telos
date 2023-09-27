import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar'
// import Upload from './components/upload/Upload'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <App />
  </div>,
)
