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

  const PageScroll  =()=>{
const { pathname, hash, key } = useLocation();

useEffect(() => {
  // if not a hash link, scroll to top
  if (hash === '') {
    window.scrollTo(0, 0);
  }
  // else scroll to id
  else {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 300);
  }

   // close menu on route change
   
}, [pathname, hash, key]); // do this on route change
  }



  return (
    <div className='bg-darkPurple text-white overflow-hidden'>
       <Router>
         <PageScroll />
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
