import {NavLink} from "react-router-dom";
import cl from './CustomNavLink.module.css'

const CustomNavLink = ({to, children}) => {
    return (
        <NavLink to={to}
        className={({isActive}) => `${cl.link} ${isActive ? cl.active : ''}`}
        >
            {children}
        </NavLink>
    )
}

export default CustomNavLink