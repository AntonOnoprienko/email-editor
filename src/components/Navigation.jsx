import React from 'react';
import {Link, NavLink} from "react-router-dom";
import CustomNavLink from "./UI/CustomNavLink/CustomNavLink.jsx";

const Navigation = () => {
    return (
        <nav className='navigator'>
            <CustomNavLink to="/"> Главная </CustomNavLink> |
            <CustomNavLink to="posts"> Посты </CustomNavLink> |
            <CustomNavLink to="/about"> О нас </CustomNavLink>
        </nav>
    );
};

export default Navigation;