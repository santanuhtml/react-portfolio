import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";


const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState(()=>{
        return JSON.parse(localStorage.getItem("storeCart")) || [];
    });
    // const [cart, setCart] = useState([]);
    const [cartPrice, setCartPrice] = useState(0);
    const [cartMessage, setCartMessage] = useState(false);
    const {user, isAuthenticated} = useContext(AuthContext);

    //cart length
    const cartLength = cart.length;

    // Recalculate price automatically whenever cart changes
    useEffect(()=>{
        let subTotal = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
        setCartPrice(subTotal);
    }, [cart]);

    //Fetch cart when user Authenticated
    useEffect(()=>{
        if(isAuthenticated && user){
            axios
            .get(`https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers/${user.id}`)
            .then((response) => {

                // Merge local cart with fetched cart
                const backendCart = response.data.cart;
                const localCart = cart;

                // Merge local and backend carts, giving priority to backend cart
                const mergedCart = [...localCart, ...backendCart].reduce((acc, item) => {
                    // Check if the item already exists in the accumulator
                    const existingItem = acc.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
                    if (existingItem) {
                    // Merge quantities if the item already exists
                    existingItem.amount += item.amount;
                    } else {
                    acc.push(item); // Otherwise, add the item
                    }
                    return acc;
                }, []);

            // Now set the merged cart
            setCart(mergedCart);
            })
            .catch((error) => console.error("Error fetching cart:", error));
        }
    }, [user, isAuthenticated])


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

        // setCart([...cart, { ...item, amount: 1 }]);
        const updatedCart = [...cart, { ...item, amount: 1 }];
        setCart(updatedCart);
        localStorage.setItem("storeCart", JSON.stringify(updatedCart));

        if(isAuthenticated){
            axios.put(`https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers/${user.id}`, {cart: updatedCart})
            .catch((error) => console.error("Error updating cart:", error));
        }
    };


    // Handle cart item amount change
    const handleChange = (id, color, size, change) => {
        let newCart = cart.map((item) => {
            if (item.id === id && item.color === color && item.size === size) {
                item.amount = Math.max(0, item.amount + change);
            }
            return item;
        });

        // Remove item with item 0
        // take item with amount above 0 and create new cart
        const updatedCart = newCart.filter((item) => item.amount > 0);
        setCart(updatedCart);
        localStorage.setItem("storeCart", JSON.stringify(updatedCart));



        // Send updated cart to backend
        if (isAuthenticated) {
        axios
            .put(`https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers/${user.id}`, { cart: updatedCart })
            .catch((error) => console.error("Error updating cart:", error));
        }


    };

    // Debounce function to prevent rapid state updates
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };


    // Delete item from the cart
    const handleDelete = debounce((id, color, size) => {
        const updatedCart = cart.filter(
            (item) => !(item.id === id && item.color === color && item.size === size)
        );
        setCart(updatedCart);
        localStorage.setItem("storeCart", JSON.stringify(updatedCart));



        // Send updated cart to backend
        if (isAuthenticated) {
        axios
            .put(`https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers/${user.id}`, { cart: updatedCart })
            .catch((error) => console.error("Error updating cart:", error));
        }
    },500);

    return(
        <CartContext.Provider value={{cartLength, cart, cartMessage, cartPrice, addCart, handleChange, handleDelete}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider};

export default CartContext;