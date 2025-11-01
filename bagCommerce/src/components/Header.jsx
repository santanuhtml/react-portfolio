import { PiUserCircleLight, PiShoppingCartLight, PiHeartStraightLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import { lazy, Suspense } from "react";
import React from "react";
const MobileMenu = React.lazy(() => import('./MobileMenu'));

import { useState } from "react";

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuToggle = () => {
        return setMenuVisible(prev => !prev);
    }


    return (
        <>
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
                            <ul className="flex flex-row float-right gap-3 sm:gap-4">
                                <li><PiUserCircleLight size={28} /></li>
                                <li><PiShoppingCartLight size={28} /></li>
                                <li><PiHeartStraightLight size={28} /></li>
                                <li onClick={menuToggle} className="block lg:hidden"><RxHamburgerMenu  size={28} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            

            <Suspense fallback={<div>Loading...</div>}>
                <MobileMenu menuVisible={menuVisible} menuToggle={menuToggle} />
            </Suspense>
        </>
    )
}

export default Header;