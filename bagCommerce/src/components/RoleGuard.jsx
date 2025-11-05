import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";


function RoleGuard({ roles }) {
	const { user } = useContext(AuthContext);
	// If no user or role doesn't match, redirect
	if (!user || !roles.includes(user.role)) {
		return <Navigate to="/unauthorized" replace />;
	}
	return <Outlet />;
}

export default RoleGuard;