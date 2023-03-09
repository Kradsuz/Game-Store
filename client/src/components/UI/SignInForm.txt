import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignInForm(): JSX.Element {
  return (
    <Form>

      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Title" />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Title" />
        <Form.Text className="text-muted" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}