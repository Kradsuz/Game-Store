import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../../features/reduxHooks';
import { clearWordsStore } from '../../features/slices/wordsSlice';
import getWordsSagaAction from '../../features/actions/wordsSagaAction';
import getWordsThunkAction from '../../features/actions/wordsThunkActions';

export default function WordInput(): JSX.Element {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input.trim()) {
      dispatch(getWordsThunkAction(input))
      .catch(() => undefined);
    }
  }, [input]);

  return (
    <Row>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicLogin">
          <Form.Label>Word</Form.Label>
          <Form.Control
            value={input}
            onChange={inputHandler}
            type="text"
            name="word"
            placeholder="Title"
          />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Button onClick={() => dispatch(clearWordsStore())}>Clear</Button>
      </Col>
    </Row>
  );
}
