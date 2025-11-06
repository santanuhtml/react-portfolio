
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import UserSideMenu from "./UserSideMenu";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function EditUserProfile() {

    const navigate = useNavigate();

    const { user, isAuthenticated, login } = useContext(AuthContext);

    const [values, setValues] = useState({
        currentPassword: "",
        newPassword: "",
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        if(user.password===values.currentPassword){
            const currentPassword = values.currentPassword;
            axios.put(`https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers/${user.id}`, {...user, password: values.newPassword})
            .then((res) => {
                login(res.data); //Update USER DATA ***
                navigate('/user/profile/')
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else{
            console.log('Current Password Not Matched!')
        }
    }



    if (!isAuthenticated) {
        return <p className="bg-red-600 h-full">Please log in to view your profile.</p>;  // Fallback UI when no user is logged in
    }

    return (
        <>
            <section>
                <div className="container  mx-auto px-3 md:px-6 py-5 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_10fr] gap-6">
                        <UserSideMenu />
                        <div>
                            <div className="text-[14px] border border-gray-300 rounded-xl px-6 py-8 relative">

                                <h3 className="uppercase text-[18px] font-semibold block">Change Password</h3>
                                <div className="grid grid-cols-[8fr_4fr] mt-6">
                                    <form onSubmit={handleUpdate}>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="text-gray-600 block mb-1 text-[13px]">Email</label>
                                                <input
                                                    value={user.email}
                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    disabled
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-600 block mb-1 text-[13px]">Current Password</label>
                                                <input
                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    value={values.currentPassword}
                                                    onChange={(e) => setValues({ ...values, currentPassword: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-600 block mb-1 text-[13px]">New Password</label>
                                                <input

                                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                    value={values.newPassword}
                                                    onChange={(e) => setValues({ ...values, newPassword: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <button className="h-12 px-10 bg-black rounded-[10px] font-medium text-[16px] text-white cursor-pointer">Change Password</button>
                                            </div>
                                        </div>
                                    </form>
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
export default EditUserProfile;