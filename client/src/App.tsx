import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router';
import PrivateRouter from './components/HOC/PrivateRouter';
import LoginPage from './components/Pages/LoginPage';
import MainPage from './components/Pages/MainPage';
import LKMulter from './components/Pages/OneSeller/LKMulter';
import RegisterPage from './components/Pages/RegisterPage';
import StartPage from './components/Pages/StartPage/StartPage';
import TestApi from './components/Pages/TestApi';
import NavBar from './components/UI/NavBar';
import OneGame from './components/UI/OneGame';
import OneGameDBDetailed from './components/UI/OneGameDBDetailed';
import OneGameDetailed from './components/UI/OneGameDetailed';
import { checkUserActionThunk } from './features/actions/userActions';
import { wsInitAction } from './features/actions/wsActions';
import { useAppDispatch, useAppSelector } from './features/reduxHooks';

function App(): JSX.Element {
  const location = useLocation();
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

  const styles = {
    background: {
      backgroundImage: 'url("https://phonoteka.org/uploads/posts/2022-02/1645023214_2-phonoteka-org-p-krutoi-igrovoi-fon-2.jpg")',
      backgroundColor: '#fff',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat-y',
      backgroundPosition: 'center',
      height: '100vh',
    },
  };
  return (
    <>
      <NavBar />
      {location.pathname === '/' ? (
        <StartPage />
      ) : (
        <Box sx={styles.background}>
      <Routes>
        <Route path="/" element={<StartPage />} />
       
        <Route path="/db" element={<MainPage />} />

        <Route path="/db/:id" element={<OneGameDBDetailed />} />

        <Route path="/account" element={<LKMulter />} />
        <Route
          element={
            <PrivateRouter isAllowed={!(roleId === 1) && (status === 'logged')} redirectTo="/" />
          }
        >
           <Route path="/games" element={<TestApi />} />
          <Route path="/games/:id" element={<OneGameDetailed />} />
        </Route>
        <Route
          element={
            <PrivateRouter isAllowed={!(status === 'logged')} redirectTo="/db" />
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
      </Box>
      )}
    </>
  );
}

export default App;
