import React from "react";
import AppWrapper from "./components/AppWrapper"; 
import AppContent from "./components/AppContent";
import Background from "./components/Background";
import Navigation from './components/Navigation';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { MusicDashboard } from './pages';
import CustomPlayer from "./components/controller/CustomPlayer";
import { getAlbumCover } from "./util/getAlbumCover";
export interface Track {
  image: string;
  url: string;
  name: string;
}

function App() {
  const playlist1: Track[] = [
    {
      image: getAlbumCover('https://soundcloud.com/christianoganders/dansk-mashup-pt-1'),
      url: 'https://soundcloud.com/christianoganders/dansk-mashup-pt-1',
      name: 'Dansk Mashup pt. 1'
    },
    {
      image: getAlbumCover('https://www.youtube.com/watch?v=ikMLT729ArM&ab_channel=Prod.Smurph'),
      url: 'https://www.youtube.com/watch?v=ikMLT729ArM&ab_channel=Prod.Smurph',
      name: 'Come On, Lets Go'
    }
  ]
  const [playlist, setPlaylist] = React.useState<Track[]>()
  const [track, setTrack] = React.useState<Track>(playlist1[1])
  const [isPlaying, setPlaying] = React.useState<boolean>(false)
  const [songProgress, setSongProgress] = React.useState(0);
  const [songDuration, setSongDuration] = React.useState(0);
  const getDuration = (duration: number) => {
    setSongDuration(duration)
  }

  const getProgress = (progress: number) => {
    setSongProgress(progress)
  }
  return (
    <AppWrapper>
      <AppContent>
        <CustomPlayer 
          start={43}
          isPlaying={isPlaying}
          setPlaying={setPlaying}
          track={track}
          getProgress={getProgress}
          getDuration={getDuration} 
        />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div>123</div>} />
            <Route path="music" element={<MusicDashboard />}/>
          </Routes>
          <Navigation
            setPlaying={setPlaying} 
            isPlaying={isPlaying} 
            image={track.image} 
            percentage={songProgress} 
            max={songDuration}
          />
        </BrowserRouter>
      </AppContent>
      <Background image={track.image} />
    </AppWrapper>
  );
}

export default App;
