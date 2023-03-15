import { color } from '@mui/system';
import React from 'react';
import YouTube from 'react-youtube';
import './StartPage.css'; // импортируем CSS файл

export default function StartPage(): JSX.Element {
  const videoOpts = {
    playerVars: {
      // настройки плеера
      autoplay: 1,
      controls: 0,
      loop: 1,
      playsinline: 1,
      mute: 1,
    },
  };

  return (
    <div className="video-background">
      <YouTube videoId="tNkrLjzv17s" opts={videoOpts} />
      <div className="content">
        <h1 className="title">Get Started</h1>
      </div>
    </div>
  );
}