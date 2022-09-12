import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const item = props.item;
  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h4>Name: {item.name}</h4>
      <h4>Origin: {item.origin}</h4>
      <h4>Roast Level: {item.roast}</h4>
      <h4>Price: ${item.price}</h4>
      <h4>
        Inventory: {item.quantity} {item.quantityUnit}
      </h4>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
};

export default ItemDetail;
