import React, { useEffect } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Box,
  Container,
  Paper,
} from '@mui/material';
import { useParams } from 'react-router-dom';
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
    <Container>
      <Card
        sx={{
          border: '1px solid #000',
          borderRadius: '10px',
          backgroundImage: 'linear-gradient(to right, gray, #ffffff)',
          display: 'flex',
          maxWidth: 1200,
          maxHeight: 700,     
          marginBottom: 1,
        }}
      >
        <CardMedia
          component="img"
          alt="gameImg"
          height="720"
          width="1280"
          image={`https://images.igdb.com/igdb/image/upload/t_720p/${
            game?.cover as string
          }.jpg`}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Box
              sx={{
                backgroundImage: 'linear-gradient(to right, gray, #ffffff)',
                borderRadius: '10px',
                p: 4,
                display: 'inline-block',
              }}
            >
              <Typography gutterBottom variant="h3" component="div">
                {game?.name}
              </Typography>
              <Typography>Жанр: {game?.genres}</Typography>
              <Typography>Оценка издательств: {game?.rating}</Typography>
            </Box>
            <Typography>{game?.summaru}</Typography>
          </CardContent>
        </Box>
      </Card>
      {game && <SellerOffers sellerData={game} />}
    </Container>
  );
}

export default OneGameDBDetailed;
