function PageBanner({title=""}){
    return(
        <>
            <section style={{ backgroundImage: "url('https://placehold.co/1900x600')" }} className="h-[300px] bg-center bg-cover bg-no-repeat bg-gray-300 flex justify-center items-center after:content-[''] after:absolute after:inset-0 after:bg-black/30 after:z-0 relative">
                <div className="container max-w-screen-2xl mx-auto px-6 py-20 text-center bg-center bg-cover bg-no-repeat">
                    <h1 className="text-5xl font-bold uppercase z-10 text-white relative">{title}</h1>
                </div>
            </section>
        </>
    )
}

export default PageBanner;