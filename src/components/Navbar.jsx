import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css"

const Navbar = ({ style }) => {
    const [isOpen, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <nav id="navbar" className="fixed items-center justify-between flex w-full top-0 py-10 px-40 border z-50" style={style}>
            <div className="text-2xl">
                <Link to="/">TechWare</Link>
            </div>
            <ul className={`flex text-xl ml-auto ${isOpen ? "block" : "hidden"} `}>
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
            <svg className='ml-5 cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" onClick>
                <path
                    d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570-570v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330-570v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z"
                    fill='white'
                />
            </svg>
            <button type="button" className="block lg:hidden" onClick={handleClick}>
                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {isOpen && (
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    )}
                    {!isOpen && (
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    )}
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;