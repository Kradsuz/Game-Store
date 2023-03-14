import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react';
import type { DBOfferType } from '../../../types';

type OneOfferProps = {
  offersSeller: DBOfferType;
};

export default function index({ offersSeller }: OneOfferProps): JSX.Element {
  return (
    <Row>
  <Col>
    <ListGroup.Item>
      <img
        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${
          offersSeller.Game?.cover as string
        }.jpg`}
        alt="aaaa"
      />
  <Col>
    <ListGroup.Item>
      <h2>{offersSeller.Game?.name}</h2>
      <h4>{offersSeller.Platform?.name}</h4>
      <h3>{offersSeller.price}</h3>
      <h3>{offersSeller.time}</h3>
    </ListGroup.Item>
  </Col>
    </ListGroup.Item>
  </Col>
</Row>

  );
}
