import HomePage from "../pages/HomePage.jsx";
import PostList from "../components/PostList.jsx";
import PostIdPage from "../pages/PostIdPage/PostIdPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {
        path: '/',
        element: < HomePage />
    },
    {
        path: '/posts',
        element: <PostList />
    },
    {
        path: '/posts/:id',
        element: < PostIdPage />
    },
    {
        path: '/about',
        element: < AboutPage />
    },
    {
        path: '*',
        element: < ErrorPage />
    }

]
export const publicRoutes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '*',
        element: <Navigate to="/login" replace />
    }

]
