import React, { Component } from "react";
import "./SingleProduct.css";
import Numeral from "react-numeral";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";

class SingleProduct extends Component {
	state = {
		singleProduct: "",
	};

	componentDidMount() {
		fetch(`http://localhost:4000/api/products/${this.props.params.id}`)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					singleProduct: json,
				})
			);
	}
	addToCart = (product) => {
		snackbar.show("Added to cart!");
		fetch("http://localhost:4000/api/cart", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	render() {
		return (
			<div className="single-product-page">
				<div id="prduct-left">
					<div className="product-name">
						<h2>{this.state.singleProduct.title}</h2>
					</div>
					<div className="product-price">
						{
							<Numeral
								value={this.state.singleProduct.price}
								format={"0.00a"}
							/>
						}{" "}
						€
					</div>
					<div className="product-description">
						<h2>Description</h2>
						<p> {this.state.singleProduct.description}</p>
					</div>
					<h2 className="single-product-rating-header">Product rating: </h2>
					<div className="rating-and-review-wrapper">
						<div className="single-product-rating">
							<p>{this.state.singleProduct.rating?.rate}</p>
						</div>
						<div className="single-product-reviews">
							<p>{this.state.singleProduct.rating?.count} reviews</p>
						</div>
					</div>
				</div>
				<div id="product-right">
					<div className="button-wrapper">
						<button
							className="cart-button"
							onClick={() => this.addToCart(this.state.singleProduct)}
						>
							Add to cart
						</button>
					</div>
					<div className="single-product-image-wrapper">
						<img
							src={this.state.singleProduct.image}
							alt={this.state.singleProduct.title}
						/>
					</div>
					<div className="button-wrapper-back">
						<button
							className="back-to-products"
							onClick={() => this.props.navigate(-1)}
						>
							Back to products
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleProduct;
