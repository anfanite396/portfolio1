import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './App.css';

import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate, 
} from "react-router-dom"; 

import Home from './components/Home';
import Contributions from './components/Contributions';


function App() {
  return (
    <div className="App" >
      <Router> 
        <Routes>
          <Route path="/portfolio1" element={<Home />} />
          <Route path="/portfolio1/contributions" element={<Contributions/>} />
          <Route path='*' element={<Navigate replace to="/portfolio1" />} />
        </Routes> 
      </Router> 
        
    </div>
  );
}

export default App;
