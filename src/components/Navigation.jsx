import React, {useContext} from 'react';
import CustomNavLink from "./UI/CustomNavLink/CustomNavLink.jsx";
import {AuthContext} from "../context/index.js";
import cl from './UI/CustomNavLink/CustomNavLink.module.css'


const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth');
    }
    return (
        <nav className='navigator'>
            <CustomNavLink to="/"> Главная </CustomNavLink> |
            <CustomNavLink to="posts"> Посты </CustomNavLink> |
            <CustomNavLink to="/about"> О нас </CustomNavLink> |
            { isAuth ?
            <span className={cl.link} onClick={logout}> Выйти </span> :
            <CustomNavLink to="/login"> Войти </CustomNavLink> }
        </nav>
    );
};

export default Navigation;