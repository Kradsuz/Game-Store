/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import PrivateRouter from './components/HOC/PrivateRouter';
import LoginPage from './components/Pages/LoginPage';
import MainPage from './components/Pages/MainPage';
import RegisterPage from './components/Pages/RegisterPage';
import TestApi from './components/Pages/TestApi';
import NavBar from './components/UI/NavBar';
import OneGameDetailed from './components/UI/OneGameDetailed';
import { checkUserActionThunk } from './features/actions/userActions';
import { wsInitAction } from './features/actions/wsActions';
import { useAppDispatch, useAppSelector } from './features/reduxHooks';

function App(): JSX.Element {
  const status = useAppSelector((state) => state.userData.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserActionThunk()).catch(() => null);
  }, []);

  useEffect(() => {
    if (status === 'logged') {
      dispatch(wsInitAction());
    }
  }, [status]);

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/sellers" element={<TestApi />} />
        <Route path="/sellers/:id" element={<OneGameDetailed />} />


        <Route
          element={
            <PrivateRouter isAllowed={!(status === 'logged')} redirectTo="/" />
          }
        >
        <Route
          path="/auth/signin"
          element={<LoginPage title="Вход" submitButtonText="Войти" />}
        />
        <Route
          path="/auth/signup"
          element={
            <RegisterPage title="Регистрация" submitButtonText="Sign up" />
          }
        /> </Route>

      </Routes>
    </Container>
  );
}

export default App;
