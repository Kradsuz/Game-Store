import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import MainPage from './components/Pages/MainPage';
import SellerGameAdd from './components/Pages/SellerGameAdd';
import NavBar from './components/UI/NavBar';

function App(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/seller" element={<SellerGameAdd />} />
      </Routes>
    </Container>
  );
}

export default App;
