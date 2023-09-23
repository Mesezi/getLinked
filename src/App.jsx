import './App.css'
import { useEffect } from "react";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Register from './pages/Register';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  useEffect(() => {
    AOS.refresh(); // Reinitialize AOS
  });



  return (
    <div className='bg-darkPurple text-white overflow-hidden'>
       <Router>
        <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </Router>
    </div>
   
  )
}

export default App
