import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { items } from "./items";
import Item from "./Item";
import { Link } from "react-router-dom";

class Caroussel extends Component {
	render() {
		const itemDisplay = items.map((item) => (
			<Item key={item.id} name={item.brand} category={item.category} />
		));
		return (
			<Carousel
				showThumbs={false}
				infiniteLoop
				autoPlay
				className="caroussel"
				exact="true"
			>
				<div className="welcome-section">
					<p>
						Welcome to our <span>webShop</span>
					</p>
					<button>
						<Link to="/shop">Go to Shop</Link>
					</button>
				</div>
				{itemDisplay}
			</Carousel>
		);
	}
}

export default Caroussel;
