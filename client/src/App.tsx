import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import PrivateRouter from './components/HOC/PrivateRouter';
import AuthPage from './components/Pages/AuthPage';

// import AuthPage from './components/Pages/AuthPage';
import MainPage from './components/Pages/MainPage';
import OnePostPage from './components/Pages/OnePostPage';
import PostPage from './components/Pages/PostPage';
import RegisterPage from './components/Pages/RegisterPage';
import TestApi from './components/Pages/TestApi';
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

  const handleAuthSubmit = (email: string, password: string) => {
    // handle authentication
  };
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/kamenev" element={<TestApi />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/words" element={<WordsPage />} />
        <Route path="/posts/:id" element={<OnePostPage />} />
        <Route
          element={
            <PrivateRouter isAllowed={!(status === 'logged')} redirectTo="/" />
          }
        >
          <Route path="/auth/signin" element={<AuthPage title="Вход" submitButtonText="Sign in" onSubmit={handleAuthSubmit}/>} />
          <Route path="/auth/signup" element={<RegisterPage title="Регистрация" submitButtonText="Sign up" onSubmit={handleAuthSubmit}/>} />

        </Route>
      </Routes>
    </Container>
  );
}

export default App;
