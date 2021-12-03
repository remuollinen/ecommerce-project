import React, { Component } from "react";
import "./SingleProduct.css";
import axios from "axios";

function getSingleProduct(productId) {
	return axios.get(`https://fakestoreapi.com/products/${productId}`);
}

class SingleProduct extends Component {
	state = {
		singleProduct: "",
	};

	componentDidMount() {
		Promise.all([getSingleProduct(this.props.params.id)]).then((res) =>
			this.setState({ singleProduct: res[0] })
		);
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
						<p> {this.state.singleProduct.description}</p>
					</div>
					<h3 className="single-product-rating-header">Product rating: </h3>
					<div className="single-product-rating">
						<p>{this.state.singleProduct.rating?.rate}</p>
					</div>
					<div className="single-product-reviews">
						<p>{this.state.singleProduct.rating?.count} reviews</p>
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
