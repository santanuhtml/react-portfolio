import { lazy } from "react";

// Lazy load secondary pages
const UserProfile = lazy(()=> import("../pages/user/UserProfile"));
const EditUserProfile = lazy(()=> import("../pages/user/EditUserProfile"));
const ChangeUserPassword = lazy(()=> import("../pages/user/ChangeUserPassword"));
const CheckoutPage = lazy(()=> import("../pages/user/CheckoutPage"));

export const userRoutes = [
    {
        path: '/user/profile/',
        element: UserProfile
    },
    {
        path: '/user/edit-profile/',
        element: EditUserProfile
    },
    {
        path: '/user/change-password/',
        element: ChangeUserPassword
    },
    {
        path: '/checkout/',
        element: CheckoutPage
    }
];
