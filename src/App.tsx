import React from "react";
import AppWrapper from "./components/AppWrapper"; 
import AppContent from "./components/AppContent";
import Background from "./components/Background";
import AppPlayer from './components/AppPlayer';
import {
  BrowserRouter
} from "react-router-dom";
import CustomPlayer from "./components/controller/CustomPlayer";
import { getAlbumCover } from "./util/getAlbumCover";

export interface Track {
  image: string;
  url: string;
  name: string;
}

export type Playlist = Track[]

export interface CurrentTrack {
  playlist: Playlist;
  track: Track;
  songDuration: number;
  songProgress: number;
  isPlaying: boolean;
}

function App() {
  const playlist: Track[] = [
    {
      image: getAlbumCover('https://soundcloud.com/asger-clemen/cali-to-japan'),
      url: 'https://soundcloud.com/asger-clemen/cali-to-japan',
      name: 'Dansk Mashup pt. 1'
    },
    {
      image: getAlbumCover('https://www.youtube.com/watch?v=OkHD4OVjS4E&ab_channel=TimHenson'),
      url: 'https://www.youtube.com/watch?v=OkHD4OVjS4E&ab_channel=TimHenson',
      name: 'Come On, Lets Go'
    }
  ]
  const [tracklist, setTrackList] = React.useState<Playlist>(playlist)
  const [playerOptions, setPlayer] = React.useState<CurrentTrack>({
    playlist: trackList,
    track: playlist[0],
    songDuration: 0,
    songProgress: 0,
    isPlaying: false
  })

  const setTrack = (track: )
  const setPlaying = (isPlaying: boolean) => {
    setPlayer({ ...playerOptions, isPlaying: isPlaying })
  }

  const getDuration = (duration: number) => {
    setPlayer({ ...playerOptions, songDuration: duration })
  }

  const getProgress = (progress: number) => {
    setPlayer({ ...playerOptions, songProgress: progress })
  }

  const gotoPreviousSong = () => {

  }

  const gotoNextSong = () => {

  }




  const PlayerControlDetails = {
    image: playerOptions.track.image,
    percentage: playerOptions.songProgress,
    max: playerOptions.songDuration,
    isPlaying: playerOptions.isPlaying,
    setPlaying: setPlaying
  }

  return (
    <div>
      <AppWrapper>
        <CustomPlayer
            start={2}
            isPlaying={playerOptions.isPlaying}
            setPlaying={setPlaying}
            track={playerOptions.track}
            getProgress={getProgress}
            getDuration={getDuration}
        />
        <AppContent>
          <BrowserRouter>
            <AppPlayer playlist={tracklist} controlProps={PlayerControlDetails} />
          </BrowserRouter>
        </AppContent>
        <Background image={playerOptions.track.image} />
      </AppWrapper>
    </div>
  );
}

export default App;
