import { Link } from "react-router-dom";
import "./index.css"

const Navbar = () => {
    return ( 
        <nav className="fixed flex w-full z-20 top-0 py-14 px-40 z-50">
                <div className="text-2xl">
                    <Link to="/">TechWare</Link>
                </div>
            <ul className="flex ml-auto text-xl">
                <li className="px-5">
                    <Link to="/store">Store</Link>
                </li>
                <li className="px-5">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-5">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;