import { SwitchPlayer } from "./urlParsers"

const YouTubeGetID = (url: string) => {
    const testedUrl = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (testedUrl[2] !== undefined) ? testedUrl[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }
export const getAlbumCover = (url: string) => {
    const platform = SwitchPlayer(url);
    if (platform === 'YouTube') {
        return `https://img.youtube.com/vi/${YouTubeGetID(url)}/0.jpg`;
    }

    if (platform === 'Soundcloud') {
        return 'https://i1.sndcdn.com/avatars-wQ2we7uDPoXzUVzW-qdr1Yg-t500x500.jpg'
    }

    if (platform === 'None') {
        return 'https://previews.123rf.com/images/lassedesignen/lassedesignen1704/lassedesignen170400247/75550433-sad-dog.jpg'
    }

    else {
        return 'https://previews.123rf.com/images/lassedesignen/lassedesignen1704/lassedesignen170400247/75550433-sad-dog.jpg'
    }
}