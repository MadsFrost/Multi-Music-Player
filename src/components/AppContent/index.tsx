import * as React from 'react';

interface AppContentProps {
    children?: JSX.Element | JSX.Element[];
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
    return (
        <div className="fixed w-full h-full z-10">
            {children}
        </div>
    )
}

export default AppContent;