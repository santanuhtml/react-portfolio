
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import { publicRoutes } from "./routes/PublicRoutes";
import CustomModal from "./components/CustomModal";

function App() {
  return (
    <>
      <CustomModal modalTitle="Site is Under Development" />
      <BrowserRouter>
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