import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import type { GameType, ImagesType, PlatformsType } from '../../types';

type OneGameProps = {
  game: GameType;
};


function OneGame({ game }: OneGameProps): JSX.Element {
  const images: ImagesType = {
    PS5: 'https://logospng.org/download/ps5-playstation-5/logo-ps5-com-icone-256.png',
    PS4: 'https://logospng.org/download/ps4-playstation-4/logo-ps4-com-icone-256.png',
    PC: 'https://cdn.iconscout.com/icon/free/png-256/steam-43-282274.png?f=avif&w=256',
    XONE: 'https://logospng.org/download/xbox/logo-xbox-256.png',
    Switch: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Nintendo_Switch_Logo.svg',
    'Series X': 'https://logospng.org/download/xbox/logo-xbox-256.png',
    Mac: 'https://logospng.org/download/macos/macos-256.png',


}
const platforms = Array.from(new Set(game.platforms?.map((el) => el.abbreviation))).map((platform) => {
  if (platform in images) {
    return <img style={{ height: "80px" }} src={images[platform]} alt={platform} />;
  }
  return platform;
});
  return (
    <Grid item xs={12} sm md sx={{ height: '100%' }}>
      <Card
        elevation={15}
        sx={{
          borderRadius: 5,
          display: 'flex',
          marginTop: 3,
          marginLeft: 6,
          width: '420px',
          height: '250px',
        }}
      >
        <Link to={`/games/${game.id}`}>
          <CardMedia
            component="img"
            alt="gameImg"
            height="200"
            image={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover?.image_id}.jpg`}
            sx={{ height: '100%', width: '100%' }}
          />
        </Link>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 3,
            width: '50%',
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {game.name}
          </Typography>
          <Typography>{platforms}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default OneGame;
