import { PiEyeClosed, PiEyes } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router";
function Login() {

    // Password Show hide
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <section>
                <div className="container px-3 md:px-30 py-5 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="min-h-110 bg-gray-200 rounded-xl">
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold uppercase mb-5">Login</h1>
                            <form className="flex flex-col gap-5">
                                <div>
                                    <label className="block mb-1 text-[15px]">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Email"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-black"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <label className="block mb-1 text-[15px]">Password</label>
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-black"
                                        required
                                    />
                                    <div className="absolute right-2 top-10 opacity-70">
                                        <div                   
                                        onClick={togglePassword}
                                        className="flex cursor-pointer">
                                            {showPassword ? (
                                                <PiEyes size={20} />
                                                ) : (
                                                <PiEyeClosed size={20} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="w-full h-12 bg-black rounded-md font-medium text-[16px] text-white cursor-pointer">Sign in</button>
                                </div>
                                <div>
                                    <p className="text-[13px]">Don't have an account? <Link to="/signup" className="underline">Sign up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
export default Login;