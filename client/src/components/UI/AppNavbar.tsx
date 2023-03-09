import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { logouUserActionThunk } from '../../features/actions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';

export default function AppNavbar(): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const online = useAppSelector((state) => state.socketData.online);
  const dispatch = useAppDispatch();

  const logoutHandler = (): void => {
    dispatch(logouUserActionThunk()).catch(() => null);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto" style={{ flexGrow: 1 }}>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/posts">
            Posts
          </NavLink>
          <NavLink className="nav-link" to="/words">
            Words
          </NavLink>
          {userData.status !== 'logged' && (
            <>
              <NavLink className="nav-link" to="/auth/signin">
                signin
              </NavLink>
              <NavLink className="nav-link" to="/auth/signup">
                signup
              </NavLink>
            </>
          )}
        </Nav>
        {userData.status === 'logged' && (
          <>
            <Nav className="me-auto">
              <span className="nav-link" style={{ color: online ? "green" : 'red'}} >Hello, {userData?.user?.name}</span>
            </Nav>
            <Button
              onClick={logoutHandler}
              className="nav-link"
              variant="warning"
            >
              {' '}
              logout
            </Button>
          </>
        )}
      </Container>
    </Navbar>
  );
}
