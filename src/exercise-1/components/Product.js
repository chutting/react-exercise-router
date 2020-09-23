import React, {Component} from 'react';
const jsonObj = require('../../exercise-2/mockups/data.json');

class Product extends Component {
  render() {
    const productId = this.props.match.params.id;

    const productInfo = Object.values(jsonObj).filter(product => product.id === Number(productId))[0];

    return <div className="product-details">
      <p>Product Details:</p>
      {
        Object.keys(productInfo).map(key => <p key={key}>{key}: {productInfo[key]}</p>)
      }
      <p>URL: /products/{productInfo.id}</p>
    </div> 
  }
}

export default Product;