import React, { createContext, useContext, useState } from 'react'
import emptyShoppingCart from './emptyCart'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(emptyShoppingCart)

    return (
        <CartContext. Provider value={{ cart, setCart }}>
            {children}
        </CartContext. Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}