import { lazy } from "react";

// Lazy load secondary pages
const UserProfile = lazy(()=> import("../pages/user/UserProfile"));

export const userRoutes = [
    {
        path: '/user',
        element: UserProfile
    }
];
