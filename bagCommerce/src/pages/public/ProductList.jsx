import FeaturesProductCard from "../../components/FeaturesProductCard";
import PageBanner from "../../components/PageBanner";
import { getProducts } from "../../api/productService";
import { useEffect, useState } from "react";

function ProductList(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
         const fetchData = async () =>{
            try{
                const data = await getProducts();
                setProducts(data);
            }catch (error){
                console.error("Error fetching products:", error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if(loading){
        return(
            <>
                <div>
                    <div className="h-[calc(100vh-117px)] text-center py-20 text-lg animate-pulse text-gray-600">Loading...</div>
                </div>
            </>
        )
    }

    return(
        <> 
            {/* {getProducts()} */}
            <PageBanner title="All Products" />
            <section>
                <div className="container max-w-screen-2xl mx-auto px-3 md:px-6 py-10 md:py-15">
                    <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold uppercase">All Products</h1>
                    <br />
                    <div className="mt-1 grid gap-4 lg:gap-5 xl:gap-7 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]  md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">

                        {
                            products.map((product, id)=>(
                                <FeaturesProductCard key={product.id} productInfo={product} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductList;