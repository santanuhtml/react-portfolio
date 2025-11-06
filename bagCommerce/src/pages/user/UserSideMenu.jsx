import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { PiListChecks, PiStar, PiPassword, PiFolderUser } from "react-icons/pi";


import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router";
function UserSideMenu() {
    const {user, logout, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
     const handleLogout = () =>{
        logout();
        navigate('/login');
     }
    return (
        <>
            <div className="border border-gray-200 rounded-xl px-5 py-8">
                <ul className="flex flex-col gap-4">
                    {/* <li>
                        <Link to="/" className="flex gap-2.5 items-center">
                            <PiFolderUser size={20} /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex gap-2.5 items-center">
                            <PiListChecks size={22} /> My Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex gap-2.5 items-center">
                            <PiStar size={20} /> My Review
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/user/profile/" className="flex gap-2.5 items-center">
                            <AiOutlineUser size={20} /> My Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/edit-profile/" className="flex gap-2.5 items-center">
                            <IoSettingsOutline size={19} /> Update Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/change-password/" className="flex gap-2.5 items-center">
                            <PiPassword size={20} /> Change Password
                        </Link>
                    </li>
                    <li>
                        <div onClick={handleLogout} className="flex gap-2.5 items-center cursor-pointer">
                            <IoLogOutOutline size={21} /> Log out
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default UserSideMenu;