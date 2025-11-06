import { createContext } from "react";
import { useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [cartPrice, setCartPrice] = useState(0);
    const [cartMessage, setCartMessage] = useState(false);
    
    //cart length
    const cartLength = cart.length;

    // Recalculate price automatically whenever cart changes
    useEffect(()=>{
        let subTotal = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
        setCartPrice(subTotal);
    }, [cart]);


    // Add Item to cart
    const addCart = (item) => {
        const itemExists = cart.some(
            (i) =>
            i.id === item.id && i.color === item.color && i.size === item.size
        );

        if (itemExists) {
            setCartMessage(true);
            setTimeout(() => setCartMessage(false), 2000);
            return;
        }
        setCart([...cart, { ...item, amount: 1 }]);
    };


    // Change Item amount in the cart
    const handleChange = (id, color, size, change) => {
        let newCart = cart.map((item) => {
            if (item.id === id && item.color === color && item.size === size) {
                item.amount = Math.max(0, item.amount + change);
            }
            return item;
        });

        // Remove item with item 0
        // take item with amount above 0 and create new cart
        newCart = newCart.filter((item) => item.amount > 0);
        setCart(newCart);
    };

    // Delete item from the cart
    const handleDelete = (id, color, size) => {
        const updatedCart = cart.filter(
            (item) => !(item.id === id && item.color === color && item.size === size)
        );
        setCart(updatedCart);
    };

    return(
        <CartContext.Provider value={{cartLength, cart, cartMessage, cartPrice, addCart, handleChange, handleDelete}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider};

export default CartContext;