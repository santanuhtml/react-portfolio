import { PiEyeClosed, PiEyes } from "react-icons/pi";
import { useState,useEffect } from "react";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {

    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user, login} = useContext(AuthContext);
    const navigate = useNavigate();

    // Password Show hide
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const formSubmit = async (data) =>{
        const response = await axios.get('https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers');
        const loggedInUser = response.data.find((user) => user.email === data.email && user.password === data.password);
        if(loggedInUser){
            login(loggedInUser); // Log in the With USER DATA
            setErrorMessage('');
            navigate('/user/profile/');
        }
        else{
            setErrorMessage('Invalid credentials');
            setTimeout(()=>{
                setErrorMessage('');
            },3000)
           
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/user/profile/');
        }
    }, [user]);
    

    // Prevent rendering the login form if the user is already logged in
    if (user) return <p>Redirecting...</p>;


    return (
        <>
            <section>
                <div className="container px-3 md:px-30 py-5 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="min-h-110 bg-gray-200 rounded-xl">
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold uppercase mb-5">Login</h1>
                            <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-5">
                                <div>
                                    <label className="block mb-1 text-[15px]">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-black"
                                        {...register("email", {
                                            required: 'Email is required',
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
                                            required: 'password is required'
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
                                <div>
                                    <button className="w-full h-12 bg-black rounded-md font-medium text-[16px] text-white cursor-pointer">Sign in</button>
                                    {errorMessage && <p className="text-xl mt-2 font-semibold text-red-500">{errorMessage}</p>}
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