import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./cutlery.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Vintage
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header