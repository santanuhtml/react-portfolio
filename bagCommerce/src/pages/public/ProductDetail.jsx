
import { useParams, Link } from "react-router";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import FeaturesProductCard from "../../components/FeaturesProductCard";
import { useEffect, useState, useContext } from "react";
import { getProductById, getRelatedProducts } from "../../api/productService";
import CartContext from "../../context/CartContext";


function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [mainImage, setMainImage] = useState("");


    // cart context setup
    const { addCart, cart} = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        setProduct(null)
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProductById(slug);
                setProduct(fetchedProduct);

                if (fetchedProduct?.category) {
                    const related = await getRelatedProducts(fetchedProduct.category);
                    setRelatedProducts(related.filter(p => p.slug !== slug));
                }

                // Initialize color & size AFTER product is loaded
                if (fetchedProduct.colors?.length > 0) {
                    setSelectedColor(fetchedProduct.colors[0]);
                    setSelectedSize(fetchedProduct.colors[0].sizes[0]);
                    setMainImage(fetchedProduct.colors[0].images[0]);
                }

            } catch (err) {
                setError("Unable to fetch product details. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [slug]);

    if (loading) {
        return (
            <>
                <div>
                    <div className="h-[calc(100vh-117px)] text-center py-20 text-lg animate-pulse text-gray-600">Loading...</div>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <div className="text-center py-20 text-red-500 font-semibold">
                {error}
            </div>
        )
    }

    if (!product) {
        return (
            <div className="text-center py-20 text-gray-500 font-medium">
                Product not found.
            </div>
        )
    }

    // cart button up
    const isInCart = cart.some(
        (item) =>
            item.id === product.id &&
            item.color === selectedColor?.name &&
            item.size === selectedSize?.label
        );

    return (
        <>
            <section>
                <div className="container  mx-auto px-3 md:px-6 py-10 md:py-15">
                    <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-8">
                        <div>
                            <div>
                                {/* <img className="rounded w-full"
                                    src={`https://placehold.co/600x650`}
                                    alt="{product.title}" /> */}
                                <img
                                    className="rounded w-full"
                                    src={mainImage}
                                    alt={product.title}
                                />
                                <div className="flex gap-2 mt-4">
                                    {selectedColor.images.map((img) => (
                                        <img
                                        key={img}
                                        src={img}
                                        onClick={() => setMainImage(img)}
                                        className={`w-16 h-16 object-cover cursor-pointer border rounded ${mainImage === img ? "border-black" : "border-gray-300"}`}
                                        />
                                    ))}
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">{product.title}</h2>
                                <div className="mt-6">
                                    <p>{product.description}</p>
                                </div>
                                <div className="mt-8 flex justify-between items-center">
                                    <div>
                                        <div className=" uppercase text-2xl  lg:text-3xl font-semibold block">${product.price} <span className="text-[20px] text-red-400 line-through">${(product.price + 10).toFixed(2)}</span></div>
                                    </div>
                                    <div>
                                        <ul className="flex flex-wrap gap-0.5">
                                            <li><PiStarFill size={22} className="text-yellow-500" /></li>
                                            <li><PiStarFill size={22} className="text-yellow-500" /></li>
                                            <li><PiStarFill size={22} className="text-yellow-500" /></li>
                                            <li><PiStarFill size={22} className="text-yellow-500" /></li>
                                            <li><PiStarHalfFill size={22} className="text-yellow-500" /></li>
                                            <li> (17 Reviews)</li>
                                        </ul>
                                    </div>
                                </div>

                                <ul className="mt-7 flex flex-col gap-6">
                                    <li>
                                        <div className="flex gap-3 text-[17px] items-center">
                                            <div className="font-semibold uppercase">colour:</div>
                                            {/* <div className="flex gap-2">
                                                <div className="w-7 h-7 rounded-[50px] bg-red-500 cursor-pointer"></div>
                                                <div className="w-7 h-7 rounded-[50px] bg-green-500 cursor-pointer"></div>
                                                <div className="w-7 h-7 rounded-[50px] bg-blue-500 cursor-pointer"></div>
                                            </div> */}

                                            <div className="flex gap-2">
                                                {product.colors.map((color) => (
                                                    <div
                                                        key={color.name}
                                                        onClick={() => {
                                                            setSelectedColor(color);
                                                            setSelectedSize(color.sizes[0]);
                                                            setMainImage(color.images[0]);
                                                        }}
                                                        className={`w-7 h-7 rounded-[50px] cursor-pointer border-2 ${selectedColor.name === color.name
                                                                ? "border-black scale-110"
                                                                : "border-gray-300"
                                                            }`
                                                        }
                                                        style={{ backgroundColor: color.name }}
                                                    >
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex gap-3 text-[17px] items-center">
                                            <div className="font-semibold uppercase">Bag Size:</div>
                                            {/* <div className="flex gap-3">
                                                <div className="w-7 h-7 border flex items-center justify-center leading-0 cursor-pointer">S</div>
                                                <div className="w-7 h-7 border flex items-center justify-center leading-0 cursor-pointer">M</div>
                                                <div className="w-7 h-7 border flex items-center justify-center leading-0 cursor-pointer">L</div>
                                            </div> */}
                                            <div className="flex gap-3">
                                                {selectedColor.sizes.map((size) => (
                                                    <div
                                                        key={size.label}
                                                        onClick={() => setSelectedSize(size)}
                                                        className={`w-9 h-9 border flex items-center justify-center cursor-pointer rounded ${selectedSize.label === size.label
                                                                ? "bg-black text-white border-black"
                                                                : "hover:bg-gray-100"
                                                            }`}
                                                    >
                                                        {size.label}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid grid-cols-1 lg:grid-cols-[4fr_8fr] xl:grid-cols-[5fr_8fr] gap-2 mt-3">
                                            {/* <div className="w-full h-16 bg-gray-200 rounded-[50px] flex gap-1 items-center  justify-between p-2">
                                                <button className="h-full w-16 bg-black grow rounded-[50px] text-white text-2xl cursor-pointer">-</button>
                                                <div className="h-full w-16 bg-white grow rounded-[50px] text-[20px] text-black flex justify-center items-center">1</div>
                                                <button className="h-full w-16 bg-black grow rounded-[50px] text-white text-[20px] cursor-pointer">+</button>
                                            </div> */}
                                            <div className="grow">


                                                {isInCart ? (
                                                    <Link to="/cart">
                                                    <button className="w-full h-16 bg-red-400 text-white rounded-full text-lg font-semibold">
                                                        View Cart
                                                    </button>
                                                    </Link>
                                                ) : (
                                                    <button
                                                    onClick={() =>
                                                        addCart({
                                                        id: product.id,
                                                        title: product.title,
                                                        color: selectedColor.name,
                                                        size: selectedSize.label,
                                                        price: product.price,
                                                        image: mainImage,   
                                                        // amount: 1,
                                                        })
                                                    }
                                                    className="w-full h-16 bg-black text-white rounded-full text-lg font-semibold"
                                                    >
                                                    Add to Cart
                                                    </button>
                                                )}

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {relatedProducts.length > 0 && (
                        <div className="mt-20">
                            <h2 className="text-4xl font-bold uppercase">Related Products</h2>
                            <br />
                            <div>
                                <div className="mt-1 grid gap-4 lg:gap-5 xl:gap-7 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]  md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
                                    {relatedProducts.map((item) => (
                                        <div key={item.id}>
                                            <FeaturesProductCard productInfo={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}



                </div>
            </section>
        </>
    )
}

export default ProductDetail;


