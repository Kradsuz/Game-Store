/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { useAppDispatch } from '../../features/reduxHooks';
import { signInUserActionThunk} from '../../features/actions/userActions';
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
  onSubmit: (email: string, pass: string) => void;
};

function AuthForm({ title, submitButtonText, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(email, pass);
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as UserSubmitForm;
    dispatch(signInUserActionThunk(data)).catch(() => null);
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
              id="email"
              label="Введите почту"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Введи пароль"
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

type AuthPageProps = {
  title: string;
  submitButtonText: string;
  onSubmit: (email: string, pass: string) => void;
};

export default function AuthPage({
  title,
  submitButtonText,
  onSubmit,
}: AuthPageProps) {
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
