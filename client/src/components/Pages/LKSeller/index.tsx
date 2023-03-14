import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

import React from 'react';
import type { GameType } from '../../../types';

type OneOfferProps = {
  allOffersSeller: GameType;
};

export default function index({ allOffersSeller }: OneOfferProps): JSX.Element {
  return (
    <Grid item xs={3} sm={3} md={3} lg={3} sx={{ height: 400 }}>
      <Card sx={{ height: '100%' }}>
        <Link to={`/games/${game.id}`}>
          <CardMedia
            component="img"
            alt="gameImg"
            height="200"
            image={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${game?.cover?.image_id}.jpg`}
          />
        </Link>
        <CardContent className="d-flex flex-column">
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
