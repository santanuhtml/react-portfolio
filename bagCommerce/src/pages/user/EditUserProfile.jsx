
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import UserSideMenu from "./UserSideMenu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

function EditUserProfile() {
    const navigate = useNavigate();

    const { user, isAuthenticated, login } = useContext(AuthContext);

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        landmark: "",
        phone2: ""
    });


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers/${user.id}`, values)
            .then((res) => {
                login(res.data); //Update USER DATA ***
                navigate('/user/profile/')
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (user) {
            setValues({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                dob: user.dob || "",
                gender: user.gender || "",
                address: user.address || "",
                city: user.city || "",
                state: user.state || "",
                pincode: user.pincode || "",
                landmark: user.landmark || "",
                phone2: user.phone2 || ""
            });
        }
    }, [user]);


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

                                <h3 className="uppercase text-[18px] font-semibold block">Update Profile</h3>
                                <form onSubmit={handleUpdate}>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">Name</label>
                                            <input
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.name}

                                                onChange={(e) => setValues({ ...values, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">Email</label>
                                            <input
                                                value={values.email}
                                                className="bg-gray-200 w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                disabled
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">Contact</label>
                                            <input
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.phone}

                                                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">DOB</label>
                                            <input
                                                placeholder="DD/MM/YYYY"
                                                type="date"
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.dob}

                                                onChange={(e) => setValues({ ...values, dob: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">Gender</label>
                                            <select
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
                                                value={values.gender}
                                                onChange={(e) => setValues({ ...values, gender: e.target.value })}
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h3 className="uppercase text-[16px] font-semibold block">Address:</h3>
                                    </div>
                                    <div className="mt-3">
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">Address</label>
                                            <textarea
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.address}
                                                onChange={(e) => setValues({ ...values, address: e.target.value })}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">City</label>
                                            <input
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.city}
                                                onChange={(e) => setValues({ ...values, city: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">State</label>
                                            <input
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.state}
                                                onChange={(e) => setValues({ ...values, state: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">Pin Code</label>
                                            <input

                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.pincode}
                                                onChange={(e) => setValues({ ...values, pincode: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">LandMark</label>
                                            <input

                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.landmark}
                                                onChange={(e) => setValues({ ...values, landmark: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-1 text-[13px]">Contact</label>
                                            <input
                                                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2"

                                                value={values.phone2}
                                                onChange={(e) => setValues({ ...values, phone2: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="h-12 mt-6 px-15 bg-black rounded-[10px] font-medium text-[16px] text-white cursor-pointer">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default EditUserProfile;