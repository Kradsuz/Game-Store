import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Typography } from '@mui/material';

import type { GameType } from '../../../types';

type OneOfferProps = {
  offer: DBOfferType;
};

export default function OneOffer({ game }: OneOfferProps): JSX.Element {
  const dispatch = useDispatch();


 

  return (
    <Card>
      <Typography gutterBottom variant="h5" component="h2" align="center">
        {game.name}
      </Typography>
    </Card>
  );
}
