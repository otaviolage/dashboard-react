
import { createContext, useCallback, useContext, useState } from 'react';

export const CartContext = createContext({})

export const CartProvider = 
    ({ children }) => {
    const [ cart, setCart ] = useState(() => {
        const cart = localStorage.getItem('@solid:cart')
        if (cart) return JSON.parse(cart)
        return []
    })

    const addToCart = useCallback (
        (product) => {
            product.quantity = product.quantity++
            const newCart = cart.push(product)
            setCart(newCart)
            localStorage.setItem('@solid:cart', JSON.stringify(newCart))
        },
        [cart]
    )

    const deleteToCart = useCallback ( 
        (sku) => {
            const newCart = cart.filter(item => item.sku !== sku)
            setCart([...newCart])
            localStorage.setItem('@solid:cart', JSON.stringify(newCart))
        },
        [cart]
    )

    return (
        <CartContext.Provider
          value={{ cart, addToCart, deleteToCart }}
        >
          {children}
        </CartContext.Provider>
      )
}

export function useCart(){
    const context = useContext(CartContext);
  
    if (!context) throw new Error('useCart must be used within an CartProvider');
    return context;
  }