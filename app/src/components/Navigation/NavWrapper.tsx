import * as React from 'react';
interface NavWrapperProps {
    children?: JSX.Element | JSX.Element[];
    isPlayer?: boolean;
}


const NavWrapper: React.FC<NavWrapperProps> = ({ children, isPlayer  }) => {
    const wrapperStyle = `fixed flex items-center justify-between bottom-0 w-full h-20 z-100 px-14 ${isPlayer ? "py-12 px-14" : "py-16 px-12"}`
    return (
        <div className={wrapperStyle}>
            {children}
        </div>
    )
}

export default NavWrapper;