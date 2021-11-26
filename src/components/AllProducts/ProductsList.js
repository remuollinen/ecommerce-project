import React, { Component } from "react";
import "./ProductsList.css";

class ProductsList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div className="products-page">
        <div className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
          </ul>
        </div>
        <div className="products-container">
          {this.state.data.map((product) => {
            return (
              <div className="product-card" key={product.id}>
                <div className="image-wrapper">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.price} €</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductsList;
