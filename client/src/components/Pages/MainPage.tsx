import React, { useEffect } from 'react';
import { Container, Grid, TextField } from '@mui/material';

import { getDBGamesThunkAction } from '../../features/actions/dbThunkActions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import OneGameDB from '../UI/OneGameDB';
import { checkFeature } from '../../features/slices/dbSlice';

export default function MainPage(): JSX.Element {
  const dbGames = useAppSelector((state) => state.dbData.dbGames);
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value;
    dispatch(checkFeature(input));
  };
  useEffect(() => {
    dispatch(getDBGamesThunkAction()).catch(() => {});
  }, []);

  return (
    <>
      <Container sx={{display:'flex', justifyContent:'center'}}>
        <TextField
          id="outlined-basic"
          label="Поиск по названию игры"
          onChange={changeHandler}
          sx={{ marginTop: 2, maxWidth:'1000px',minWidth:'700px' }}
        />
      </Container>
      <Grid container spacing={2}>
        {dbGames.filter(el=> el.Offers?.length > 0).map((el) => (
          <OneGameDB key={el.id} game={el} />
        ))}
      </Grid>
    </>
  );
}
