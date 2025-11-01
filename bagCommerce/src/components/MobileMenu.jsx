import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

function MobileMenu({menuVisible, menuToggle }){
    if(!menuVisible){
        document.body.style.overflow = "auto";
        return null
    }else{
        document.body.style.overflow = "hidden";
    }

    return(
        <>
            <>
                <div className="fixed z-20 bg-black w-2/3 h-screen top-0 right-0 p-6">
                <div>
                    <RxCross2
                        className="absolute top-4 right-4 cursor-pointer text-white"
                        size={28}
                        onClick={menuToggle}
                        />
                </div>
                <div>
                        <ul className="mt-6 flex flex-col justify-center gap-4 text-[15px] md:text-[17px]">
                            <li><Link onClick={menuToggle} className="text-white" to="/products">Latest Products</Link></li>
                            <li><Link onClick={menuToggle} className="text-white" to="/products/category/luggage">Luggage</Link></li>
                            <li><Link onClick={menuToggle} className="text-white" to="products/category/backpacks">Backpacks</Link></li>
                            <li><Link onClick={menuToggle} className="text-white" to="products/category/duffles">Duffles</Link></li>
                            <li><Link onClick={menuToggle} className="text-white" to="products/category/accessories">Accessories</Link></li>
                        </ul>
                </div>
                </div>
            </>
        </>
    )
}

export default MobileMenu;