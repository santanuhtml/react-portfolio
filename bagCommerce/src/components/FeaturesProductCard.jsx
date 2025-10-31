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
                    <img className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[390px] w-full object-cover rounded" src="https://placehold.co/600x650" alt={title} />
                </Link>
                <div className="mt-4 text-center">
                    <Link to={`/products/${slug}`} className="text-xl font-semibold">{title}</Link>
                    <a className="uppercase text-[18px] font-semibold mt-2 block" href="#">${price}</a>
                </div>
            </div>
        </>
    )
}

export default FeaturesProductCard;