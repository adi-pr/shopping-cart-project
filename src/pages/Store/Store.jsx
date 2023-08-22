import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import './index.css'
import { CartProvider } from '../../utils/CartContext';

const StorePage = () => {

    return (
        <CartProvider>
            <div id="store" className="mt-32 grid ">
                <Sidebar />
                <div className="pt-8 pr-8 mb-8 flex flex-wrap justify-between gap-5">
                    <Outlet />
                </div>
            </div>
        </CartProvider>
    );
}

export default StorePage;