/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { signUpUserActionThunk } from '../../features/actions';
import { useAppDispatch } from '../../features/reduxHooks';
import type { UserSubmitForm } from '../../types/userTypes';

const AuthPageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

const AuthFormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
});

type AuthFormProps = {
  title: string;
  submitButtonText: string;
  onSubmit: (username: string, email: string, pass: string) => void;
};

function AuthForm({ title, submitButtonText, onSubmit }: AuthFormProps) {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
    const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(username, email, pass);
        const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as UserSubmitForm;
    dispatch(signUpUserActionThunk(data)).catch(() => null);

  };

  return (
    <AuthFormContainer>
      <Typography variant="h5" align="center">
        {title}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Введите ник"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Введите ваш email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Введите пароль"
              type="password"
              id="pass"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {submitButtonText}
        </Button>
      </Box>
    </AuthFormContainer>
  );
}

type RegisterPageProps = {
  title: string;
  submitButtonText: string;
  onSubmit: (username: string, email: string, pass: string) => void;
};

export default function RegisterPage({
  title,
  submitButtonText,
  onSubmit,
}: RegisterPageProps) {
  return (
    <AuthPageContainer>
      <AuthForm
        title={title}
        submitButtonText={submitButtonText}
        onSubmit={onSubmit}
      />
    </AuthPageContainer>
  );
}
