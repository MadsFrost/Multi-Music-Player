import * as React from 'react';
import NavWrapper from './NavWrapper';
import NavItem from './NavItem';
import NavPlayer from './NavPlayer';
import { 
    FaFastForward,
    FaFastBackward,
    FaBackward,
    FaForward,
    FaHome,
    FaThList,
    FaHeart,
    FaVolumeUp,
    FaPause,
    FaPlay
} from 'react-icons/fa';
import {
    useLocation
} from "react-router-dom";

export interface PlayerControlsProps {
    image: string;
    percentage: number;
    max: number;
    isPlaying: boolean;
    setPlaying: (isPlaying: boolean) => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = (props) => {
    const { image, percentage, max, isPlaying, setPlaying } = props;
    const { pathname } = useLocation();
    const isPlayer = pathname === '/';
    const iconPlayerStyle = { color: 'white', opacity: 0.8, fontSize: '6em' }
    const getPlayer = (path: string) => {
        return <NavPlayer max={max} percentage={percentage} image={image} path={path}/>;
    }

    return (
            <>
                {isPlayer && (
                    <NavWrapper>
                        <NavItem icon={<FaFastBackward style={iconPlayerStyle}/>} path='/' />
                        <NavItem icon={<FaBackward style={iconPlayerStyle}/>} path='/' />
                        {getPlayer('/')}
                        <NavItem icon={<FaForward style={iconPlayerStyle}/>} path='/' />
                        <NavItem icon={<FaFastForward style={iconPlayerStyle}/>} path='/' />
                    </NavWrapper>
                )}
            </>
    )
}

export default PlayerControls;