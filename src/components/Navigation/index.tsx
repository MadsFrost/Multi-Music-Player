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
interface NavigationProps {
    image: string;
    percentage: number;
    max: number;
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = (props) => {
    const { image, percentage, max, isPlaying, setPlaying } = props;
    const { pathname } = useLocation();
    const isPlayer = pathname === '/';
    const iconStyle = { color: 'white', fontSize: '1.75em' }
    const iconPlayerStyle = { color: 'white', opacity: 0.7, fontSize: '1.75em' }
    const getPlayer = (path: string) => {
        return <NavPlayer max={max} percentage={percentage} image={image} path={path}/>;
    }

    return (
            <>
                {!isPlayer && (
                    <NavWrapper>
                        <NavItem icon={<FaHome style={iconPlayerStyle}/>} path='/music' />
                        <NavItem icon={<FaThList style={iconPlayerStyle} />} path='/music' />
                        {getPlayer('/')}
                        <NavItem icon={<FaHeart style={iconPlayerStyle} />} path='/music' />
                        <NavItem icon={<FaVolumeUp style={iconPlayerStyle} />} path='/music' />
                    </NavWrapper>
                )}
                {isPlayer && (
                    <NavWrapper>
                        <NavItem icon={<FaFastBackward style={iconStyle}/>} />
                        <NavItem icon={<FaBackward style={iconStyle} />} />
                        <NavItem onClick={() => setPlaying(!isPlaying)} icon={isPlaying ? <FaPause style={iconStyle} /> : <FaPlay style={iconStyle} />} />
                        <NavItem icon={<FaForward style={iconStyle} />} />
                        <NavItem icon={<FaFastForward style={iconStyle} />} />
                    </NavWrapper>
                )}
            </>
    )
}

export default Navigation;