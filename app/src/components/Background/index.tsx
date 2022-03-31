import * as React from 'react';

interface BackgroundProps {
    image: string;
}

const Background: React.FC<BackgroundProps> = ({ image }) => {
    return (
        <div className='w-full h-full bg-black z-10'>
            <img className={'bg-black w-full h-full blur-lg scale-[1.4] object-cover z-0'} src={image} alt={image} />
        </div>
    )
}

export default Background;