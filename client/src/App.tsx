import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import PrivateRouter from './components/HOC/PrivateRouter';
import AuthPage from './components/Pages/AuthPage';
import MainPage from './components/Pages/MainPage';
import OnePostPage from './components/Pages/OnePostPage';
import PostPage from './components/Pages/PostPage';
import WordsPage from './components/Pages/WordsPage';
import AppNavbar from './components/UI/AppNavbar';
import { checkUserActionThunk } from './features/actions';
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
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/words" element={<WordsPage />} />
        <Route path="/posts/:id" element={<OnePostPage />} />
        <Route
          element={
            <PrivateRouter isAllowed={!(status === 'logged')} redirectTo="/" />
          }
        >
          <Route path="/auth/:type" element={<AuthPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
