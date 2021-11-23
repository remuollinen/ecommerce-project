import React, { Component } from "react";
import "./ProductsList.css";

export default class ProductsList extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				this.setState({ data: json });
			});
	}

	render() {
		return (
			<div className="products-container">
				{this.state.data.map((prod) => {
					return (
						<div key={prod.id} className="product-card">
							<div className="image-wrapper">
								<img src={prod.image} alt={prod.title} />
							</div>
							<div className="card-text">
								<h2>{prod.title}</h2>
								<p>{prod.price} €</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
