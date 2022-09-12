import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
  const headerStyles = {
    color: '#FFFFFF',
    marginBottom: '20px',
  };
  return (
    <React.Fragment>
      <Navbar bg='dark' variant='dark' style={headerStyles}>
        <Container>
          <h1>Special Coffee Related Store or Something</h1>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
