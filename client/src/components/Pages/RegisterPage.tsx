/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';

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
  onSubmit: (name: string, email: string, password: string) => void;
};

function AuthForm({ title, submitButtonText, onSubmit }: AuthFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(name, email, password);
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
              id="name"
              label="Введите ник"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
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
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
  onSubmit: (name: string, email: string, password: string) => void;
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
