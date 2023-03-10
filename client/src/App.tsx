/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import LoginPage from './components/Pages/LoginPage';
import MainPage from './components/Pages/MainPage';
import RegisterPage from './components/Pages/RegisterPage';
import TestApi from './components/Pages/TestApi';
import NavBar from './components/UI/NavBar';

import { useAppDispatch, useAppSelector } from './features/reduxHooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAuthSubmit = () => {
    // handle authentication
  };
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sellers" element={<TestApi />} />
        <Route path="/auth/signin" element={<LoginPage title="Вход" submitButtonText="Sign in" onSubmit={handleAuthSubmit}/>} />
        <Route path="/auth/signup" element={<RegisterPage title="Регистрация" submitButtonText="Sign up" onSubmit={handleAuthSubmit}/>} />
      </Routes>
    </Container>
  );
}

export default App;
