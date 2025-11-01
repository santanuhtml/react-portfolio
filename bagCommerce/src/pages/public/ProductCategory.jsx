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
                    <div className="h-[calc(100vh-117px)] text-center py-20 text-lg animate-pulse text-gray-600">Loading...</div>
                </div>
            </>
        )
    }

    return(
        <>
           
            
            <section>
                <div className="container max-w-screen-2xl mx-auto px-6 py-10 md:py-15">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold uppercase">{ categorySlug }</h1>
                    <br />
                    {products.length > 0 && (
                     <div className="mt-1 grid gap-4 lg:gap-5 xl:gap-7 grid-cols-[repeat(auto-fill,minmax(120px,1fr))]  md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">

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