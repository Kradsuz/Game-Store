import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Form } from 'react-bootstrap';
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
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Game search:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Game"
            onChange={changeHandler}
          />
        </Form.Group>
      </Form>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {dbGames.map((el) => (
          <OneGameDB key={el.id} game={el} />
        ))}
      </Grid>
    </>
  );
}
