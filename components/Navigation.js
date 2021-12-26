import React, { useState } from 'react'
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap'
const Navigation = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href=''>Holzprojekt</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href=''>Home</Nav.Link>
            <Nav.Link href=''>Shop</Nav.Link>
            <Nav.Link href=''>Kontakt</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href=''>
              <i className='far fa-user pe-2'></i>
              Sign In
            </Nav.Link>
            <Nav.Link
              href=''
              onClick={() => {
                setShowModal(true)
              }}
            >
              <i className='fas fa-user-edit pe-2'></i>Registrieren
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal
        show={showModal}
        onHide={handleClose}
        size='lg'
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registrieren</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Abbrechen
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Jetzt registrieren
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Navigation
