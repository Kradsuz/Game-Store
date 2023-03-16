import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Typography } from '@mui/material';

import type { DBOfferType } from '../../../types';

type OneOfferProps = {
  offer: DBOfferType;
};

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     // justifyContent: 'space-between',
//     marginBottom: 1,
//   },
// });

export default function OneOffer({offer}:OneOfferProps): JSX.Element {
  // const classes = useStyles();

  return (
    <Card >
      <Typography gutterBottom variant="h5" component="h2" align="center">
            Seller: {offer.User?.username as string}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Price: {offer.price} $
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Conditions : {offer.time}, Platform: {offer.Platform?.name}
          </Typography>
    </Card>
  );
}
