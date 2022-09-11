import React from 'react';
import Header from './Header';
import StoreControl from './StoreControl';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <Header />
        <StoreControl />
      </div>
    </React.Fragment>
  );
}

export default App;
