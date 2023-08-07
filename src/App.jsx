import Navbar from "./components/Navbar"
import HomePage from "./pages/Home/Home"
import StorePage from "./pages/Store/Store"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
