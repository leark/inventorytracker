import React from 'react';
import Header from './Header';
import StoreControl from './StoreControl';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <StoreControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
