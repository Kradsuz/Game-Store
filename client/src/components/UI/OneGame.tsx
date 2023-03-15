import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import type { GameType, PlatformsType } from '../../types';

type OneGameProps = {
  game: GameType;
};

function OneGame({ game }: OneGameProps): JSX.Element {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ height: 400 }}>
      <Card
        sx={{
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
          {game?.platforms?.map((platform: PlatformsType) => (
            <Typography key={platform.id}>{platform.abbreviation}</Typography>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default OneGame;
