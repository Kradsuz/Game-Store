import React, { useRef } from 'react';
import { Grid, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
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
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <form onSubmit={submitHandler}>
          <TextField
            label="Game"
            placeholder="Enter email"
            inputRef={gameInputRef}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Grid>

      {search.map((el) => (
        <OneGame key={el.id} game={el} />
      ))}
    </Grid>
  );
}
