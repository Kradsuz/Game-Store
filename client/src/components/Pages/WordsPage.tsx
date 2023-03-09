import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import WordInput from '../UI/WordInput';
import { useAppSelector } from '../../features/reduxHooks';

export default function WordsPage(): JSX.Element {
  const words = useAppSelector((state) => state.words);

  return (
    <Row>
      <Col>
        <WordInput />

        <ListGroup className="mt-5">
          {words?.map((el, index) => (
            <ListGroup.Item key={el.id}>
              {index + 1} - {el.word}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
