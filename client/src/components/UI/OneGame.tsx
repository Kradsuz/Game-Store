import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import type { GameType } from '../../types';

type OneGameProps = {
  game: GameType;
};

function OneGame({ game }: OneGameProps): JSX.Element {
  return (
    <Col md={6} className="mt-2">
      <Card style={{ height: '20rem' }}>
        <Row>
          <Col xs={4}>
            {/* <Link to={`/${hero.id}`}> */}
            <Card.Img
              variant="top"
              src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.jpg`}
            />
            {/* </Link> */}
          </Col>
          <Col xs={8}>
            <Card.Body className="d-flex flex-column">
              <Card.Title>{game.name}</Card.Title>
              <Card.Text>About: {game.summary}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default OneGame;
