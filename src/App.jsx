import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"
import RoutesConfig from './routes/routes';
import { CartProvider } from './utils/CartContext';

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
    <>
      <CartProvider>
        <Navbar style={navbarStyle} />
        <div className="container">
          <RoutesConfig />
        </div>
      </CartProvider>
    </>
  )
}

export default App

