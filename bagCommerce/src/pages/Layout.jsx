import { Outlet } from "react-router";
import HeaderNotificaton from "../components/HeaderNotificaton";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Layout(){
    return(
        <>
            <HeaderNotificaton />
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout;