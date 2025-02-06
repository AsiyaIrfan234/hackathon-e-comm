'use client';
import React, { useEffect, createContext, useContext, useState } from "react";
import { client } from "../../sanity/lib/client";

const CartContext = createContext();


export const UseCartContext = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => {
    const [cartBarOpen, setCartBarOpen] = useState(false)
    const [itemsCount, setItemsCount] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [Subtotal, setSubTotal] = useState(0); 

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCart = JSON.parse(localStorage.getItem('cartItem')) || [];
            setCartItems(storedCart);
        }
    }, []);
    useEffect(() => {
        const subtotal = cartItems.reduce((prev, curr) => {
            const discount = curr.discountPercentage || 0; 
            const discountedPrice = curr.price - (curr.price * discount) / 100;
            return prev + discountedPrice * curr.quantity;
        }, 0);
        setSubTotal(subtotal);
    }, [cartItems]);
    
    


     const [data, setData] = useState([])
        useEffect(() => {
          async function fetchData () {
            const query =
              '*[_type=="product"]{"image":image.asset->url,discountPercentage, id , category , stockLevel, title, price, name, description, summary}'
            const response = await client.fetch(query)
            setData(response)
            console.log(data)
          }
          fetchData()
        }, [])
    

    const addToCart = (Product) => {
        alert("Adding to Cart");
        setCartItems((prevItems) => {
            const isItemExists = prevItems.find((item) => item.id === Product.id);
            let updatedCart;
            if (isItemExists) {
                updatedCart = prevItems.map((item) =>
                    item.id === Product.id
                        ? { ...item, quantity: item.quantity + itemsCount }
                        : item
                );
            } else {
                updatedCart = [...prevItems, { ...Product, quantity: itemsCount }];
            }
            if (typeof window !== 'undefined') {
                localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            }
            return updatedCart;
        });
    };

    const deleteCartItem = (product) => {
        setCartItems((prevItems) => {
            const updatedCart = prevItems.filter((item) => item.id !== product.id);
            if (typeof window !== 'undefined') {
                localStorage.setItem('cartItem', JSON.stringify(updatedCart));
                setCartItems(updatedCart)
            }
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cartItem', JSON.stringify([]));
        }
    };

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cartItems,
                deleteCartItem,
                itemsCount,
                setItemsCount,
                setCartItems,
                cartBarOpen,
                setCartBarOpen,
                clearCart,
                Subtotal,
                data
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
