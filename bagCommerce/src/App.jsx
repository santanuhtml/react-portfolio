
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import { publicRoutes } from "./routes/PublicRoutes";
import MaintenanceModal from "./modals/MaintenanceModal";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <MaintenanceModal modalTitle="Site is Under Development" />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
              {publicRoutes.map(route => (
                <Route key={route.path} path={route.path} element={<route.element />} />
              ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;