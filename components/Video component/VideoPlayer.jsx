import React from 'react';
// import tvReel from '../assets/images/tvReel.mp4'
import tvReel from './assets/images/tvReel.mp4'

const VideoPlayer = () => {
  return (
    <div>
      <video src={tvReel} />
       
    </div>
  );
};

export default VideoPlayer;
