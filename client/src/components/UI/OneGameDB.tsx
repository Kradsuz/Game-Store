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
  return (
    <Grid item xs={12} sm md sx={{ height: '100%' }}>
      <Card
        sx={{
          display: 'flex',
          marginTop: 3,
          marginLeft: 6,
          width: '420px',
          height: '250px',
        }}
      >
        {/* <Link to={`/games/${game.id}`}> */}
        <CardMedia
          component="img"
          alt="gameImg"
          height="200"
          image={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover}.jpg`}
          sx={{ height: '100%', width: '45%' }}
        />
        {/* </Link> */}
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
          <Typography>{game.date}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default OneGame;
