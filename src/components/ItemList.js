import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function ItemList(props) {
  return (
    <React.Fragment>
      {props.itemList.map((item, index) => (
        <div key={index}>
          <Item name={item.name} />
        </div>
      ))}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
};

export default ItemList;
