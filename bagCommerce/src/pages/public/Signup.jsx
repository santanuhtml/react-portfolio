import { PiEyeClosed, PiEyes } from "react-icons/pi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


function Signup() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const {user} = useContext(AuthContext);
    // react hook form setup
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm()

    // Password Show hide
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

     const formSubmit = async (data) => {

        // Prepare user data
        const newUser = {
            name: data.name,
            email: data.email,
            // phone: data.phone,
            password: data.password,
            role: "user"
        };
        
        // Check if email already exists    
        const response = await axios.get('https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers');
        const emailExists = response.data.some(user => user.email === data.email);
        if (emailExists) {
            setErrorMessage('Email already exists');
            return;
        }

        // If not, create a new user
        await axios.post('https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers', newUser); 
        reset();
        setErrorMessage('');
        navigate('/login');
     }

    useEffect(() => {
        if (user) {
            navigate('/user');
        }
    }, [user]);

    // Prevent rendering the login form if the user is already logged in
    if (user) return <p>Redirecting...</p>;

    return (
        <>
            <section>
                <div className="container px-3 md:px-30 py-5 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="h-full bg-gray-200 rounded-xl">
                        </div>
                        <div className="py-4">
                            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold uppercase mb-5">Signup</h1>
                            <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-5">
                                <div>
                                    <label className="block mb-1 text-[15px]">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-black"
                                        {...register("name", {
                                            required:'Name is required'
                                        })}
                                    />
                                    <div>{errors.name && <p>{errors.name.message}</p>}</div>
                                </div>
                                <div>
                                    <label className="block mb-1 text-[15px]">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-black"
                                        {...register("email", {
                                            required:'Email is required',
                                            pattern: { 
                                                value: /\S+@\S+\.\S+/, 
                                                message: "Invalid email" 
                                            }
                                        })}
                                    />
                                    <div>{errors.email && <p>{errors.email.message}</p>}</div>
                                </div>
                                <div className="relative">
                                    <label className="block mb-1 text-[15px]">Password</label>
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-black"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters",
                                            },
                                        })}
                                    />
                                    <div>{errors.password && <p>{errors.password.message}</p>}</div>
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
                                <div className="relative">
                                    <label className="block mb-1 text-[15px]">Confirm Password</label>
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-black"
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            validate: value => value === watch('password') || "Passwords do not match"
                                        })}
                                    />
                                    <div>{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}</div>
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
                                    <button type="submit" className="w-full h-12 bg-black rounded-md font-medium text-[16px] text-white cursor-pointer">Sign in</button>
                                    {errorMessage && <p className="text-xl mt-2 font-semibold text-red-500">{errorMessage}</p>}
                                </div>
                                <div>
                                    <p className="text-[13px]">You already have an account? <Link to="/login" className="underline">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
export default Signup;