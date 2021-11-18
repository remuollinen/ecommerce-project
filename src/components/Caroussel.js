import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { items } from "./items";
import Item from "./Item";
class Caroussel extends Component {
  render() {
    const itemDisplay = items.map((item) => (
      <Item key={item.id} name={item.brand} />
    ));
    return (
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        className="caroussel"
        exact="true"
      >
        {itemDisplay}
      </Carousel>
    );
  }
}

export default Caroussel;
