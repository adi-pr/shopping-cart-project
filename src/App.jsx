import Navbar from "./components/Navbar"
import HomePage from "./pages/Home/Home"
import StorePage from "./pages/Store/Store"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react';


function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const navbar = document.getElementById('navbar')
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
      
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  if (scrollTop > 110) {
    navbar.style.background = '#000'
    navbar.style.transition = 'background 0.3s ease'
  } else {
    navbar.style.background = 'transparent'
    navbar.style.transition = 'background 0.3s ease'
  }

  return (
    <div>
      <Navbar />
      <div className="container" >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
