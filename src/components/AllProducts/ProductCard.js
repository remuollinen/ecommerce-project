import React from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";

const ProductCard = ({ id, image, title, price }) => {
	return (
		<Link to={`${id}`} className="product-card">
			<div className="image-wrapper">
				<img src={image} alt={title} />
			</div>
			<div className="card-content">
				<h3>{title}</h3>
				<p>{price} €</p>
			</div>
		</Link>
	);
};

export default ProductCard;
