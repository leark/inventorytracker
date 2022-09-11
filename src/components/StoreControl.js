import React from 'react';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';

class StoreControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [
        {
          name: 'Item1',
        },
        {
          name: 'Item2',
        }
      ]      
    }
  }

  render() {
    return (
    <React.Fragment>
      <ItemList itemList={this.state.itemList} />
      <NewItemForm />
      <ItemDetail />
    </React.Fragment>
    )
  }
}

export default StoreControl;
