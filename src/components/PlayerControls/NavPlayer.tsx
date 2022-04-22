import * as React from 'react';
import { CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NavLink } from "react-router-dom";

interface NavPlayerProps {
    percentage: number;
    max: number;
    image?: string;
    path: string;
}
const NavPlayer: React.FC<NavPlayerProps> = (props) => {
    const { percentage, image, path, max } = props;
    console.log(percentage, max);
    return (
        <NavLink to={path}>
            <CircularProgressbarWithChildren 
                value={percentage} 
                maxValue={max}
                counterClockwise={true}
                styles={{
                    // Customize the root svg element
                    root: {
                      width: '200px',
                      position: 'relative',
                      zIndex: 100
                    },
                    // Customize the path, i.e. the "completed progress"
                    path: {
                    // Path color
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0turn)',
                    transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                    },
                    // Customize the text
                    text: {
                    // Text color
                    fill: '#f88',
                    // Text size
                    fontSize: '16px',
                    },
                    // Customize background - only used when the `background` prop is true
                }}
            >
                <img className='w-full h-full rounded-full object-cover' src={image} alt=''/>
            </CircularProgressbarWithChildren>
        </NavLink>
    )
}

export default NavPlayer;