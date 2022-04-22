import * as React from 'react';
import { NavLink } from "react-router-dom";
interface NavItemProps {
    icon: React.ReactNode;
    path?: string;
    onClick?: () => void;
    isDisabled?: boolean;
}

const NavItem: React.FC<NavItemProps> = (props) => {
    const { icon, path, onClick, isDisabled } = props;
    return path ? (
        <NavLink to={path}>
            <div onClick={onClick} className={isDisabled ? 'opacity-50 cursor-pointer' : 'opacity-100 cursor-pointer'}>
                {icon} 
            </div>
        </NavLink>
    ) : (
        <div onClick={onClick} className={isDisabled ? 'opacity-50 cursor-pointer' : 'opacity-100 cursor-pointer'}>
            {icon} 
        </div>
    )
}

export default NavItem;