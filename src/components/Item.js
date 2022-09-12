import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
function Item(props) {
  const cardStyles = {
    width: '15rem',
    marginBottom: '10px',
    margin: 'auto',
  };
  return (
    <React.Fragment>
      <Card style={cardStyles} onClick={() => props.whenItemClicked(props.id)}>
        <Card.Body>
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
      </Card>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  quantityUnit: PropTypes.string,
  id: PropTypes.string,
  sellItem: PropTypes.func,
  whenItemClicked: PropTypes.func,
};

export default Item;
