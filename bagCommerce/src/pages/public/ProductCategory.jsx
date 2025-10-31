import FeaturesProductCard from "../../components/FeaturesProductCard";
import PageBanner from "../../components/PageBanner";
import { useParams } from "react-router";
import { getProductsByCategory } from "../../api/productService";
import { useEffect, useState } from "react";

function ProductCategory(){
      const { categorySlug } = useParams();
      const [products, setProducts] =  useState([]);
      const [loading, setLoading] = useState(true);

     useEffect(()=>{
         setProducts([]);
        setLoading(true);
         const fetchCategoryData = async () =>{
                try{
                    const data = await getProductsByCategory(categorySlug);
                     console.log(data);
                    setProducts(data);
                }catch (error){
                    console.error("Error fetching products:", error);
                    
                }finally{
                    setLoading(false);
                }
            }
            fetchCategoryData();
     },[categorySlug]);
    
    if(loading){
        return(
            <>
                <div>
                    <div className="text-center py-20 text-lg animate-pulse text-gray-600">Loading...</div>
                </div>
            </>
        )
    }

    return(
        <>
           
            
            <section>
                <div className="container max-w-screen-2xl mx-auto px-6 py-10 md:py-15">
                    <h1 className="text-4xl font-bold uppercase mb-2">{ categorySlug }</h1>
                    <br />
                    {products.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                        {products.map((item)=>(
                            <div>
                                <FeaturesProductCard key={item.id} productInfo={item} />
                            </div>
                        ))}
                    </div>
                    )}
                    {!products.length > 0 && (
                        <p>Product Not Available</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default ProductCategory;