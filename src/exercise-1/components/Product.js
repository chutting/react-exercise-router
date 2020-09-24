import React, {Component} from 'react';
const jsonObj = require('../../exercise-2/mockups/data.json');

class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    const productInfo = Object.values(jsonObj).find(product => product.id === Number(productId));
    this.setState({
      product: productInfo
    })
  }


  render() {
    return <div className="product-details">
      <p>Product Details:</p>
      {
        Object.keys(this.state.product).map(key => <p key={key}>{key}: {this.state.product[key]}</p>)
      }
      <p>URL: /products/{this.state.product.id}</p>
    </div> 
  }
}

export default Product;