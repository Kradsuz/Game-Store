import { Grid } from '@mui/material';
import React from 'react';
import OneOffer from '../OneOffer';
import type { DbGameType, DBOfferType, ImagesType } from '../../../types';

type PropsType = {
  sellerData: DbGameType;
};

function SellerOffers({ sellerData }: PropsType): JSX.Element {
  return (
    <Grid container spacing={3}>
      {sellerData?.Offers?.map((offer: DBOfferType) => (
        <Grid item key={offer.id} xs={12} md={6}>
          <OneOffer offer={offer} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SellerOffers;
