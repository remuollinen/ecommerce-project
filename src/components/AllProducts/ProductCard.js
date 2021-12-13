import React from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import Numeral from "react-numeral";

const ProductCard = ({ id, image, title, price }) => {
	return (
		<Link to={`${id}`} className="product-card">
			<div className="image-wrapper">
				<img src={image} alt={title} />
			</div>
			<div className="card-content">
				<h3>{title}</h3>
				<p>{<Numeral value={price} format={"0.00a"} />} €</p>
			</div>
		</Link>
	);
};

export default ProductCard;
