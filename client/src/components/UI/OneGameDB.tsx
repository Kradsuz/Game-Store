import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import type { DbGameType, ImagesType } from '../../types';
import { getDBGamesThunkAction } from '../../features/actions/dbThunkActions';
import { useAppDispatch } from '../../features/reduxHooks';

type OneGameProps = {
  game: DbGameType;
};

function OneGame({ game }: OneGameProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleDb = (): void => {
    dispatch(getDBGamesThunkAction()).catch(() => {});
  };
  const images: ImagesType = {
    PS5: 'https://logospng.org/download/ps5-playstation-5/logo-ps5-com-icone-256.png',
    PS4: 'https://logospng.org/download/ps4-playstation-4/logo-ps4-com-icone-256.png',
    PC: 'https://logospng.org/download/steam/steam-256.png',
    XONE: 'https://logospng.org/download/xbox/logo-xbox-256.png'
}
const platforms = Array.from(new Set(game.Offers?.map((el) => el.Platform?.name))).map((platform) => {
  if (platform in images) {
    return <img style={{ height: "80px" }} src={images[platform]} alt={platform} />;
  }
  return platform;
});

  return (
    <Grid item xs={12} sm md sx={{ height: '100%' }}>
      <Link onClick={handleDb} to={`/db/${game.id}`}>
        <Card elevation={15}
          sx={{
            display: 'flex',
            marginTop: 3,
            marginLeft: 6,
            width: '420px',
            height: '250px',
          }}
        >
          <CardMedia
            component="img"
            alt="gameImg"
            height="200"
            image={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover}.jpg`}
            sx={{ height: '100%', width: '45%' }}
          />
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
      </Link>
    </Grid>
  );
}

export default OneGame;
