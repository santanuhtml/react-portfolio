import { Link } from "react-router";

function FeaturesProductCard({productInfo}){
    if (!productInfo) {
        return <p>Loading product details...</p>; // Or any other placeholder content
    }
      const { image, title, price, slug, id } = productInfo;

    return(
        <>
            <div>
                <Link to={`/products/${slug}`}>
                    <img className="h-60 sm:h-[250px] md:h-[260px] lg:h-[270px] xl:h-[280px] w-full object-cover rounded" src="https://placehold.co/600x650" alt={title} />
                </Link>
                <div className="mt-2 lg:mt-3 xl:mt-4 text-center">
                    <Link to={`/products/${slug}`} className="leading-[1.3px] text-[13px] md:taxt-[15px] lg:text-[18px]  font-semibold">{title}</Link>
                    <div className="uppercase text-[15px] md:text-[18px] font-semibold mt-1 xl:mt-2 block" href="#">${price}</div>
                </div>
            </div>
        </>
    )
}

export default FeaturesProductCard;