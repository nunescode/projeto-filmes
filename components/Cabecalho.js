import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">R12 Filmes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/filmes">Página inicial</Nav.Link>
            <Nav.Link href="/filmes">Filmes</Nav.Link>
            <Nav.Link href="/series">Séries</Nav.Link>
            <Nav.Link href="/atores">Atores</Nav.Link>
            <Nav.Link href="https://github.com/nunescode" target='blank'>Detalhes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho