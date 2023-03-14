import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../features/reduxHooks';
import OneOffer from '../OneOffer';
import { getOffersThunkAction } from '../../../features/actions/dbThunkActions';
import type { DBOfferType } from '../../../types';

type PropsType = {
    id: number
}

export default function SellerOffers({id}:PropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const sellerData = useAppSelector((state) => state.dbData.gameOffers);

  const handleOffers = (data: number): void => {
    dispatch(getOffersThunkAction(data)).catch(() => {});
  };
  useEffect(() => {
    handleOffers(id)
  }, [])
  

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        {sellerData?.Offers?.map((el:DBOfferType) => (
          <OneOffer key={el.gameId} offer={el} />
        ))}
      </Grid>
    </Grid>
  );
}
