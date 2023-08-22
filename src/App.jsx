import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"
import RoutesConfig from './routes/routes';

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
        <RoutesConfig />
      </div>
    </div>
  )
}

export default App

