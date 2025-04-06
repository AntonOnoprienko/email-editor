import HomePage from "../pages/HomePage.jsx";
import PostList from "../components/PostList.jsx";
import PostIdPage from "../pages/PostIdPage/PostIdPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const routes = [
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
    },

]
