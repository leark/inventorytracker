import React from 'react';
import PropTypes from 'prop-types';

function Item() {
  return (
    <React.Fragment>
      <div>
        <h3>Item Name</h3>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Item;
