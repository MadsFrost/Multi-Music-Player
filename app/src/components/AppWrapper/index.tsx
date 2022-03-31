import * as React from 'react';

interface AppWrapperProps {
    children?: JSX.Element | JSX.Element[];
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    return (
        <div className="text-white w-full h-screen overflow-hidden">
            {children}
        </div>
    )
}

export default AppWrapper;