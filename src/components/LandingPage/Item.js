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
// // category: "men's clothing"
// description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
// id: 3
// image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
// price: 55.99
// rating: {rate: 4.7, count: 500}
// title: "Mens Cotton Jacket"
