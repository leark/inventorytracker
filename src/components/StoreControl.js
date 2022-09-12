import React from 'react';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';
import { Button, Container } from 'react-bootstrap';

class StoreControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSales: 0,
      newItemFormVisible: false,
      selectedItem: null,
      itemList: [
        {
          name: 'Item1',
          quantity: 3,
          quantityUnit: 'lbs',
          origin: 'Italy',
          roast: 'Dark',
          price: 12,
          id: '1001',
        },
        {
          name: 'Item2',
          quantity: 8,
          quantityUnit: 'lbs',
          origin: 'Ethiopia',
          roast: 'Light',
          price: 12,
          id: '1002',
        },
        {
          name: 'Item3',
          quantity: 2,
          quantityUnit: 'lbs',
          origin: 'Colombia',
          roast: 'Light',
          price: 12,
          id: '1003',
        },
        {
          name: 'Item4',
          quantity: 4,
          quantityUnit: 'lbs',
          origin: 'Kenya',
          roast: 'Light',
          price: 12,
          id: '1004',
        },
        {
          name: 'Item5',
          quantity: 7,
          quantityUnit: 'lbs',
          origin: 'Hawaii',
          roast: 'Medium',
          price: 12,
          id: '1005',
        },
      ],
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        newItemFormVisible: false,
        selectedItem: null,
      });
    } else {
      this.setState((prevState) => ({
        newItemFormVisible: !prevState.newItemFormVisible,
      }));
    }
  };

  handleAddingNewItemToList = (newItem) => {
    const newItemList = this.state.itemList.concat(newItem);
    this.setState({
      itemList: newItemList,
      newItemFormVisible: false,
    });
  };

  handleChangingSelectedItem = (id) => {
    const selectedTicket = this.state.itemList.filter(
      (ticket) => ticket.id === id
    )[0];
    console.log(selectedTicket);
    this.setState({
      selectedItem: selectedTicket,
      newItemFormVisible: false,
    });
  };

  handleSellingItem = (id) => {
    // setstate
    // also update totalsales
    const item = this.state.itemList.filter((item) => item.id === id)[0];
    const newItem = { ...item };
    console.log('You just sold something!');
  };

  render() {
    let currentVisibleState = false;
    let buttonText = null;
    if (this.state.selectedItem != null) {
      currentVisibleState = <ItemDetail item={this.state.selectedItem} />;
      buttonText = 'Return to List';
    } else if (this.state.newItemFormVisible) {
      currentVisibleState = (
        <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      );
      buttonText = 'Return to List';
    } else {
      currentVisibleState = (
        <ItemList
          itemList={this.state.itemList}
          sellItem={this.handleSellingItem}
          onItemSelection={this.handleChangingSelectedItem}
        />
      );
      buttonText = 'Add New Item';
    }
    const buttonStyle = {
      padding: '30px',
    };
    return (
      <React.Fragment>
        {currentVisibleState}
        <Container className='text-center'>
          <Button
            style={buttonStyle}
            className='btn btn-dark'
            onClick={this.handleClick}
          >
            {buttonText}
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default StoreControl;
