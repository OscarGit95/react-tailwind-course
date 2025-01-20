import { NavLink } from "react-router-dom"

const NavItem = ({to, activeStyle, children}) => {
    return (
        <NavLink
            to={to}
            className={
                ({ isActive }) => isActive ? activeStyle : undefined
            }
        >
            {children}
        </NavLink>
    )
}

export default NavItem