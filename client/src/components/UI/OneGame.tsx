import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import type { GameType } from '../../types';

type OneGameProps = {
  game: GameType;
};

function OneGame({ game }: OneGameProps): JSX.Element {
  return (
    <Grid>
      <Card sx={{ maxWidth: 600 }}>
        {/* <Link to={`/${hero.id}`}> */}
        <CardMedia
          component="img"
          alt="gameImg"
          height="140"
          image={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.jpg`}
        />
        <CardContent className="d-flex flex-column">
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          <Typography>About: {game.summary}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Добавить</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default OneGame;
