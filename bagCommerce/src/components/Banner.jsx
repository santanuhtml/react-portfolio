function Banner(){
    return(
        <>
            <div className="flex bg-gray-200 h-[550px] items-center">
               <div className="container max-w-screen-2xl mx-auto px-6">
                   <div className="flex lg:grid grid-cols-[6fr_5fr]">
                    <div>
                        <div className="text-2xl font-semibold">Ready For Office!</div>
                        <h1 className="text-5xl md:text-6xl font-bold mt-5">Get Best Office Collection</h1>
                        <p className="mt-5 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corporis ut obcaecati quae perspiciatis amet saepe iste iusto.</p>
                        <a className="uppercase underline text-xl font-semibold mt-8 block" href="#">Shop Now</a>
                    </div>
                    <div>
                    </div>
                   </div>
               </div>
            </div>
        </>
    )
}

export default Banner;