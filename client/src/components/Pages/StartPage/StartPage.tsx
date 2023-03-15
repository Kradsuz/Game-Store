import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './StartPage.css'; // импортируем CSS файл

const ColorButton = styled(Button)({
  color: '#1cd635',
  border: '6px solid #1cd635',
  borderRadius: '15px',
  padding: '15px 25px',
  fontSize: '30px',
  fontFamily: 'tahoma',
  letterSpacing: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  textDecoration: 'none',
  backgroundColor: "transparent",
  filter:
    'drop-shadow(0 0 15px #1cd635) drop-shadow(0 0 50px #1cd635) contrast(2) brightness(2)',
  transition: '1s',
  '&:hover': {
    color: 'black',
    backgroundColor: '#1cd635',
    filter: 'drop-shadow(0 0 20px #1cd635) contrast(2) brightness(2)',
    textDecoration: 'none',
  },
});

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
        <Link to="/auth/signup" style={{textDecoration: "none"}}>
          <ColorButton variant="contained">Get Started</ColorButton>
        </Link>
      </div>
    </div>
  );
}
