import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import type { DbGameType } from '../../types';

type OneGameProps = {
  game: DbGameType;
};

function OneGame({ game }: OneGameProps): JSX.Element {
  console.log(game);

  return (
    <Grid item xs={4} sx={{ height: '100%' }}>
      <Card
        sx={{ marginTop: 3, marginLeft: 6, width: '380px', height: '400px' }}
      >
        {/* <Link to={`/games/${game.id}`}> */}
        <CardMedia
          component="img"
          alt="gameImg"
          height='230'
          image={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${game?.cover}.jpg`}
        />
        {/* </Link> */}
        <CardContent sx={{ marginTop: 'auto', marginBottom: 'auto', padding: 3 }}>
          <Typography gutterBottom variant="h6" component="div">
            {game.name}
          </Typography>
          <Typography>{game.genres}</Typography>
          <Typography>{game.rating}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default OneGame;
