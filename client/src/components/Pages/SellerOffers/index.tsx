import { Grid } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../../../features/reduxHooks'
import OneOffer from '../OneOffer'

export default function SellerOffers():JSX.Element {
    const dispatch = useAppDispatch();



  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            {game.map((el)=> (
                <OneOffer key={el.id} offer={el}/>
            ))}
    </Grid>
    )
}