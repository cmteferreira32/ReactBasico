import React, { useCallback } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (

    <div>

      <Navbar bg="primary" variant="dark" className="mb-2">
        <Container>
          <Navbar.Brand href="#home"><b>MENU</b></Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Objeto</Link>
            <Link className="nav-link" to="/contador">Contador</Link>
            <Link className="nav-link" to="/filmes/populares">Filmes Populares</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>

  )
}
export default Menu