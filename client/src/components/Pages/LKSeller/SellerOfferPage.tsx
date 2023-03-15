import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import LKSeller from './LKSeller';

import { useAppDispatch, useAppSelector } from '../../../features/reduxHooks';
import { getOfferBySellerThunkAction } from '../../../features/actions/dbThunkActions';

export default function PostPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const allOffersSeller = useAppSelector((state) => state.dbData.sellerOffers);

  useEffect(() => {
    dispatch(getOfferBySellerThunkAction()).catch(() => {});
  }, []);

  return (
    <Row className="mt-5">
      <Col>
        <ListGroup>
          {allOffersSeller?.map((el) => (
            <LKSeller key={el.gameId} offersSeller={el} />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
