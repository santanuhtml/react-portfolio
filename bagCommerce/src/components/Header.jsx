import { PiUserCircleLight, PiShoppingCartLight, PiHeartStraightLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import { lazy, Suspense } from "react";
import React from "react";
const MobileMenu = React.lazy(() => import('./MobileMenu'));

import { useContext } from "react";
import CartContext from "../context/CartContext";

import { useState } from "react";

function Header() {

    // cartContext setup
    const {cartLength , cartMessage} = useContext(CartContext)

    // Mobile Menu setup
    const [menuVisible, setMenuVisible] = useState(false);
    const menuToggle = () => {
        return setMenuVisible(prev => !prev);
    }


    return (
        <>
            {cartMessage && <div className="fixed w-full text-center top-0 z-100 p-2 bg-red-300 text-black">Product Already Added</div>}
            <header className="border-b border-gray-300 bg-white z-10 sticky -top-px">
                <div className="container max-w-screen-2xl mx-auto px-6">
                    <div className="flex justify-between lg:grid items-center grid-cols-[1fr_3fr_1fr] gap-4 py-5">
                        <div className="text-3xl font-semibold">
                           <Link to="/"> bagStore</Link>
                        </div>
                        <div className="text-center hidden lg:block">
                            <ul className="flex flex-row justify-center gap-6 text-[15px] md:text-[17px]">
                                <li><Link to="/products">Latest Products</Link></li>
                                <li><Link to="/products/category/luggage">Luggage</Link></li>
                                <li><Link to="products/category/backpacks">Backpacks</Link></li>
                                <li><Link to="products/category/duffles">Duffles</Link></li>
                                <li><Link to="products/category/accessories">Accessories</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-row float-right gap-3 sm:gap-4 items-center">
                                <li className="relative group">
                                    <Link className="flex gap-1.5 items-center" to="/login">
                                        <PiUserCircleLight size={28} /> Login
                                    </Link>
                                    {/* <div className="text-[13px]">Hi Santanu</div> */}
                                    <div className="absolute hidden group-hover:block bg-white min-w-[180px] p-[15px] border border-gray-300 rounded-[10px] text-[15px] left-1/2 -translate-x-1/2 ">
                                        <ol className="flex flex-col gap-1.5">
                                            <li>My Profile</li>
                                            <li>Orders</li>
                                        </ol>
                                    </div>
                                </li>
                                <li className="relative">
                                    <Link to="/cart">
                                        <PiShoppingCartLight size={28} />
                                        <div className="-top-1 -right-2 w-5 h-5 bg-red-500 font-medium rounded-full text-[13px] flex justify-center items-center text-white absolute">{cartLength}</div>
                                    </Link>
                                </li>
                                <li><PiHeartStraightLight size={28} /></li>
                                <li onClick={menuToggle} className="block lg:hidden"><RxHamburgerMenu  size={28} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Suspense>
                <MobileMenu menuVisible={menuVisible} menuToggle={menuToggle} />
            </Suspense>
        </>
    )
}

export default Header;