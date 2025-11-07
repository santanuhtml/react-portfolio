import { BsLuggage } from "react-icons/bs";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import MaintenanceModal from "./modals/MaintenanceModal";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import axios from "axios";
import { Suspense } from "react";

// Auth Guard
import AuthGuard from "./components/AuthGuard";
import RoleGuard from "./components/RoleGuard";

// Route configurations
import { publicRoutes } from "./routes/PublicRoutes";
import { userRoutes } from "./routes/UserRoutes";
import { editorRoutes } from "./routes/EditorRoutes";
import { adminRoutes } from "./routes/AdminRoutes";


function App() {
  const { pageLoader } = useContext(AuthContext);

  // Api Issue check
  const [apiError, setApiError] = useState(null);
  useEffect(() => {
    axios.get('https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers')
      .then(() => setApiError(null))
      .catch(() => setApiError('API issue: Unable to connect!, Refresh page'));
  }, []);

  // Page Loader
  if(pageLoader) {
    return <>
      <div className="h-screen flex items-center justify-center">
        <div className="text-3xl font-semibold flex gap-3 animate-pulse">
            bagStore <BsLuggage size={32} />
        </div>
      </div>
    </>
  }

  return (
    <>
      {apiError && <div className="bg-red-500 text-center p-1 text-white text-[14px]"><div className="animate-pulse">{apiError}</div></div>}

      {/* <MaintenanceModal modalTitle="Site is Under Development" /> */}
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<Layout />}>

              {/* Public Routes */}
              {publicRoutes.map(route => (
                <Route key={route.path} path={route.path} element={<route.element />} />
              ))}

              {/* User Routes - Protected by AuthGuard */}
              <Route element={<AuthGuard />}>
                <Route element={<RoleGuard roles={['user', 'editor', 'admin']} />}>
                  {userRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                  ))}
                </Route>
              </Route>

              {/* Editor Routes */}
              <Route element={<RoleGuard roles={['editor']} />}>
                {editorRoutes.map(route => (
                  <Route key={route.path} path={route.path} element={<route.element />} />
                ))}
              </Route>

              {/* Admin Routes */}
              <Route element={<RoleGuard roles={['admin']} />}>
                {adminRoutes.map(route => (
                  <Route key={route.path} path={route.path} element={<route.element />} />
                ))}
              </Route>

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App;