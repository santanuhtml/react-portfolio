function FeaturesProductCard({productName="Add Product Name", productPrice="$"}){
    return(
        <>
            <div>
                <img className="h-[390px] w-full object-cover" src="https://placehold.co/600x722" alt={productName} />
                <div className="mt-4 text-center">
                    <h3 className="text-2xl font-semibold">{productName}</h3>
                    <a className="uppercase text-[18px] font-semibold mt-2 block" href="#">{productPrice}</a>
                </div>
            </div>
        </>
    )
}

export default FeaturesProductCard;