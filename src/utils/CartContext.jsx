import { createContext, useContext, useEffect, useState } from 'react';
import emptyShoppingCart from './emptyCart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const data = window.localStorage.getItem('CART')
    return data !== null ? JSON.parse(data) : emptyShoppingCart
  })

  useEffect(() => {
    window.localStorage.setItem('CART', JSON.stringify(cart))
  }, [cart])

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

    toast.success(`Added ${item.brand} ${item.model} to the cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
    });

    console.log(`Added Item ${item.id} to cart`);
  };

  const removeFromCart = (item) => {
    const updatedCart = [...cart.items];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedQuantity = updatedCart[existingItemIndex].quantity -= 1

      if (updatedQuantity > 0) {
        updatedCart[existingItemIndex].quantity = updatedQuantity

      } else {
        updatedCart.splice(existingItemIndex, 1)
      }
      
      const updatedTotalItems = cart.totalItems - 1;
      const updatedTotalPrice = cart.totalPrice - item.price;

      setCart({
        items: updatedCart,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
      });

      console.log(`Item ${item.id} removed successfully`);
    } else {
      console.log(`Item ${item.id} not found in cart`);
    }
  }


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
