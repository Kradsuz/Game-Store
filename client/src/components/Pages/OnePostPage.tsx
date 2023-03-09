import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router';

export default function OnePostPage(): JSX.Element {
  const { id } = useParams();
  return (
    <Row>
      <Col>
          OnePost
      </Col>
    </Row>
  );
}
