import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
class Caroussel extends Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay className="caroussel">
        <div className="caroussel-item">
          <img alt="" src="https://source.unsplash.com/1600x900/?laptop" />
          <p className="legend">item 1</p>
        </div>
        <div className="caroussel-item">
          <img alt="" src="https://source.unsplash.com/1600x900/?car" />
          <p className="legend">item 2</p>
        </div>
        <div className="caroussel-item">
          <img alt="" src="https://source.unsplash.com/1600x900/?phone" />
          <p className="legend">item 3</p>
        </div>
      </Carousel>
    );
  }
}

export default Caroussel;
