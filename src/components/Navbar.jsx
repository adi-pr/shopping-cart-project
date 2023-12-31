import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css"
import CartPreview from './CartPreview';
import { useCart } from '../utils/CartContext';

const Navbar = ({ style }) => {
    const { cart } = useCart()
    const [isOpen, setIsOpen] = useState(false)

    const toggleShowCart = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <nav id="navbar" className="fixed items-center justify-between flex w-full top-0 lg:py-10 lg:px-40 p-10 z-50" style={style}>
                <div className="text-3xl">
                    <Link to="/">TechWare</Link>
                </div>
                <ul className="flex gap-5 text-xl ml-auto">
                    <li>
                        <Link to="/store">Store</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className='flex relative items-center gap-5 cursor-pointer' onClick={toggleShowCart}>
                    <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                        <path
                            d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570-570v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330-570v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z"
                            fill='white'
                        />
                    </svg>
                    <div className='bg-white select-none text-black text-2xl rounded-full absolute w-8 h-8 flex justify-center -bottom-2 -right-0'>
                        {cart.totalItems}
                    </div>
                </div>
            </nav>
            {
                isOpen ? <CartPreview toggleShowCart={toggleShowCart} /> : null
            }
        </>
    );
}

export default Navbar;