
import { useParams } from "react-router";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import FeaturesProductCard from "../../components/FeaturesProductCard";
import { useEffect, useState } from "react";
import { getProductById, getRelatedProducts } from "../../api/productService";

// {
//   id: product.id,
//   title: product.title,
//   color: selectedColor.name,
//   size: selectedSize.label,
//   quantity: 1,
//   price: product.price
// }

function ProductDetail(){
     const { slug } = useParams();
     const [product, setProduct] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null)
     const [selectedColor, setSelectedColor] = useState(null);
     const [selectedSize, setSelectedSize] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(()=>{
        setLoading(true);
        setProduct(null)
        const fetchProduct = async () =>{
            try{
                const fetchedProduct = await getProductById(slug);
                setProduct(fetchedProduct);

                if(fetchedProduct?.category){
                    const related = await getRelatedProducts(fetchedProduct.category);
                    setRelatedProducts(related.filter(p => p.slug !== slug));

                }

                // Initialize color & size AFTER product is loaded
                if (fetchedProduct.colors?.length > 0) {
                setSelectedColor(fetchedProduct.colors[0]);
                setSelectedSize(fetchedProduct.colors[0].sizes[0]);
                }

            }catch (err){
                setError("Unable to fetch product details. Please try again later.");
            }finally{
                setLoading(false);
            }
        }
        fetchProduct()
    },[slug]);

    if(loading){
        return(
            <div className="text-center py-20 text-lg animate-pulse text-gray-600">
                Loading product details...
            </div>
        )
    }
    
    if (error){
        return (
        <div className="text-center py-20 text-red-500 font-semibold">
            {error}
        </div>
        )
    }

    if (!product){
        return (
        <div className="text-center py-20 text-gray-500 font-medium">
            Product not found.
        </div>
        )
    }
    console.log(product);

    return(
        <>
            
            <section>
                <div className="container  mx-auto px-3 md:px-6 py-10 md:py-15">
                    <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-8">
                        <div>
                            <div>
                                <img className="rounded w-full"
                                src={`https://placehold.co/600x650`}
                                alt="{product.title}" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className="text-5xl font-bold">{product.title}</h2>
                                <div className="mt-6">
                                    <p>{product.description}</p>
                                </div>
                                <div className="mt-8 flex justify-between items-center">
                                    <div>
                                        <div className=" uppercase  text-3xl font-semibold block">${product.price} <span className="text-[20px] text-red-400 line-through">${(product.price + 10).toFixed(2)}</span></div>
                                    </div>
                                    <div>
                                        <ul className="flex gap-0.5">
                                            <li><PiStarFill size={22} className="text-yellow-500" /></li>
                                            <li><PiStarFill size={22} className="text-yellow-500"  /></li>
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
                                                        }}
                                                        className={`w-7 h-7 rounded-[50px] cursor-pointer border-2 ${
                                                            selectedColor.name === color.name
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
                                        <div className="flex gap-3 text-[17px] ">
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
                                                    className={`w-9 h-9 border flex items-center justify-center cursor-pointer rounded ${
                                                        selectedSize.label === size.label
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
                                        <div className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-2 mt-3">
                                            <div className="w-full h-16 bg-gray-200 rounded-[50px] flex gap-1 items-center  justify-between p-2">
                                                <button className="h-full w-16 bg-black grow rounded-[50px] text-white text-2xl cursor-pointer">-</button>
                                                <div className="h-full w-16 bg-white grow rounded-[50px] text-[20px] text-black flex justify-center items-center">1</div>
                                                <button className="h-full w-16 bg-black grow rounded-[50px] text-white text-[20px] cursor-pointer">+</button>
                                            </div>
                                            <div className="grow">
                                               <button className="w-full h-16 bg-black rounded-[50px] font-semibold text-xl text-white cursor-pointer">Add to Cart</button>
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
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10" >
                                    {relatedProducts.map((item)=>(
                                        <div>
                                            <FeaturesProductCard key={item.id} productInfo={item} />
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


