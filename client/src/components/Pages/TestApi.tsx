import React, { useRef } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import getGamesThunkAction from '../../features/actions/gameThunkActions';
import OneGame from '../UI/OneGame';

export default function TestApi(): JSX.Element {
  const dispatch = useAppDispatch();

  const gameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    const gameInputValue = gameInputRef.current?.value;
    if (gameInputValue)
      dispatch(getGamesThunkAction(gameInputValue)).catch(() => {});
  };

  const search = useAppSelector((state) => state.apiData.games);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sx={{ marginTop: 2, display: 'flex' }}>
          <form onSubmit={submitHandler}>
            <TextField
              label="Введите имя игры"
              inputRef={gameInputRef}
              sx={{
                backgroundColor: '#ffffff',
                maxWidth: '1000px',
                minWidth: '700px',
                borderRadius: '10px'
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginTop: 1,
                marginLeft: 1,
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'gray',
                  color: 'black',
                },
              }}
            >
              Поиск
            </Button>
          </form>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {search.map((el) => (
          <OneGame key={el.id} game={el} />
        ))}
      </Grid>
    </>
  );
}
