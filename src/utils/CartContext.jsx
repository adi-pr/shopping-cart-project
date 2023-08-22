import React, { createContext, useContext, useState } from 'react';
import emptyShoppingCart from './emptyCart';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(emptyShoppingCart);

  const addToCart = (item) => {
    const updatedCart = [...cart.items];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({
        id: item.id,
        brand: item.brand,
        model: item.model,
        price: item.price,
        imgURL: item.imgURL,
        quantity: 1,
      });
    }

    const updatedTotalItems = cart.totalItems + 1;
    const updatedTotalPrice = cart.totalPrice + item.price;

    setCart({
      items: updatedCart,
      totalItems: updatedTotalItems,
      totalPrice: updatedTotalPrice,
    });

    console.log(`Added Item ${item.id} to cart`);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
