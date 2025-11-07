import { RxCross2} from "react-icons/rx";
import { RxArrowLeft } from "react-icons/rx";
import { PiMoney, PiCreditCard, PiPaypalLogoFill } from "react-icons/pi";


import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import CartContext from "../../context/CartContext";
import { Link, Navigate } from "react-router";
import { useState } from "react";

function CheckoutPage() {
    // user setup
    const { isAuthenticated, user } = useContext(AuthContext);
    const [selectedPayment, setSelectedPayment] = useState(null);
    // const [selectedPayment, setSelectedPayment] = useState("cash");


    //cart context setup
    const { cart, cartLength, cartPrice, handleChange, handleDelete } = useContext(CartContext);


    const deliveryFee = cartLength > 0 ? 5 : 0;
    const totalPrice = cartPrice + deliveryFee;
    return (
        <>
            <section>
                <div className="container max-w-screen-2xl mx-auto px-3 md:px-6 py-5 md:py-5">
                    <Link to="/cart/"><div className="font-medium flex gap-2 items-center"><RxArrowLeft size={22} /> Back</div></Link>
                    <h1 className="text-xl xl:text-2xl font-bold uppercase mt-3">Checkout</h1>
                    <div className="mt-4">
                        <div className="grid lg:grid-cols-[6fr_3fr] xl:grid-cols-[6fr_3fr] gap-4">
                            <div className="text-[14px] border rounded px-6 py-7 border-gray-200">
                                <div className="flex flex-col gap-7">
                                    <div>
                                        <h3 className="uppercase text-[16px] font-semibold block">1. Shipping Address</h3>
                                        <div className="mt-2 flex flex-col gap-2">
                                            {/* Loop */}
                                            <div className="flex flex-col gap-1 p-4 bg-gray-100 rounded">
                                                <div>Name: {user.name}</div>
                                                <div>Address: {user.address}</div>
                                                <div>City: {user.city} | State: {user.state}</div>
                                                <div>Pincode: {user.pincode}</div>
                                                <div>Landmark: {user.landmark}</div>
                                                <div>Phone Number: {user.phone}</div>

                                                <div><div className="font-medium mt-2 underline">Edit Address</div></div>
                                            </div>
                                            {/* Loop */}
                                            {/* <div className="font-medium mt-2 underline">Add a new delivery address</div> */}
                                        </div>
                                        <div>
                                            {/* <div className="grid grid-cols-3 gap-4 mt-2">
                                            <div className="col-span-3">
                                                    <label className="text-gray-600 block mb-1 text-[13px]">Address</label>
                                                    <textarea 
                                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    >
                                                    </textarea>
                                                </div>
                                                <div>
                                                    <label className="text-gray-600 block mb-1 text-[13px]">City</label>
                                                    <input 
                                                    placeholder="Your Name"
                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-gray-600 block mb-1 text-[13px]">State</label>
                                                    <input 
                                                    placeholder="Your Name"
                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-gray-600 block mb-1 text-[13px]">Pin Code</label>
                                                    <input 
                                                    placeholder="Your Name"
                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    />
                                                </div>
                                                <div className="col-span-2">
                                                    <label className="text-gray-600 block mb-1 text-[13px]">Landmark</label>
                                                    <input 
                                                    placeholder="Your Name"
                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-gray-600 block mb-1 text-[13px]">Another Contact</label>
                                                    <input 
                                                    placeholder="Your Name"
                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="uppercase text-[16px] font-semibold block">2. Payment Method</h3>
                                        <div className="mt-2 flex flex-col gap-2">
                                            <div className="flex flex-col gap-1 rounded">
                                                <div className="flex flex-wrap gap-4">
                                                    <label 
                                                      className={`cursor-pointer p-4 bg-gray-200 rounded grow text-[18px] flex items-center gap-2
                                                      ${selectedPayment === "cash" ? "border border-black bg-gray-100" : "border bg-gray-200 border-white"}`}
                                                      >
                                                        <input 
                                                        type="radio" 
                                                        name="payment" 
                                                        value="cash" 
                                                        className="accent-black w-4 h-4"

                                                        onChange={(e)=> setSelectedPayment(e.target.value)}
                                                        checked={selectedPayment === "cash"}
                                                        />
                                                        <PiMoney size={24} /> Cash
                                                    </label>

                                                    <label 
                                                     className={`p-4 bg-gray-200 rounded grow text-[18px] flex items-center gap-2 opacity-70
                                                      ${selectedPayment === "card" ? "border border-black bg-gray-100" : "border bg-gray-200 border-white"}`}
                                                      >
                                                        <input 
                                                        type="radio" 
                                                        name="payment" 
                                                        value="card" 
                                                        className="accent-black w-4 h-4" 
                
                                                         checked={selectedPayment === "card"}
                                                         onChange={(e) => setSelectedPayment(e.target.value)}
                                                         disabled
                                                        />
                                                        <PiCreditCard size={24} /> Card
                                                    </label>

                                                    <label 
                                                     className={` p-4 bg-gray-200 rounded grow text-[18px] flex items-center gap-2 opacity-70
                                                      ${selectedPayment === "paypal" ? "border border-black bg-gray-100" : "border bg-gray-200 border-white"}`}
                                                      >
                                                        <input 
                                                        type="radio" 
                                                        name="payment" 
                                                        value="paypal" 
                                                        className="accent-black w-4 h-4" 

                                                        checked={selectedPayment === "paypal"}
                                                        onChange={(e) => setSelectedPayment(e.target.value)}
                                                        disabled
                                                        />
                                                        <PiPaypalLogoFill size={24} /> Paypal
                                                    </label>
                                                </div>

                                                <div></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col gap-4">
                                    <div className="border rounded p-5 border-gray-200 ">
                                        <h3 className="text-xl lg:text-2xl font-semibold block mb-1">Your Order</h3>


                                        <div className="flex flex-col gap-4 mt-4">
                                            {cartLength === 0 ? (
                                                <Navigate to="/cart/" replace />
                                            ) : (
                                                <>
                                                    {cart.map((item) => (
                                                        <div key={`${item.id}-${item.color}-${item.size}`} className="grid gap-2 grid-cols-[2fr_12fr]">
                                                            <div>
                                                                <img
                                                                    className="rounded w-full"
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                />
                                                            </div>
                                                            <div className="flex justify-between gap-2">
                                                                <div className="flex flex-col gap-1">
                                                                    <h3 className="text-[14px] font-semibold block mb-1">{item.title}</h3>
                                                                    <div className="flex gap-3 flex-wrap">
                                                                        <p className="text-[13px] text-gray-500"><span className="font-medium">Size:</span> {item.size}</p>
                                                                        <p className="text-[13px] text-gray-500 flex items-center gap-1">
                                                                            <span className="font-medium">Color:</span>
                                                                            <span
                                                                                className="inline-block w-4 h-4 rounded-full border"
                                                                                style={{ backgroundColor: item.color }}
                                                                            ></span>
                                                                        </p>
                                                                        <p className="text-[13px] text-gray-500"><span className="font-medium">Item:</span> {item.amount}</p>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="flex gap-2">
                                                                    <div>
                                                                        <div className="text-[17px] font-semibold block mb-1"> ${item.price.toFixed(2)}</div>
                                                                        {/* <div>
                                                                                <div className="w-full h-9  rounded-[50px] flex gap-1 items-center  justify-between p-1">
                                                                                    <button onClick={() => handleChange(item.id, item.color, item.size, -1)} className="h-full w-4 bg-gray-300 grow rounded-[50px] text-black text-[16px] cursor-pointer">-</button>
                                                                                    <div className="h-full w-2 bg-white grow rounded-[50px] text-[15px] text-black flex justify-center items-center">{item.amount}</div>
                                                                                    <button onClick={() => handleChange(item.id, item.color, item.size, +1)} className="h-full w-4 bg-gray-300 grow rounded-[50px] text-black text-[16px] cursor-pointer">+</button>
                                                                                </div>
                                                                            </div> */}
                                                                    </div>
                                                                    <div>
                                                                        <RxCross2
                                                                            className="cursor-pointer text-gray-400 block mt-0.5"
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
                                        </div>
                                    </div>
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
                                                    {selectedPayment? (
                                                        <>
                                                        <Link to="/checkout/">
                                                            <button className="w-full mt-6 h-12 bg-black rounded-[10px] font-medium text-[16px] text-white cursor-pointer">Order Now</button>
                                                        </Link>
                                                        </>
                                                    ):(<>
                                                     <>
                                                     {/* make not clickable */}
                                                        <Link to="#">
                                                            <button className="w-full mt-6 h-12 bg-black rounded-[10px] font-medium text-[16px] text-white  opacity-20">Order Now</button>
                                                        </Link>
                                                        </>
                                                    </>)}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style>{`
                header, footer, .headerNotification{
                    display: none;
                }
                `}</style>
        </>
    )
}

export default CheckoutPage;