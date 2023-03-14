import { Grid } from '@mui/material';
import React from 'react';
import OneOffer from '../OneOffer';
import type { DbGameType, DBOfferType } from '../../../types';

type PropsType = {
    sellerData: DbGameType
}

export default function SellerOffers({sellerData}: PropsType): JSX.Element {


  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        {sellerData?.Offers?.map((el:DBOfferType) => (
          <OneOffer key={el.id} offer={el} />
        ))}
      </Grid>
    </Grid>
  );
}
