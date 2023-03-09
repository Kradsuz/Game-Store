import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import OnePost from '../UI/OnePost';
import PostForm from '../UI/PostForm';

export default function PostPage(): JSX.Element {
  return (
    <>
      <PostForm />
      <Row className="mt-5">
        <Col>
          <ListGroup>
            <OnePost />
            <OnePost />
            <OnePost />
            <OnePost />
            <OnePost />
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
