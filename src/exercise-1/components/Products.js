import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const jsonObj = require('../../exercise-2/mockups/data.json');

class Products extends Component {
  state = {
    products: {}
  }

  componentDidMount() {
    this.setState({
      products: jsonObj
    })
  }

  render() {
    return <div className="products">
      <p>All Products:</p>
      <div className="products-list">
        {
          Object.keys(this.state.products).map(key => {
          return <Link to={`/products/${jsonObj[key].id}`} 
              className="product-item"
              key={`product-item-link-${key}`}>
              {key}
            </Link>
          })
        }
      </div>
    </div> 
  }
}

export default Products;