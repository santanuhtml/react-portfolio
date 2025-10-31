import { lazy } from "react";

// Eager load Home (since it's your main page)
import Home from "../pages/public/Home";

// Lazy load secondary pages
const About = lazy(() => import("../pages/public/About"));
const Contact = lazy(()=> import("../pages/public/Contact"));
const Faq = lazy(()=> import("../pages/public/Faq"));
const ProductList = lazy(()=> import("../pages/public/ProductList"));
const ProductCategory = lazy(()=> import("../pages/public/ProductCategory"));
const ProductDetail = lazy(()=> import("../pages/public/ProductDetail"));




export const publicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/about-us',
        element: About
    },
    {
        path: '/contact-us',
        element: Contact
    },
    {
        path: '/faq',
        element: Faq
    },
    {
        path: '/products',
        element: ProductList
    },
    {
        path: '/products/category/:categorySlug',
        element: ProductCategory
    },
    {
        path: '/products/:slug',
        element: ProductDetail
    }
];
