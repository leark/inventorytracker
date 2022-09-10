import React from 'react';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';

class StoreControl {
  constructor(props) {
    super(props);
  }

  render() {
    <React.Fragment>
      <ItemList />
      <NewItemForm />
      <ItemDetail />
    </React.Fragment>;
  }
}

export default StoreControl;
