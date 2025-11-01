import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { PiSunLight, PiMoonLight } from "react-icons/pi";
import Banner from "../../components/Banner";
import FeaturesBoxCard from "../../components/FeaturesBoxCard";
import FeaturesProductCard from "../../components/FeaturesProductCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function Home() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            {/* <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
                <header className="p-4">
                    <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
                        {theme === 'light' ? (<PiSunLight />) : (<PiMoonLight />)}
                    </div>
                </header>
                <main className="flex items-center justify-center">
                    <h1 className="text-4xl">Welcome to Dark Mode with Tailwind and Vite!</h1>
                </main>
            </div>*/}

            <Banner /> 
            
            <section>
                <div className="container max-w-screen-2xl mx-auto px-6 py-10 lg:py-15">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        autoplay={{ delay: 5000 }}
                        loop
                        breakpoints={{
                            320: { slidesPerView: 1 },   
                            640: { slidesPerView: 2 },   
                            1024: { slidesPerView: 3 },  
                            1280: { slidesPerView: 3 }, 
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                <FeaturesBoxCard info="Luggage" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <FeaturesBoxCard info="Backpacks" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <FeaturesBoxCard info="Duffles" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <FeaturesBoxCard info="Accessories" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section>
                <div className="container max-w-screen-2xl mx-auto px-6 py-10">
                    <div>
                        <h2 className="text-4xl font-bold uppercase text-center">Core Essentials</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10" >
                        <div>
                            <FeaturesProductCard productName="Crossbody bag" productPrice="$350.00" />
                        </div>
                        <div>
                            <FeaturesProductCard productName="Crossbody bag" productPrice="$350.00" />
                        </div>
                        <div>
                            <FeaturesProductCard productName="Crossbody bag" productPrice="$350.00" />
                        </div>
                        <div>
                            <FeaturesProductCard productName="Crossbody bag" productPrice="$350.00" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container max-w-screen-2xl mx-auto px-6 py-10 lg:py-15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <FeaturesBoxCard info="Travel Bag" />
                        </div>
                        <div>
                            <FeaturesBoxCard info="Work Bag" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;