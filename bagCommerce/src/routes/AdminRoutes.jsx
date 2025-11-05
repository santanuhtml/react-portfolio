import { lazy } from "react";

// Lazy load secondary pages
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));

export const adminRoutes = [
    {
        path: '/dashboard',
        element: Dashboard
    }
];
