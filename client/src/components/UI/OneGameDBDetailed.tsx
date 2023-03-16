import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../features/reduxHooks';
import { getDBGamesThunkAction } from '../../features/actions/dbThunkActions';
import SellerOffers from '../Pages/SellerOffers';


function OneGameDBDetailed(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const game = useAppSelector((state) =>
    state.dbData.dbGames.find((el) => el.id === Number(id)),
  );

  const handleDb = (): void => {
    dispatch(getDBGamesThunkAction()).catch(() => {});
  };

  useEffect(() => {
    handleDb();
  }, []);

  return (
    <CardContent>
      <CardMedia
        component="img"
        alt="gameImg"
        height="200"
        image={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover as string}.jpg`}
        sx={{ height: '30%', width: '30%' }}
      />
      <Typography>Название: {game?.name}</Typography>
      <Typography>Жанр: {game?.genres}</Typography>
      <Typography>Описание: {game?.summaru}</Typography>
      <Typography>Оценки: {game?.rating}</Typography>
      {game && <SellerOffers sellerData={game}/>}
    </CardContent>
  );
}

export default OneGameDBDetailed;
