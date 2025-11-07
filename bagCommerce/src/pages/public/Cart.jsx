import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import CartContext from "../../context/CartContext";
import { Link } from "react-router";

function Cart() {

    // user setup
    const { isAuthenticated } = useContext(AuthContext);

    //cart context setup
    const { cart, cartLength, cartPrice, handleChange, handleDelete } = useContext(CartContext);
    const deliveryFee = cartLength > 0 ? 5 : 0;
    const totalPrice = cartPrice + deliveryFee;

    return (
        <>
            <section>
                <div className="container max-w-screen-2xl mx-auto px-3 md:px-6 py-5 md:py-10">
                    <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold uppercase">Shopping Cart</h1>
                    <div className="mt-5">
                        <div className="grid lg:grid-cols-[6fr_2fr] xl:grid-cols-[6fr_3fr] gap-4">
                            <div className="border rounded p-5 border-gray-200">
                                <div className="flex flex-col gap-4">
                                    {cartLength === 0 ? (
                                        <p>Your cart is empty.</p>
                                    ) : (
                                        <>

                                            {cart.map((item) => (
                                                <div key={`${item.id}-${item.color}-${item.size}`} className="grid gap-5 grid-cols-[2fr_11fr]">
                                                    <div>
                                                        <img
                                                            className="rounded w-full"
                                                            src={item.image}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="flex flex-col gap-1">
                                                            <h3 className="text-xl  lg:text-2xl font-semibold block mb-1">{item.title}</h3>
                                                            <p className="text-[15px] text-gray-500"><span className="font-medium">Size:</span> {item.size}</p>
                                                            <p className="text-sm text-gray-600 flex items-center gap-1">
                                                                <span className="font-medium">Color:</span>
                                                                <span
                                                                    className="inline-block w-4 h-4 rounded-full border"
                                                                    style={{ backgroundColor: item.color }}
                                                                ></span>
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-5">
                                                            <div>
                                                                <div className="text-[18px]  lg:text-2xl font-semibold block mb-1"> ${item.price.toFixed(2)}</div>
                                                                <div>
                                                                    <div className="w-full h-9  rounded-[50px] flex gap-1 items-center  justify-between p-1">
                                                                        <button onClick={() => handleChange(item.id, item.color, item.size, -1)} className="h-full w-4 bg-gray-300 grow rounded-[50px] text-black text-[16px] cursor-pointer">-</button>
                                                                        <div className="h-full w-2 bg-white grow rounded-[50px] text-[15px] text-black flex justify-center items-center">{item.amount}</div>
                                                                        <button onClick={() => handleChange(item.id, item.color, item.size, +1)} className="h-full w-4 bg-gray-300 grow rounded-[50px] text-black text-[16px] cursor-pointer">+</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <RxCross2
                                                                    className="cursor-pointer text-gray-400 block mt-1"
                                                                    size={22}
                                                                    onClick={() => handleDelete(item.id, item.color, item.size)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </>
                                    )
                                    }




                                    {/* <div className="grid gap-5 grid-cols-[2fr_11fr]">
                                        <div>
                                            <img className="rounded w-full"
                                                src={`https://placehold.co/600x650`}
                                                alt="" />
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-xl  lg:text-2xl font-semibold block mb-1">Fashion Handbag</h3>
                                                <p className="text-[15px] text-gray-500"><span className="font-medium">Size:</span> M</p>
                                                <p className="text-[15px] text-gray-500"><span className="font-medium">Color:</span> Blue</p>
                                            </div>
                                            <div className="flex gap-5">
                                                <div>
                                                    <div className="text-[18px]  lg:text-2xl font-semibold block mb-1">$ 79.99</div>
                                                    <div>
                                                        <div className="w-full h-9  rounded-[50px] flex gap-1 items-center  justify-between p-1">
                                                            <button className="h-full w-4 bg-gray-300 grow rounded-[50px] text-black text-[16px] cursor-pointer">-</button>
                                                            <div className="h-full w-2 bg-white grow rounded-[50px] text-[15px] text-black flex justify-center items-center">1</div>
                                                            <button className="h-full w-4 bg-gray-300 grow rounded-[50px] text-black text-[16px] cursor-pointer">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <RxCross2
                                                        className="cursor-pointer text-gray-400 block mt-1"
                                                        size={22}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}




                                </div>
                            </div>
                            <div>
                                <div className="border rounded p-5 border-gray-200 bg-gray-100">
                                    <h3 className="text-xl lg:text-2xl font-semibold block mb-1">Order Summery</h3>
                                    <div>
                                        <ul className="flex flex-col gap-2 mt-4 mb-4">
                                            <li className="flex gap-2 justify-between">
                                                <div>Subtotal</div>
                                                <div className="font-medium">${cartPrice.toFixed(2)}</div>
                                            </li>
                                            <li className="flex gap-2 justify-between">
                                                <div>Delivery</div>
                                                <div className="font-medium"> {cartLength === 0 ? "-" : `$${deliveryFee}`}  </div>
                                            </li>
                                            <li className="flex gap-2 justify-between">
                                                <div>Discount</div>
                                                <div className="font-medium">-</div>
                                            </li>
                                        </ul>
                                        <hr className="opacity-15" />
                                        <ul>
                                            <li className="flex gap-2 justify-between mt-4">
                                                <div className="text-xl">Total</div>
                                                <div className="font-medium text-xl">${totalPrice.toFixed(2)}</div>
                                            </li>
                                        </ul>
                                        <div>
                                            <div className="grow">

                                                {isAuthenticated && cartLength > 0 && (
                                                    <>
                                                        <Link to="/checkout/">
                                                            <button  className="w-full mt-6 h-12 bg-black rounded-[10px] font-medium text-[16px] text-white cursor-pointer">Proceed to Checkout</button>
                                                        </Link>
                                                    </>
                                                )}

                                                {!isAuthenticated && cartLength > 0 && (
                                                    <>
                                                        <Link to="/login">
                                                            <button className="w-full mt-6 h-12 bg-black rounded-[10px] font-medium text-[16px] text-white cursor-pointer">Login to Proceed</button>
                                                        </Link>
                                                    </>
                                                )}

                                                





                                                {/* <button className="w-full mt-6 h-12 bg-black rounded-[10px] font-medium text-[16px] text-white cursor-pointer">Proceed to Checkout</button> */}



                                                {/* <Link to="/login">
                                                            <button className="w-full mt-6 h-12 bg-black rounded-[10px] font-medium text-[16px] text-white cursor-pointer">Login to Proceed</button>
                                                        </Link> */}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;