import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

import React from 'react';
import type { DBOfferType } from '../../../types';
import { useAppDispatch } from '../../../features/reduxHooks';
import { deleteOfferThunkAction } from '../../../features/actions/dbThunkActions';

type OneOfferProps = {
  offersSeller: DBOfferType;
};

export default function LKSeller({ offersSeller }: OneOfferProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Row>
      <Col>
        <ListGroup.Item>
          <Row>
            <Col sm={2}>
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${
                  offersSeller.Game?.cover as string
                }.jpg`}
                alt="aaaa"
              />
            </Col>
            <Col sm={10}>
              <h2>{offersSeller.Game?.name}</h2>
              <h4>{offersSeller.Platform?.name}</h4>
              <h3>{offersSeller.price}</h3>
              <h3>{offersSeller.time}</h3>
              <Button
                onClick={() =>
                  dispatch(deleteOfferThunkAction(offersSeller.id)).catch(
                    () => {},
                  )
                }
              >
                Продано
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </Col>
    </Row>
  );
}
