import { Playlist } from '../../App';
import * as React from 'react';
import PlayerControls, { PlayerControlsProps } from '../PlayerControls';
interface AppPlayerProps {
  playlist: Playlist;
  controlProps: PlayerControlsProps;
}

const AppPlayer: React.FC<AppPlayerProps>= (props) => {
  const { controlProps } = props;
  return (
      <PlayerControls {...controlProps } />
  )
}

export default AppPlayer;