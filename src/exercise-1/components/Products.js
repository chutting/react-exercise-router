import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const jsonObj = require('../../exercise-2/mockups/data.json');

class Products extends Component {

  render() {
    return <div className="products">
      <p>All Products:</p>
      <div className="products-list">
        {
          Object.keys(jsonObj).map(key => {
          return <div className="product-router-config" key={`product-item-link-${key}`}>
            <Link to={`/products/${jsonObj[key].id}`} 
              className="product-item">
              {key}
            </Link>
          </div>
          })
        }
      </div>
    </div> 
  }
}

export default Products;