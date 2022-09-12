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
          name: 'Chocolate Delight',
          quantity: 3,
          quantityUnit: 'lbs',
          origin: 'Italy',
          roast: 'Dark',
          price: 10,
          id: '1001',
        },
        {
          name: 'Acidic Adventure',
          quantity: 8,
          quantityUnit: 'lbs',
          origin: 'Ethiopia',
          roast: 'Light',
          price: 12,
          id: '1002',
        },
        {
          name: 'Complex Aroma',
          quantity: 2,
          quantityUnit: 'lbs',
          origin: 'Colombia',
          roast: 'Light',
          price: 11,
          id: '1003',
        },
        {
          name: 'Wild Roast',
          quantity: 4,
          quantityUnit: 'lbs',
          origin: 'Kenya',
          roast: 'Light',
          price: 12,
          id: '1004',
        },
        {
          name: 'Aloha Kona',
          quantity: 7,
          quantityUnit: 'lbs',
          origin: 'Hawaii',
          roast: 'Medium',
          price: 14,
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
    this.setState({
      selectedItem: selectedTicket,
      newItemFormVisible: false,
    });
  };

  handleSellingItem = (id) => {
    let newTotalSales = this.state.totalSales;
    const newItemList = this.state.itemList.map((item) => {
      if (item.id === id) {
        const quantity = item.quantity;
        if (quantity > 0) {
          const newQuantity = quantity - 1;
          newTotalSales += item.price;
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    this.setState({
      itemList: newItemList,
      totalSales: newTotalSales,
    });
  };

  handleAddInventory = (id) => {
    const newItemList = this.state.itemList.map((item) => {
      if (item.id === id) {
        if (item.quantityUnit === 'lbs') {
          const newQuantity = item.quantity + 130;
          return { ...item, quantity: newQuantity };
        } else if (item.quantity === 'kg') {
          const newQuantity = item.quantity + 59;
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    this.setState({
      itemList: newItemList,
    });
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
          addBurlap={this.handleAddInventory}
        />
      );
      buttonText = 'Add New Item';
    }
    const buttonStyle = {
      padding: '30px',
    };
    return (
      <React.Fragment>
        <h1>Total Sales: ${this.state.totalSales}</h1>
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
