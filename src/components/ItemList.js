import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function ItemList(props) {
  return (
    <React.Fragment>
      <Container>
        <Row className='g-4'>
          {props.itemList.map((item, index) => (
            <Col key={index}>
              <Item
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                quantityUnit={item.quantityUnit}
                origin={item.origin}
                roast={item.roast}
                price={item.price}
                sellItem={props.sellItem}
                whenItemClicked={props.onItemSelection}
                addBurlap={props.addBurlap}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  sellItem: PropTypes.func,
  onItemSelection: PropTypes.func,
  addBurlap: PropTypes.func,
};

export default ItemList;
