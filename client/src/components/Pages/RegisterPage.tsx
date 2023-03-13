/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Grid, TextField, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { signUpUserActionThunk } from '../../features/actions/userActions';
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
  
};

function AuthForm({ title, submitButtonText, }: AuthFormProps) {

    const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  
        const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as UserSubmitForm;
    
    const roleId = data.roleId ? 2 : 1;
    dispatch(signUpUserActionThunk({...data, roleId}))
    .catch(() => null);

  };

  // const emailValidation = (value: string) => {
  //   // Check for @ symbol
  //   if (!value.includes('@')) {
  //     return 'Email должен содержать символ @';
  //   }
                                                       
  //   // Check for Latin letters
  //   const latinLetters = /[a-zA-Z]/;
  //   if (latinLetters.test(value)) {
  //     return 'Email не должен содержать латинские буквы';
  //   }
  
  //   return '';
  // };
  
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
              autoComplete="current-email"
              type="email"
              // InputProps={{ onBlur: (e) => emailValidation(e.target.value) }} // проверка на ввод
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
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox id="roleId" name="roleId" color="warning" />}
              label="Зарегистрироваться как продавец"
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

};

export default function RegisterPage({
  title,
  submitButtonText,

}: RegisterPageProps) {
  return (
    <AuthPageContainer>
      <AuthForm
        title={title}
        submitButtonText={submitButtonText}
       
      />
    </AuthPageContainer>
  );
}
