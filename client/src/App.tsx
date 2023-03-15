/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import PrivateRouter from './components/HOC/PrivateRouter';
import LoginPage from './components/Pages/LoginPage';
import MainPage from './components/Pages/MainPage';
import LKMulter from './components/Pages/OneSeller/LKMulter';
import RegisterPage from './components/Pages/RegisterPage';
import TestApi from './components/Pages/TestApi';
import NavBar from './components/UI/NavBar';
import OneGameDetailed from './components/UI/OneGameDetailed';
import { checkUserActionThunk } from './features/actions/userActions';
import { wsInitAction } from './features/actions/wsActions';
import { useAppDispatch, useAppSelector } from './features/reduxHooks';

function App(): JSX.Element {
  const status = useAppSelector((state) => state.userData.status);
  const roleId = useAppSelector((state) => state.userData.user?.roleId);
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
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/games" element={<TestApi />} /> */}
        <Route path="/account" element={<LKMulter />} />
        <Route path="/games/:id" element={<OneGameDetailed />} />
        <Route
          element={
            <PrivateRouter isAllowed={!(roleId === 1)} redirectTo="/" />
          }
        >
           <Route path="/games" element={<TestApi />} />
        </Route>
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
          />{' '}
        </Route>
      </Routes>
    </>
  );
}

export default App;
