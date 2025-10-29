import { PiUserCircleLight, PiShoppingCartLight, PiHeartStraightLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

function Header() {
    return (
        <>
            <header className="border-b border-gray-300">
                <div className="container max-w-screen-2xl mx-auto px-6">
                    <div className="flex justify-between lg:grid items-center grid-cols-[1fr_3fr_1fr] gap-4 py-5">
                        <div className="text-3xl font-semibold">
                           <Link to="/"> bagStore</Link>
                        </div>
                        <div className="text-center hidden lg:block">
                            <ul className="flex flex-row justify-center gap-6 text-[15px] md:text-[17px]">
                                <li><a href="#">Latest Products</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-row float-right gap-3 sm:gap-4">
                                <li><PiUserCircleLight size={28} /></li>
                                <li><PiShoppingCartLight size={28} /></li>
                                <li><PiHeartStraightLight size={28} /></li>
                                <li className="block lg:hidden"><RxHamburgerMenu size={28} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;