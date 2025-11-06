
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router";


import { TbUserEdit } from "react-icons/tb";

import UserSideMenu from "./UserSideMenu";


function UserProfile(){

    const {user, isAuthenticated} = useContext(AuthContext);

    if (!isAuthenticated) {
        return <p className="bg-red-600 h-full">Please log in to view your profile.</p>;  // Fallback UI when no user is logged in
    }

    return(
        <>
            <section>
                <div className="container  mx-auto px-3 md:px-6 py-5 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_10fr] gap-6">
                        <UserSideMenu />
                        <div>
                            <div className="text-[14px] border border-gray-300 rounded-xl px-6 py-8 relative">
                               
                                <div>
                                   <Link  className="flex gap-2 item-center" to="/user/edit-profile/"> <TbUserEdit size={22} /> Personal Info</Link>
                                </div>
                               <div>
                                
                               </div>
                               <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">Name</label>
                                        <input 
                                        value={user.name}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">Email</label>
                                        <input 
                                        value={user.email}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">Contact</label>
                                        <input 
                                        value={user.phone}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">DOB</label>
                                        <input 
                                        placeholder="DD/MM/YYYY"
                                        value={user.dob}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">Gender</label>
                                        <input 
                                        
                                        value={user.gender}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                               </div>
                               <div className="mt-8">
                                    <h3 className="uppercase text-[16px] font-semibold block">Address:</h3>
                               </div>
                                <div className="mt-3">
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">Address</label>
                                        <textarea 
                                       value={user.address}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mt-2">
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">City</label>
                                        <input 
                                        value={user.city}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">State</label>
                                        <input 
                                        value={user.state}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">Pin Code</label>
                                        <input 
                                        value={user.pincode}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">LandMark</label>
                                        <input 
                                        value={user.landmark}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 block mb-1 text-[13px]">Contact</label>
                                        <input 
                                        value={user.phone2}
                                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                        disabled
                                         />
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
export default UserProfile;