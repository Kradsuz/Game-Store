/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
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

type UserFormData = {
  username: string;
  email: string;
  password: string;
  message: string; // добавляем это свойство
  roleId?: boolean;
  // emailExists?: boolean; // добавляем это свойство
  // usernameExists?: boolean; // добавляем это свойство
};

// type ErrorData = {
//   emailExists?: boolean; по
//   usernameExists?: boolean;
// };

function AuthForm({ title, submitButtonText }: AuthFormProps) {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<Partial<UserFormData>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as UserSubmitForm;

    if (data.pass !== data.confirmPass) {
      return setError({ message: 'Пароли не совпадают' });
    }
    const roleId = data.roleId ? 2 : 1;
    dispatch(signUpUserActionThunk({ ...data, roleId }))
      //   .catch(
      //     (err: AxiosError<ErrorData>) => {
      //       const errorData = err.response?.data;
      //       if (errorData?.emailExists) {
      //         setError({ emailExists: true });
      //       } else if (errorData?.usernameExists) {
      //         setError({ usernameExists: true });
      //       } else {
      //         setError({ message: 'что-то пошло не так' });
      //       }
      //     },
      //   );
      // };
      .catch(() => null);
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
              // error={!!error.usernameExists}
              // helperText={error.usernameExists && 'Пользователь с таким ником уже существует'}
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
              // error={!!error.emailExists}
              // helperText={error.emailExists && 'Этот email уже зарегистрирован'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Введите пароль"
              type="password"
              id="pass"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPass"
              label="Повторите пароль"
              type="password"
              id="confirmPass"
              autoComplete="current-password"
              error={!!error.message}
              helperText={error.message}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox id="roleId" name="roleId" color="warning" />}
            label="Зарегистрироваться как продавец"
          />
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
      <AuthForm title={title} submitButtonText={submitButtonText} />
    </AuthPageContainer>
  );
}
