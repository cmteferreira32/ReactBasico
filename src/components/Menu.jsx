import React, { useCallback } from 'react'
import { Container, Nav, Navbar} from "react-bootstrap";

const Menu = () => {
  return (

<Navbar bg="primary" variant="dark" className="mb-2">
    <Container>
    <Navbar.Brand href="#home"><b>Front-end</b></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Components</Nav.Link>
      <Nav.Link href="#features">Guides</Nav.Link>
      <Nav.Link href="#pricing">API</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  )
}
export default Menu