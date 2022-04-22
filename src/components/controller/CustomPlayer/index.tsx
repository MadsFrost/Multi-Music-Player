import * as React from 'react';
import { Track } from '../../../App';
import ReactPlayer from 'react-player';
interface CustomPlayerProps {
    track: Track;
    getDuration: (duration: number) => void;
    getProgress: (progress: number) => void;
    isPlaying: boolean;
    setPlaying: (isPlaying: boolean) => void;
    start: number;
}
const CustomPlayer: React.FC<CustomPlayerProps> = (props) => {
    document.body.onkeyup = function(e){
        if(e.code === 'Space'){
            props.setPlaying(!props.isPlaying)
        }
    }
    const { track, getDuration, getProgress, isPlaying, start } = props;


    return ( 
        <div className='hidden'> 
            <ReactPlayer 
                url={track.url} 
                playing={isPlaying} 
                onDuration={(number) => getDuration(number)} 
                onProgress={(state) => getProgress(state.playedSeconds)}
                progressInterval={start}
                config={{
                    youtube: {
                        playerVars: { 
                            start: start
                        }
                    },
                    soundcloud: {
                        options: {
                            seek: start
                        }
                    }
                }}
            />
        </div>
    )
}

export default CustomPlayer;