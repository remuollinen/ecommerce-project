import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const { cartItems, addItem, removeItem } = props;
  const subTotal = cartItems.reduce(
    (actual, cummulator) => actual + cummulator.price * cummulator.quantity,
    0
  );
  // console.log(subTotal);
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 && (
        <div className="cart-empty">
          <p>Cart is empty</p>
        </div>
      )}
      <div className="cart-body">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-details">
              <div className="cart-image-title">
                <h4>{item.title}</h4>
                <img src={item.image} alt={item.title}></img>
              </div>

              <div className="cart-price-quantity">
                <div className="cart-price-details">
                  <span>{item.quantity}</span> x <span>{item.price}</span> $
                </div>
                <div className="cart-add-Button">
                  <button onClick={() => addItem(item)}>+</button>
                  <button onClick={() => removeItem(item)}>-</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-sub-total">
          {cartItems.length !== 0 && (
            <div className="cart-non-empty">
              <div className="cart-subtotal">
                Your Subtotal : <span>{subTotal} €</span>
              </div>
              <div className="go-to-payment">
                <button> Go to payment </button>
              </div>
              <div className="cart-back-to-list">
                <Link to={"/shop"}> Keep shopping </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="cart-back-to-list">
        <Link to={"/shop"}> Keep shopping </Link>
      </div>
    </div>
  );
};

export default Cart;
