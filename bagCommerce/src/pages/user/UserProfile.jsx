
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate, Link } from "react-router";

import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { TbUserEdit } from "react-icons/tb";



function UserProfile(){

     const {user, logout, isAuthenticated} = useContext(AuthContext);

     const handleLogout = () =>{
        logout();
        Navigate('/login')
     }
    if (!isAuthenticated) {
        return <p className="bg-red-600 h-full">Please log in to view your profile.</p>;  // Fallback UI when no user is logged in
    }

    return(
        <>
            <section>
                <div className="container  mx-auto px-3 md:px-6 py-5 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_10fr] gap-6">
                        <div className="border border-gray-200 rounded-xl px-5 py-6">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link to="/user" className="flex gap-2.5 items-center">
                                    <AiOutlineUser size={20} /> Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex gap-2.5 items-center">
                                    <IoSettingsOutline size={19} /> Profile Settings
                                    </Link>
                                </li>
                                <li>
                                    <div onClick={handleLogout} className="flex gap-2.5 items-center cursor-pointer">
                                    <IoLogOutOutline size={21} /> Log out
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-[14px] border border-gray-300 rounded-xl px-6 py-8 relative">
                               
                                <div>
                                   <Link className="flex gap-2 item-center" to="/profile-edit"> <TbUserEdit size={22} /> Personal Info</Link>
                                </div>
                               
                               <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div>
                                        <label className="block mb-1 text-[13px]">Name</label>
                                        <input 
                                        value={user.name}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-[13px]">Email</label>
                                        <input 
                                        value={user.email}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-[13px]">Contact</label>
                                        <input 
                                        value={user.contact}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-[13px]">DOB</label>
                                        <input 
                                        placeholder="DD/MM/YYYY"
                                        value={user.contact}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-[13px]">Gender</label>
                                        <input 
                                        
                                        value={user.contact}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    
                               </div>
                                <div className="grid grid-cols-1 gap-4 mt-6">
                                    <h3 className="uppercase text-[16px] font-semibold mt-4 block">Address:</h3>
                                    <div>
                                        <label className="block mb-1 text-[13px]">Address Line:</label>
                                        <textarea 
                                        placeholder="Address"
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <h1>Profile Page</h1>
            <h2>Hello {user.name}</h2>
            <h3>User Details</h3>
            <ul>
                <li><strong>Role</strong> {user.role}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Phone:</strong> {user.phone}</li>
            </ul>
            
            <button onClick={handleLogout}>Logout</button> */}
        </>
    )
}
export default UserProfile