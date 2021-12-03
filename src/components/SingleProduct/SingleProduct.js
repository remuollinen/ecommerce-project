import React, { Component } from "react";
import "./SingleProduct.css";

class SingleProduct extends Component {
  state = {
    singleProduct: "",
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => this.setState({ singleProduct: json }));
  }

  render() {
    return (
      <div className="single-product-page">
        <div id="prduct-left">
          <div className="product-name">
            <h2>{this.state.singleProduct.title}</h2>
          </div>
          <div className="product-price">
            {this.state.singleProduct.price} €
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>
              {" "}
              {this.state.singleProduct.description} Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."
            </p>
            {/* <div className="rating">
                            <p>{this.state.singleProduct.rating}3.9</p> 
                        </div>
                        <div className="reviews">
                            <p>{this.state.singleProduct.reviews}120 Reviews</p>
                        </div> */}
          </div>
        </div>
        <div id="product-right">
          <div className="button-wrapper">
            <button className="cart-button">Add to cart</button>
          </div>
          <div className="single-product-image-wrapper">
            <img
              src={this.state.singleProduct.image}
              alt={this.state.singleProduct.title}
            />
          </div>
          <div className="button-wrapper-back">
            <button className="back-to-products">Back to products</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
