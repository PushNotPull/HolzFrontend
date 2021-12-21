import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Navigation = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>Holzprojekt</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Shop</Nav.Link>
            <Nav.Link href='#pricing'>Kontakt</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#home'>
              <i className='far fa-user pe-2'></i>
              Sign In
            </Nav.Link>
            <Nav.Link href='#features'>
              <i className='fas fa-user-edit pe-2'></i>Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
