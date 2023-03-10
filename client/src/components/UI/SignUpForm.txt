import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signUpUserActionThunk } from '../../features/actions';
import { useAppDispatch } from '../../features/reduxHooks';
import type { UserSubmitForm } from '../../types/userTypes';

export default function SignUpForm(): JSX.Element {

  const dispatch = useAppDispatch()

  const submitHandler = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as UserSubmitForm

    dispatch(signUpUserActionThunk(data))
    .catch(() => null)

  };
  
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Title" />
        <Form.Text className="text-muted" />
      </Form.Group>

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
