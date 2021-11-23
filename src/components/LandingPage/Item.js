import React from "react";

const Item = (props) => {
  return (
    <div>
      <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt="" />
    </div>
  );
};

export default Item;
