import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form } from 'react-bootstrap';
function Item(props) {
  const cardStyles = {
    width: '15rem',
    marginBottom: '10px',
    margin: 'auto',
  };
  return (
    <React.Fragment>
      <Card style={cardStyles}>
        <Card.Body onClick={() => props.whenItemClicked(props.id)}>
          <Card.Title>{props.name}</Card.Title>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>Origin: {props.origin}</ListGroup.Item>
            <ListGroup.Item>Roast: {props.roast}</ListGroup.Item>
            <ListGroup.Item>Price: ${props.price}</ListGroup.Item>
            <ListGroup.Item>
              Inventory: {props.quantity} {props.quantityUnit}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Button variant='primary' onClick={() => props.sellItem(props.id)}>
          Sell 1 Order
        </Button>
        <Button variant='success' onClick={() => props.addBurlap(props.id)}>
          Add a Burlap of Beans
        </Button>
        <Form.Text className='text-muted'>Unit can be only lbs or kg</Form.Text>
      </Card>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  quantityUnit: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  sellItem: PropTypes.func.isRequired,
  whenItemClicked: PropTypes.func.isRequired,
  addBurlap: PropTypes.func.isRequired,
};

export default Item;
