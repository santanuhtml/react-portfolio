import { Link } from "react-router";

function Footer(){
    return(
        <>
            <footer className="bg-[#292929] pt-15 pb-8">
                <div className="container max-w-screen-2xl mx-auto px-6">
                    <div className="grid text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" >
                        <div>
                            <div className="text-3xl font-semibold text-white">
                                bagStore
                            </div>
                            <p className="mt-5 1text-[18px]">Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit.</p>
                            <a href="#" className="uppercase underline text-[20px] font-semibold mt-7 block">+95832-2341</a>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Our Store</h3>
                            <ul className="mt-5 flex flex-col justify-center gap-1 text-[15px] md:text-[17px]">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About Us</Link>
                                </li>
                               <li>
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                               <li>
                                    <Link to="/faq">FAQs</Link>
                                </li>
                        
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Quick Links</h3>
                            <ul className="mt-5 flex flex-col justify-center gap-1 text-[15px] md:text-[17px]">
                                <li><a href="#">Latest Products</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Products</h3>
                            <ul className="mt-5 flex flex-col justify-center gap-1 text-[15px] md:text-[17px]">
                                <li><Link className="text-white" to="/products">Latest Products</Link></li>
                                <li><Link className="text-white" to="/products/category/luggage">Luggage</Link></li>
                                <li><Link className="text-white" to="products/category/backpacks">Backpacks</Link></li>
                                <li><Link className="text-white" to="products/category/duffles">Duffles</Link></li>
                                <li><Link className="text-white" to="products/category/accessories">Accessories</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-10">
                        <hr className="border-t border-gray-500"/>
                    </div>
                    <p className="text-center px-6 text-white text-[14px]">Copy-Right 2025</p>
                </div>
            </footer>

        </>
    )
}

export default Footer;