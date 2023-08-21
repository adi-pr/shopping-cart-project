import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home/Home"
import StorePage from "./pages/Store/Store"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

import AllProducts from './pages/Store/AllProducts';
import CpuItemList from './data/cpuProduct';

import { Route, Routes } from "react-router-dom"

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: scrollTop > 80 ? '#000' : 'transparent',
    transition: 'background 0.3s ease',
  };

  return (
    <div>
      <Navbar style={navbarStyle} />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />}>
            <Route index element={<AllProducts />} />
            <Route path="cpus" element={<CpuItemList />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

