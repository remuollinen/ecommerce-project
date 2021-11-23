import React, { Component } from "react";
import Caroussel from "./Caroussel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Main extends Component {
	render() {
		return (
			<div className="main-wrapper">
				<Caroussel />
				<div className="description"></div>
			</div>
		);
	}
}

export default Main;
