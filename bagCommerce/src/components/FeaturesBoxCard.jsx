import { Link } from "react-router";


function FeaturesBoxCard({info="Add Bag Category"}) {
    return (
        <>
            <div className="w-full h-[350px] bg-gray-200 flex text-center justify-center items-center p-5">
                <div>
                    <h3 className="text-4xl font-bold">{info}</h3>
                    <Link to={`/products/category/${info}`} className="uppercase underline text-[20px] font-semibold mt-7 block" href="#">Shop Now</Link>
                </div>
            </div>
        </>
    )
}

export default FeaturesBoxCard;