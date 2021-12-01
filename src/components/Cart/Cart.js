import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cartItems, addItem, removeItem } = props;
  const subTotal = cartItems.reduce(
    (actual, cummulator) => actual + cummulator.price * cummulator.quantity,
    0
  );
  // console.log(subTotal);
  return (
    <div className="cart-container">
      {cartItems.length === 0 && (
        <div>
          <p>Cart is empty</p>
        </div>
      )}
      <div className="items-container">
        <h2>Cart</h2>
        <div className="items">
          {cartItems.map((item) => (
            <div key={item.id} className="item-details">
              <div className="image-title-wrapper">
                <div className="item-title">{item.title}</div>
                <img src={item.image} alt={item.title}></img>
              </div>

              <div className="price-quantity">
                <span>{item.quantity}</span> x <span>{item.price}</span> $
                <div className="add-Button">
                  <button onClick={() => addItem(item)}>+</button>
                  <button onClick={() => removeItem(item)}>-</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sub-total">
        {cartItems.length !== 0 && <div> Your Sub-total : {subTotal}</div>}
        <div className="go-to-payment">
          <button> Go to payment </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
