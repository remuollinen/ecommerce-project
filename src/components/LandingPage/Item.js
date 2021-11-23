import React from "react";

const Item = (props) => {
  return (
    <div className="item-container">
      <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt="" />
      <button className="button">
        Shop <span>{props.category}</span>
      </button>
    </div>
  );
};

export default Item;
