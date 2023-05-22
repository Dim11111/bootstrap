import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ТурON</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">О нас</Nav.Link>
            <Nav.Link href="#features">Избранное</Nav.Link>
            <Nav.Link href="#pricing">Корзина</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-info">
              Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header