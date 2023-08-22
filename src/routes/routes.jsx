import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import StorePage from '../pages/Store/Store';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import AllProducts from '../pages/Store/AllProducts';
import CpuItemList from '../data/CpuProduct';
import CpuCoolerItemList from '../data/CpuCoolerProduct';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />}>
        <Route index element={<AllProducts />} />
        <Route path="cpus" element={<CpuItemList />} />
        <Route path="cpu coolers" element={<CpuCoolerItemList />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RoutesConfig;
