import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Item(props) {
  const cardStyles = {
    width: '18rem',
    marginBottom: '10px',
  };
  return (
    <React.Fragment>
      <Card style={cardStyles}>
        <Card.Img variant='top' />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Item description</Card.Text>
        </Card.Body>
        <Button variant='primary'>Sell 1 Quantity</Button>
      </Card>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Item;
