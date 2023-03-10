import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';

import { Button, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import getGamesThunkAction from '../../features/actions/gameThunkActions';
import OneGame from '../UI/OneGame';

export default function TestApi(): JSX.Element {
  
  const dispatch = useAppDispatch();
  
  const gameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    const gameInputValue = gameInputRef.current?.value;
    if (gameInputValue) dispatch(getGamesThunkAction(gameInputValue)).catch(() => {});
  };

  const search = useAppSelector((state) => state.games);

  return (
    <Row>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Game</Form.Label>
            <Form.Control type="text" placeholder="Enter email" ref={gameInputRef} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      
        {search.map((el) => (
        <OneGame key={el.id} game={el} />
      ))}
    </Row>
  );
}