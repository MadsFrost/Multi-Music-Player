import * as React from 'react';
interface NavWrapperProps {
    children?: JSX.Element | JSX.Element[];
    isPlayer?: boolean;
}


const NavWrapper: React.FC<NavWrapperProps> = ({ children, isPlayer  }) => {
    const wrapperStyle = `flex items-center justify-center w-[350px] h-20 px-14 ${isPlayer ? "py-12 px-14" : "py-16 px-12"}`
    return (
        <div className={wrapperStyle}>
            {children}
        </div>
    )
}

export default NavWrapper;