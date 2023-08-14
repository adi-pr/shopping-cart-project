import { Link } from "react-router-dom";
import "./index.css"

const Navbar = ({ style }) => {

    return ( 
        <nav id="navbar" className="fixed flex w-full top-0 py-10 px-40 z-50" style={style}>
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