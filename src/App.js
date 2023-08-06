
import './App.css';
import Navbar from './Components/Navbar.js';
import {Routes,Route} from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/ContactUs';

export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}