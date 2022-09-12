import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewItemForm(props) {
  function handleNewItemFormSubmit(event) {
    event.preventDefault();
    const item = event.target;
    props.onNewItemCreation({
      name: item.name.value,
      origin: item.origin.value,
      roast: item.roast.value,
      price: parseInt(item.price.value),
      quantity: parseInt(item.quantity.value),
      quantityUnit: item.quantityUnit.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleNewItemFormSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control
            id='name'
            type='string'
            placeholder='Enter name'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='origin'>Origin</Form.Label>
          <Form.Control
            id='origin'
            type='string'
            placeholder='Enter origin'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='roast'>Roast Level</Form.Label>
          <Form.Select id='roast' required>
            <option value='Light'>Light</option>
            <option value='Medium'>Medium</option>
            <option value='Dark'>Dark</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='price'>Price in dollars</Form.Label>
          <Form.Control
            id='price'
            type='number'
            placeholder='Enter price'
            min='0'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='quantity'>Quantity</Form.Label>
          <Form.Control
            id='quantity'
            type='number'
            placeholder='Enter quantity'
            min='0'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='quantityUnit'>Quantity Unit</Form.Label>
          <Form.Control
            id='quantityUnit'
            type='string'
            placeholder='Enter quantity unit'
            required
          />
        </Form.Group>
        <Button type='submit'>Add New Item</Button>
      </Form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
};

export default NewItemForm;
