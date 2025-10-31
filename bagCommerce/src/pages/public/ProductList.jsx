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

    if (loading) return <p className="text-center py-10">Loading...</p>;


    return(
        <> 
            {/* {getProducts()} */}
            <PageBanner title="All Products" />
            <section>
                <div className="container max-w-screen-2xl mx-auto px-6 py-10 md:py-15">
                    <h1 className="text-4xl font-bold uppercase mb-2">All Products</h1>
                    <br />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

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